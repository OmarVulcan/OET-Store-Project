# 🚀 Quick Start Guide - OET Store Database Integration

## What's New?
Your OET Store now has a **complete database-backed authentication system** with:
- ✅ Secure password hashing (bcrypt)
- ✅ Session-based authentication
- ✅ Persistent shopping cart
- ✅ User registration and login
- ✅ MySQL database storage

---

## 🎯 Quick Setup (3 Steps)

### Step 1: Install XAMPP
1. Download XAMPP: https://www.apachefriends.org/
2. Install and launch XAMPP Control Panel
3. Start **Apache** and **MySQL** services

### Step 2: Setup Database
**Option A - Automatic (Recommended):**
1. Open browser: `http://localhost/py/database_setup.html`
2. Click "Setup Database Now"
3. Done! ✅

**Option B - Manual:**
1. Open browser: `http://localhost/py/setup_database.php`
2. Wait for success message
3. Done! ✅

### Step 3: Start Using
1. Go to: `http://localhost/py/home.html`
2. Click "Sign Up" to create an account
3. Login and start shopping!

---

## 📁 New File Structure

```
py/
├── api/                      # NEW - API endpoints
│   ├── login.php            # Login authentication
│   ├── register.php         # User registration
│   ├── check_session.php    # Session verification
│   ├── logout.php           # Logout handler
│   └── cart.php             # Shopping cart API
│
├── includes/                 # NEW - Configuration
│   └── db.php               # Database connection
│
├── setup_database.php        # NEW - Database setup script
├── database_setup.html       # NEW - Setup interface
├── DATABASE_README.md        # NEW - Full documentation
│
├── login.html               # UPDATED - Uses new API
├── pp.html                  # UPDATED - Uses new API
└── auth.js                  # UPDATED - Session checking
```

---

## 🔐 How It Works

### Before (Old System)
- ❌ Stored passwords in plain text
- ❌ Used text files (users.txt)
- ❌ No real security
- ❌ Cart data lost on logout

### After (New System)
- ✅ Passwords hashed with bcrypt
- ✅ MySQL database storage
- ✅ Secure session management
- ✅ Persistent cart across sessions
- ✅ SQL injection protection

---

## 🎮 Usage Examples

### Register a New User
```javascript
// Automatically handled by pp.html
POST api/register.php
{
    username: "john_doe",
    email: "john@example.com",
    password: "mypassword"
}
```

### Login
```javascript
// Automatically handled by login.html
POST api/login.php
{
    username: "john@example.com",  // Can use email or username
    password: "mypassword"
}
```

### Add to Cart
```javascript
POST api/cart.php
{
    action: "add",
    product_id: 123,
    product_title: "Cool Product",
    product_price: 29.99,
    quantity: 1
}
```

---

## 🔧 Configuration

### Database Settings
File: `includes/db.php`

```php
$host = 'localhost';      // MySQL host
$dbname = 'oet_store';    // Database name
$username = 'root';       // MySQL username
$password = '';           // MySQL password (empty for XAMPP default)
```

**Change these if your MySQL has different credentials!**

---

## ✅ Testing Checklist

- [ ] XAMPP Apache is running
- [ ] XAMPP MySQL is running
- [ ] Database `oet_store` exists
- [ ] Can access `http://localhost/py/home.html`
- [ ] Can register new user
- [ ] Can login with registered user
- [ ] Can see profile name in navbar
- [ ] Can logout
- [ ] Cart items persist after logout/login

---

## 🐛 Troubleshooting

### "Database connection failed"
**Solution:** 
- Make sure MySQL is running in XAMPP
- Check credentials in `includes/db.php`

### "Table doesn't exist"
**Solution:**
- Run `http://localhost/py/setup_database.php`

### "Cannot POST to api/login.php"
**Solution:**
- Make sure Apache is running
- Check that files are in XAMPP's `htdocs` folder

### "Session not working"
**Solution:**
- Clear browser cache and cookies
- Check PHP session is enabled
- Restart Apache

---

## 📊 Database Tables

| Table | Purpose |
|-------|---------|
| `users` | User accounts with hashed passwords |
| `cart` | Shopping cart items per user |
| `orders` | Completed purchase orders |
| `order_items` | Individual items in orders |
| `lists` | User watchlists |
| `list_items` | Items in watchlists |

---

## 🎨 Features

### Security
- Password hashing (bcrypt)
- SQL injection protection
- Session management
- Input validation

### User Experience
- Persistent login sessions
- Cart saved across sessions
- Automatic session sync
- Logout functionality

### Developer Features
- RESTful API design
- JSON responses
- Error handling
- Prepared statements

---

## 📞 Need Help?

1. Check `DATABASE_README.md` for detailed docs
2. View browser console (F12) for errors
3. Check Apache error logs in XAMPP
4. Verify MySQL is running

---

## 🎉 You're All Set!

Your OET Store now has enterprise-level authentication and data persistence!

**Next Steps:**
1. Create an account at `pp.html`
2. Login at `login.html`
3. Start shopping at `browse.html`
4. Your cart will be saved automatically!

---

**Made with ❤️ for secure e-commerce**
