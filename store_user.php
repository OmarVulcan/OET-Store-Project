<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password']; 

   
    $data = "$username | $email | $password | " . date("Y-m-d H:i:s") . "\n";


    $file = 'users.txt';
    if(file_put_contents($file, $data, FILE_APPEND | LOCK_EX)) {
        echo "User registered successfully!";
    } else {
        echo "Error: Could not save data.";
    }
} else {
    echo "Invalid Request";
}
?>
