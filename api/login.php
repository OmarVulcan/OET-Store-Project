<?php
require_once '../includes/db.php';
session_start(); // Start the session to remember the user

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $password = $_POST['password'];

    if (empty($username) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'All fields are required.']);
        exit;
    }

    try {
        // 1. Find the user by username or email
        $stmt = $pdo->prepare("SELECT id, username, email, password_hash FROM users WHERE username = ? OR email = ?");
        $stmt->execute([$username, $username]);
        $user = $stmt->fetch();

        // 2. Verify Password
        if ($user && password_verify($password, $user['password_hash'])) {
            // Success! Set Session Variables
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['email'] = $user['email'];

            echo json_encode([
                'success' => true,
                'message' => 'Login successful!',
                'username' => $user['username'],
                'email' => $user['email'],
                'user_id' => $user['id']
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Invalid username or password.']);
        }

    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Database error.']);
    }
}
?>