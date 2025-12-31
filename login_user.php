<?php
error_reporting(0); // Disable warning output
ini_set('display_errors', 0);
header('Content-Type: application/json');

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';

    if (empty($email) || empty($password)) {
        $response['status'] = 'error';
        $response['message'] = 'Email and Password are required.';
        echo json_encode($response);
        exit;
    }

    $file = 'users.txt';
    $login_success = false;
    $found_username = '';

    if (file_exists($file)) {
        $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            // Expected format: Username | Email | Password | Date
            $parts = explode('|', $line);
            
            if (count($parts) >= 3) {
                // Trim whitespace from stored data
                $stored_user = trim($parts[0]);
                $stored_email = trim($parts[1]);
                $stored_pass = trim($parts[2]);

                // Verification
                if ($email === $stored_email && $password === $stored_pass) {
                    $login_success = true;
                    $found_username = $stored_user;
                    break;
                }
            }
        }
    }

    if ($login_success) {
        $response['status'] = 'success';
        $response['message'] = 'Login Successful';
        $response['username'] = $found_username;
        $response['email'] = $email;
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Invalid Email or Password';
    }

} else {
    $response['status'] = 'error';
    $response['message'] = 'Invalid Request Method';
}

echo json_encode($response);
?>
