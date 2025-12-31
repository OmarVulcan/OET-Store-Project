<?php
// api/watchlist.php
// Handles Adding, Removing, and Fetching items for the logged-in user
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
    // 2. Get the user's default "Watchlist" ID from the 'lists' table
    // We assume 'register.php' already created the list, but we check just in case.
    $stmt = $pdo->prepare("SELECT id FROM lists WHERE user_id = ? AND is_default = 1 LIMIT 1");
    $stmt->execute([$userId]);
    $list = $stmt->fetch();

    if (!$list) {
        // Failsafe: Create list if it doesn't exist
        $stmt = $pdo->prepare("INSERT INTO lists (user_id, name, is_default) VALUES (?, 'Watchlist', 1)");
        $stmt->execute([$userId]);
        $listId = $pdo->lastInsertId();
    } else {
        $listId = $list['id'];
    }

    // 3. Handle GET Request (Fetch Items)
    if ($method === 'GET') {
        $stmt = $pdo->prepare("SELECT * FROM list_items WHERE list_id = ? ORDER BY id DESC");
        $stmt->execute([$listId]);
        $items = $stmt->fetchAll();
        
        // Normalize data to match JS expectations
        // (Our DB columns match the JS object structure nicely)
        echo json_encode(['success' => true, 'results' => $items]);
    } 
    
    // 4. Handle POST Request (Add or Remove)
    elseif ($method === 'POST') {
        $action = $_POST['action'] ?? 'add';

        if ($action === 'add') {
            // Collect data
            $tmdbId = $_POST['tmdb_id'];
            $mediaType = $_POST['media_type'];
            $title = $_POST['title'];
            $poster = $_POST['poster_path'];
            $vote = $_POST['vote_average'];

            // Check for duplicate
            $check = $pdo->prepare("SELECT id FROM list_items WHERE list_id = ? AND tmdb_id = ?");
            $check->execute([$listId, $tmdbId]);
            if ($check->rowCount() > 0) {
                echo json_encode(['success' => false, 'message' => 'Already in watchlist']);
                exit;
            }

            // Insert
            $sql = "INSERT INTO list_items (list_id, tmdb_id, media_type, title, poster_path, vote_average) 
                    VALUES (?, ?, ?, ?, ?, ?)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$listId, $tmdbId, $mediaType, $title, $poster, $vote]);

            echo json_encode(['success' => true, 'message' => 'Added to watchlist']);
        } 
        elseif ($action === 'remove') {
            $tmdbId = $_POST['tmdb_id'];
            
            // Delete
            $stmt = $pdo->prepare("DELETE FROM list_items WHERE list_id = ? AND tmdb_id = ?");
            $stmt->execute([$listId, $tmdbId]);

            echo json_encode(['success' => true, 'message' => 'Removed from watchlist']);
        }
    }

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'DB Error: ' . $e->getMessage()]);
}
?>