# OET Store Project Presentation

## Slide 1: OET Store Project
**Subtitle:** Modern E-Commerce Solution
*Secure. Scalable. User-Friendly.*

---

## Slide 2: Project Overview
- A comprehensive e-commerce platform revamp.
- Transitioned from legacy file-based storage to a robust MySQL database.
- Implemented enterprise-grade security and authentication.
- Designed for scalability and seamless user experience.

---

## Slide 3: Key Features
- **Secure Authentication:** Registration, login, and session management with bcrypt password hashing.
- **Smart Cart:** Persistent shopping cart that saves items across devices and sessions.
- **Database Backend:** Structured MySQL database for users, orders, and products.
- **Modern API:** RESTful PHP API endpoints for frontend-backend communication.

---

## Slide 4: Technical Architecture
- **Frontend:** HTML5, CSS3, Modern JavaScript
- **Backend:** PHP 7/8 (PDO enabled)
- **Database:** MySQL / MariaDB
- **Architecture:** REST API separation
- **Security:** Prepared statements, Session security, Input sanitization

---

## Slide 5: Database Schema
- **Users & Auth:** `users` table with secure hashed credentials and profile data.
- **Commerce:** `cart`, `orders`, and `order_items` for transaction management.
- **User Data:** `lists` and `list_items` for user watchlists/favorites.

---

## Slide 6: Security Improvements
- **Old System:** Plain text files, no encryption, vulnerable.
- **New System:**
    - Bcrypt Password Hashing
    - SQL Injection Protection (Prepared Statements)
    - Secure Session Handling
    - XSS Protection & Input Validation

---

## Slide 7: Setup & Deployment
1. Install XAMPP/WAMP.
2. Place files in `htdocs`.
3. Visit `database_setup.html` to auto-configure DB.
4. Start using the secure store!

---

## Slide 8: Future Roadmap
- **Phase 1 (Done):** Core Auth, DB, Cart
- **Phase 2:** Payment Integration, Admin Dashboard
- **Phase 3:** Search, Analytics, User Reviews

---

## Slide 9: Conclusion
# Thank You!
*Any Questions?*
