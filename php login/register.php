<?php
require_once '../includes/db.php';

header('Content-Type: application/json');

// Check if data is sent via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];

    // 1. Server-Side Validation (Rubric Requirement)
    if (empty($username) || empty($email) || empty($password)) {
        echo json_encode(['success' => false, 'message' => 'All fields are required.']);
        exit;
    }

    // Email Regex Check
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email format.']);
        exit;
    }

    try {
        // 2. Check if user already exists
        $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ? OR username = ?");
        $stmt->execute([$email, $username]);
        
        if ($stmt->rowCount() > 0) {
            echo json_encode(['success' => false, 'message' => 'Username or Email already taken.']);
            exit;
        }

        // 3. Hash the password (Security Best Practice)
        $passwordHash = password_hash($password, PASSWORD_DEFAULT);

        // 4. Insert into DB
        $sql = "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$username, $email, $passwordHash]);

        // 5. Create a default 'Watchlist' for this user
        $userId = $pdo->lastInsertId();
        $stmtList = $pdo->prepare("INSERT INTO lists (user_id, name, is_default) VALUES (?, 'Watchlist', 1)");
        $stmtList->execute([$userId]);

        echo json_encode(['success' => true, 'message' => 'Registration successful! Please login.']);

    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
    }
}
?>