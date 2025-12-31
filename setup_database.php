<?php
// Database Setup Script
// Run this file once to create the database and tables

$host = 'localhost';
$username = 'root';
$password = '';

try {
    // Connect without database to create it
    $pdo = new PDO("mysql:host=$host;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create database
    $pdo->exec("CREATE DATABASE IF NOT EXISTS oet_store CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    echo "✓ Database 'oet_store' created successfully<br>";

    // Use the database
    $pdo->exec("USE oet_store");

    // Create users table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            INDEX idx_email (email),
            INDEX idx_username (username)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "✓ Table 'users' created successfully<br>";

    // Create lists table (for watchlists)
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS lists (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            name VARCHAR(100) NOT NULL DEFAULT 'Watchlist',
            is_default TINYINT(1) DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
            INDEX idx_user_id (user_id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "✓ Table 'lists' created successfully<br>";

    // Create list_items table (items in watchlists)
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS list_items (
            id INT AUTO_INCREMENT PRIMARY KEY,
            list_id INT NOT NULL,
            tmdb_id INT NOT NULL,
            media_type VARCHAR(20) NOT NULL,
            title VARCHAR(255) NOT NULL,
            poster_path VARCHAR(255),
            vote_average DECIMAL(3,1),
            added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (list_id) REFERENCES lists(id) ON DELETE CASCADE,
            INDEX idx_list_id (list_id),
            INDEX idx_tmdb_id (tmdb_id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "✓ Table 'list_items' created successfully<br>";

    // Create cart table (shopping cart)
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS cart (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            product_id INT NOT NULL,
            product_title VARCHAR(255) NOT NULL,
            product_price DECIMAL(10,2) NOT NULL,
            product_image VARCHAR(255),
            quantity INT DEFAULT 1,
            added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
            INDEX idx_user_id (user_id),
            UNIQUE KEY unique_user_product (user_id, product_id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "✓ Table 'cart' created successfully<br>";

    // Create orders table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS orders (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            total_amount DECIMAL(10,2) NOT NULL,
            status VARCHAR(50) DEFAULT 'pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
            INDEX idx_user_id (user_id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "✓ Table 'orders' created successfully<br>";

    // Create order_items table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS order_items (
            id INT AUTO_INCREMENT PRIMARY KEY,
            order_id INT NOT NULL,
            product_id INT NOT NULL,
            product_title VARCHAR(255) NOT NULL,
            product_price DECIMAL(10,2) NOT NULL,
            quantity INT NOT NULL,
            FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
            INDEX idx_order_id (order_id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");
    echo "✓ Table 'order_items' created successfully<br>";

    echo "<br><strong style='color: green;'>✓ Database setup completed successfully!</strong><br>";
    echo "<p>You can now use the login and registration system.</p>";

} catch (PDOException $e) {
    die("<strong style='color: red;'>Error:</strong> " . $e->getMessage());
}
?>