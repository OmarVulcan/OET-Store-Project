# OET Store - Database Setup Guide

## Overview
This project now uses a MySQL database to store user information, authentication sessions, shopping cart data, and orders. All login information is securely stored with password hashing.

## Prerequisites
- **XAMPP** or **WAMP** (includes Apache, MySQL, and PHP)
- PHP 7.4 or higher
- MySQL 5.7 or higher

## Installation Steps

### 1. Install XAMPP/WAMP
If you don't have XAMPP or WAMP installed:
- Download XAMPP from: https://www.apachefriends.org/
- Install and start Apache and MySQL services

### 2. Setup Database
1. Open your browser and navigate to: `http://localhost/setup_database.php`
2. This will automatically:
   - Create the `oet_store` database
   - Create all necessary tables (users, cart, orders, etc.)
   - Set up proper indexes and relationships

**Alternative Manual Setup:**
If you prefer to set up manually:
1. Open phpMyAdmin: `http://localhost/phpmyadmin`
2. Create a new database named `oet_store`
3. Run the SQL commands from `setup_database.php`

### 3. Configure Database Connection
The database configuration is in `includes/db.php`:
```php
$host = 'localhost';
$dbname = 'oet_store';
$username = 'root';
$password = '';
```

**Note:** If your MySQL has a different username/password, update these values.

### 4. Start the Server
1. Make sure Apache and MySQL are running in XAMPP/WAMP
2. Place this project folder in the `htdocs` directory (XAMPP) or `www` directory (WAMP)
3. Access the site at: `http://localhost/py/home.html`

## Database Structure

### Tables Created:

#### 1. **users**
Stores user account information
- `id` - Unique user ID
- `username` - Unique username
- `email` - Unique email address
- `password_hash` - Securely hashed password
- `created_at` - Registration timestamp

#### 2. **lists**
Stores user watchlists
- `id` - Unique list ID
- `user_id` - Reference to users table
- `name` - List name (default: "Watchlist")
- `is_default` - Whether this is the default list

#### 3. **list_items**
Stores items in watchlists
- `id` - Unique item ID
- `list_id` - Reference to lists table
- `tmdb_id` - Movie/TV show ID
- `media_type` - Type (movie/tv)
- `title` - Item title
- `poster_path` - Poster image URL
- `vote_average` - Rating

#### 4. **cart**
Stores shopping cart items
- `id` - Unique cart item ID
- `user_id` - Reference to users table
- `product_id` - Product ID
- `product_title` - Product name
- `product_price` - Product price
- `product_image` - Product image URL
- `quantity` - Item quantity

#### 5. **orders**
Stores completed orders
- `id` - Unique order ID
- `user_id` - Reference to users table
- `total_amount` - Order total
- `status` - Order status
- `created_at` - Order timestamp

#### 6. **order_items**
Stores individual items in orders
- `id` - Unique item ID
- `order_id` - Reference to orders table
- `product_id` - Product ID
- `product_title` - Product name
- `product_price` - Product price
- `quantity` - Item quantity

## API Endpoints

### Authentication
- **POST** `api/register.php` - Register new user
- **POST** `api/login.php` - Login user
- **GET** `api/check_session.php` - Check login status
- **POST** `api/logout.php` - Logout user

### Shopping Cart
- **GET** `api/cart.php` - Get cart items
- **POST** `api/cart.php` - Add/remove/update cart items
  - Actions: `add`, `remove`, `update_quantity`, `clear`

## Security Features

### Password Security
- Passwords are hashed using PHP's `password_hash()` with bcrypt
- Never stored in plain text
- Verified using `password_verify()`

### Session Management
- PHP sessions track logged-in users
- Session data stored server-side
- Automatic session timeout

### SQL Injection Protection
- All queries use prepared statements
- User input is sanitized
- PDO with parameter binding

### Input Validation
- Server-side validation for all inputs
- Email format validation
- Required field checks
- Duplicate username/email prevention

## Usage

### Registration
1. Go to `pp.html` (Sign Up page)
2. Enter username, email, and password
3. Click "Sign Up"
4. You'll be redirected to login page

### Login
1. Go to `login.html`
2. Enter email/username and password
3. Click "Login"
4. You'll be redirected to browse page

### Shopping Cart
- Cart items are stored in the database
- Persists across sessions
- Accessible only when logged in

## Troubleshooting

### Database Connection Error
- Make sure MySQL is running in XAMPP/WAMP
- Check database credentials in `includes/db.php`
- Verify database `oet_store` exists

### Tables Not Found
- Run `setup_database.php` to create tables
- Check phpMyAdmin to verify tables exist

### Login Not Working
- Clear browser cache and localStorage
- Check browser console for errors
- Verify PHP session is working

### Server Error 500
- Check Apache error logs in XAMPP/WAMP
- Enable error reporting in PHP
- Check file permissions

## Migration from Old System

The old system used:
- `users.txt` file for storage
- `login_user.php` and `store_user.php`
- Plain text passwords (insecure)

The new system:
- Uses MySQL database
- Secure password hashing
- Session-based authentication
- Persistent cart storage

**Note:** Old user data in `users.txt` will NOT be migrated automatically. Users need to re-register.

## Development Notes

### File Structure
```
py/
├── api/
│   ├── login.php
│   ├── register.php
│   ├── check_session.php
│   ├── logout.php
│   └── cart.php
├── includes/
│   └── db.php
├── setup_database.php
├── login.html
├── pp.html (registration)
└── browse.html
```

### Adding New Features
To add new database tables or features:
1. Update `setup_database.php` with new table schema
2. Create new API endpoint in `api/` folder
3. Update frontend to use new endpoint

## Support
For issues or questions, check:
- Browser console (F12)
- Apache error logs
- MySQL error logs
- PHP error logs
