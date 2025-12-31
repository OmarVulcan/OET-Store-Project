from flask import Flask, request, jsonify
import sqlite3
import hashlib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

def init_db():
    db = sqlite3.connect("users.db")
    cursor = db.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT,
            email TEXT,
            password TEXT
        )
    """)
    db.commit()
    db.close()

init_db()

@app.route("/signup", methods=["POST"])
def signup():
    username = request.form.get("username")
    email = request.form.get("email")
    password = request.form.get("password")

    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    db = sqlite3.connect("users.db")
    cursor = db.cursor()
    cursor.execute(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        (username, email, hashed_password)
    )
    db.commit()
    db.close()

    return jsonify({"message": "User registered successfully ✔"})

@app.route("/products", methods=["GET"])
def get_products():
    products = [
        {"id": 1, "name": "Gaming Laptop", "price": 1200, "image": "https://placehold.co/300x200/png?text=Laptop"},
        {"id": 2, "name": "Wireless Headphones", "price": 150, "image": "https://placehold.co/300x200/png?text=Headphones"},
        {"id": 3, "name": "Smart Watch", "price": 250, "image": "https://placehold.co/300x200/png?text=Smart+Watch"},
        {"id": 4, "name": "4K Monitor", "price": 300, "image": "https://placehold.co/300x200/png?text=Monitor"},
        {"id": 5, "name": "Mechanical Keyboard", "price": 100, "image": "https://placehold.co/300x200/png?text=Keyboard"},
        {"id": 6, "name": "Gaming Mouse", "price": 80, "image": "https://placehold.co/300x200/png?text=Mouse"}
    ]
    return jsonify(products)

if __name__ == "__main__":
    app.run(debug=True)
