import json
import random

categories = {
    "mobiles": {
        "names": ["iPhone 15", "iPhone 15 Pro", "iPhone 14", "Samsung S24 Ultra", "Samsung S23", "Pixel 8 Pro", "Pixel 7", "OnePlus 12", "Xiaomi 14", "Sony Xperia 1"],
        "images": [
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600"
        ]
    },
    "tablets": {
        "names": ["iPad Pro M4", "iPad Air 5", "iPad Mini 6", "Samsung Tab S9", "Samsung Tab S8", "Surface Pro 9", "Lenovo Tab P12", "Xiaomi Pad 6", "Amazon Fire Max", "Pixel Tablet"],
        "images": [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600"
        ]
    },
    "monitors": {
        "names": ["LG UltraGear 4K", "Dell UltraSharp", "Samsung Odyssey G9", "ASUS TUF Gaming", "Acer Predator", "BenQ Mobiuz", "HP Omen", "MSI Optix", "Gigabyte Aorus", "Alienware 34"],
        "images": [
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1593640408118-b81037631367?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=600"
        ]
    },
    "playstation": {
        "names": ["PlayStation 5 Slim", "PS5 Digital", "PS VR2", "DualSense Controller", "Sony Pulse 3D", "PS5 Cover", "Charging Station", "Gran Turismo 7", "Spider-Man 2", "God of War Ragnarok"],
        "images": [
            "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600"
        ]
    }
}

products = []
id_counter = 1

for cat, data in categories.items():
    for i in range(50):
        base_name = random.choice(data["names"])
        # Add variation to name to make it look distinct
        name_variation = f"{base_name} - {random.choice(['Classic', 'Pro', 'Max', 'Ultra', 'Lite', 'Edition'])} {random.randint(2023, 2025)}"
        
        product = {
            "id": id_counter,
            "name": name_variation,
            "category": cat,
            "price": random.randint(100, 2000),
            "image": random.choice(data["images"]),
            "description": f"This requires a description. A high quality {base_name} suitable for all your needs. Features top tier specs.",
            "reviews": [
                {"user": f"User{random.randint(1,100)}", "rating": random.randint(3,5), "comment": "Great product!"},
                {"user": f"Buyer{random.randint(1,100)}", "rating": random.randint(4,5), "comment": "Worth the money."}
            ]
        }
        products.append(product)
        id_counter += 1

# Write to file
with open("products.js", "w") as f:
    f.write("const products = ")
    json.dump(products, f, indent=4)
    f.write(";")

print("Successfully generated products.js with", len(products), "products.")
