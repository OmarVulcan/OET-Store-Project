<?php
// api/cart.php
// Handles Adding, Removing, and Fetching cart items for the logged-in user
require_once '../includes/db.php';
session_start();

header('Content-Type: application/json');

// 1. Security Check
if (!isset($_SESSION['user_id'])) {
    http_response_code(401); // Unauthorized
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit;
}

$userId = $_SESSION['user_id'];
$method = $_SERVER['REQUEST_METHOD'];

try {
    // 2. Handle GET Request (Fetch Cart Items)
    if ($method === 'GET') {
        $stmt = $pdo->prepare("SELECT * FROM cart WHERE user_id = ? ORDER BY added_at DESC");
        $stmt->execute([$userId]);
        $items = $stmt->fetchAll();

        echo json_encode(['success' => true, 'items' => $items]);
    }

    // 3. Handle POST Request (Add or Remove)
    elseif ($method === 'POST') {
        $action = $_POST['action'] ?? 'add';

        if ($action === 'add') {
            // Collect data
            $productId = $_POST['product_id'];
            $productTitle = $_POST['product_title'];
            $productPrice = $_POST['product_price'];
            $productImage = $_POST['product_image'] ?? '';
            $quantity = $_POST['quantity'] ?? 1;

            // Check for duplicate
            $check = $pdo->prepare("SELECT id, quantity FROM cart WHERE user_id = ? AND product_id = ?");
            $check->execute([$userId, $productId]);
            $existing = $check->fetch();

            if ($existing) {
                // Update quantity
                $newQuantity = $existing['quantity'] + $quantity;
                $update = $pdo->prepare("UPDATE cart SET quantity = ? WHERE id = ?");
                $update->execute([$newQuantity, $existing['id']]);
                echo json_encode(['success' => true, 'message' => 'Cart updated']);
            } else {
                // Insert new item
                $sql = "INSERT INTO cart (user_id, product_id, product_title, product_price, product_image, quantity) 
                        VALUES (?, ?, ?, ?, ?, ?)";
                $stmt = $pdo->prepare($sql);
                $stmt->execute([$userId, $productId, $productTitle, $productPrice, $productImage, $quantity]);
                echo json_encode(['success' => true, 'message' => 'Added to cart']);
            }
        } elseif ($action === 'remove') {
            $productId = $_POST['product_id'];

            // Delete
            $stmt = $pdo->prepare("DELETE FROM cart WHERE user_id = ? AND product_id = ?");
            $stmt->execute([$userId, $productId]);

            echo json_encode(['success' => true, 'message' => 'Removed from cart']);
        } elseif ($action === 'clear') {
            // Clear entire cart
            $stmt = $pdo->prepare("DELETE FROM cart WHERE user_id = ?");
            $stmt->execute([$userId]);

            echo json_encode(['success' => true, 'message' => 'Cart cleared']);
        } elseif ($action === 'update_quantity') {
            $productId = $_POST['product_id'];
            $quantity = $_POST['quantity'];

            if ($quantity <= 0) {
                // Remove item if quantity is 0 or less
                $stmt = $pdo->prepare("DELETE FROM cart WHERE user_id = ? AND product_id = ?");
                $stmt->execute([$userId, $productId]);
            } else {
                // Update quantity
                $stmt = $pdo->prepare("UPDATE cart SET quantity = ? WHERE user_id = ? AND product_id = ?");
                $stmt->execute([$quantity, $userId, $productId]);
            }

            echo json_encode(['success' => true, 'message' => 'Quantity updated']);
        }
    }

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'DB Error: ' . $e->getMessage()]);
}
?>