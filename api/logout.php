<?php
// api/logout.php
session_start();
session_destroy(); // Kill the session on the server
header('Content-Type: application/json');
echo json_encode(['success' => true]);
?>