const products = [
    {
        "id": 1,
        "name": "Pixel 8 Pro - Ultra 2025",
        "category": "mobiles",
        "price": 446,
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
        "description": "The Google Pixel 8 Pro features the new Tensor G3 chip, a 6.7-inch Super Actua display, and pro-level cameras for stunning photos and videos.",
        "reviews": [
            {
                "user": "User31",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer51",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 2,
        "name": "iPhone 15 - Classic 2023",
        "category": "mobiles",
        "price": 1804,
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        "description": "iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C. Durable color-infused glass and aluminum design.",
        "reviews": [
            {
                "user": "User55",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer88",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 3,
        "name": "Samsung S24 Ultra - Edition 2024",
        "category": "mobiles",
        "price": 1708,
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        "description": "Galaxy AI is here. The S24 Ultra features a titanium frame, 200MP camera, and the most powerful Galaxy processor yet.",
        "reviews": [
            {
                "user": "User25",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer12",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 4,
        "name": "Pixel 7 - Lite 2024",
        "category": "mobiles",
        "price": 1324,
        "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=600",
        "description": "Google's helpfulness in a smartphone. Pixel 7 is fast and secure, with an advanced camera and amazing battery life.",
        "reviews": [
            {
                "user": "User40",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer30",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 5,
        "name": "iPhone 15 - Ultra 2024",
        "category": "mobiles",
        "price": 789,
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=600",
        "description": "iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C. Durable color-infused glass and aluminum design.",
        "reviews": [
            {
                "user": "User56",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer33",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 6,
        "name": "iPhone 15 - Pro 2025",
        "category": "mobiles",
        "price": 1614,
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
        "description": "iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C. Durable color-infused glass and aluminum design.",
        "reviews": [
            {
                "user": "User76",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer36",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 7,
        "name": "iPhone 15 Pro - Edition 2023",
        "category": "mobiles",
        "price": 1588,
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
        "description": "The first iPhone with an aerospace-grade titanium design. A17 Pro chip for next-level gaming performance and pro-class camera system.",
        "reviews": [
            {
                "user": "User69",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer15",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 8,
        "name": "Xiaomi 14 - Edition 2024",
        "category": "mobiles",
        "price": 1767,
        "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=600",
        "description": "Leica optics in your pocket. The Xiaomi 14 offers a compact design with a pro-grade camera system and Snapdragon 8 Gen 3 speed.",
        "reviews": [
            {
                "user": "User20",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer14",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 9,
        "name": "OnePlus 12 - Max 2025",
        "category": "mobiles",
        "price": 1891,
        "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
        "description": "Smooth beyond belief. The OnePlus 12 delivers flagship performance with Snapdragon 8 Gen 3 and a 4th Gen Hasselblad Camera System.",
        "reviews": [
            {
                "user": "User31",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer22",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 10,
        "name": "Sony Xperia 1 - Ultra 2023",
        "category": "mobiles",
        "price": 956,
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=600",
        "description": "Created for creators. The Xperia 1 features a 4K HDR OLED display and pro-camera features inspired by Alpha cameras.",
        "reviews": [
            {
                "user": "User22",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer49",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 11,
        "name": "Pixel 7 - Max 2023",
        "category": "mobiles",
        "price": 1835,
        "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
        "description": "Google's helpfulness in a smartphone. Pixel 7 is fast and secure, with an advanced camera and amazing battery life.",
        "reviews": [
            {
                "user": "User82",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer59",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 12,
        "name": "OnePlus 12 - Ultra 2023",
        "category": "mobiles",
        "price": 1532,
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=600",
        "description": "Smooth beyond belief. The OnePlus 12 delivers flagship performance with Snapdragon 8 Gen 3 and a 4th Gen Hasselblad Camera System.",
        "reviews": [
            {
                "user": "User81",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer86",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 13,
        "name": "Samsung S23 - Max 2025",
        "category": "mobiles",
        "price": 239,
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=600",
        "description": "Epic nights are coming. The Samsung S23 features Nightography, a fast processor, and a design that's good for the planet.",
        "reviews": [
            {
                "user": "User21",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer36",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 14,
        "name": "OnePlus 12 - Pro 2025",
        "category": "mobiles",
        "price": 1338,
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
        "description": "Smooth beyond belief. The OnePlus 12 delivers flagship performance with Snapdragon 8 Gen 3 and a 4th Gen Hasselblad Camera System.",
        "reviews": [
            {
                "user": "User88",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer80",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 15,
        "name": "Xiaomi 14 - Ultra 2024",
        "category": "mobiles",
        "price": 1972,
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        "description": "Leica optics in your pocket. The Xiaomi 14 offers a compact design with a pro-grade camera system and Snapdragon 8 Gen 3 speed.",
        "reviews": [
            {
                "user": "User11",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer25",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 16,
        "name": "Xiaomi 14 - Lite 2023",
        "category": "mobiles",
        "price": 1270,
        "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
        "description": "Leica optics in your pocket. The Xiaomi 14 offers a compact design with a pro-grade camera system and Snapdragon 8 Gen 3 speed.",
        "reviews": [
            {
                "user": "User94",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer23",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 17,
        "name": "iPhone 15 - Classic 2024",
        "category": "mobiles",
        "price": 821,
        "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
        "description": "iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C. Durable color-infused glass and aluminum design.",
        "reviews": [
            {
                "user": "User78",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer27",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 18,
        "name": "Samsung S23 - Edition 2025",
        "category": "mobiles",
        "price": 472,
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
        "description": "Epic nights are coming. The Samsung S23 features Nightography, a fast processor, and a design that's good for the planet.",
        "reviews": [
            {
                "user": "User46",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer76",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 19,
        "name": "Samsung S24 Ultra - Max 2023",
        "category": "mobiles",
        "price": 1798,
        "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
        "description": "Galaxy AI is here. The S24 Ultra features a titanium frame, 200MP camera, and the most powerful Galaxy processor yet.",
        "reviews": [
            {
                "user": "User41",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer50",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 20,
        "name": "iPhone 15 Pro - Pro 2025",
        "category": "mobiles",
        "price": 360,
        "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=600",
        "description": "The first iPhone with an aerospace-grade titanium design. A17 Pro chip for next-level gaming performance and pro-class camera system.",
        "reviews": [
            {
                "user": "User36",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer97",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 21,
        "name": "Pixel 8 Pro - Edition 2023",
        "category": "mobiles",
        "price": 618,
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=600",
        "description": "The Google Pixel 8 Pro features the new Tensor G3 chip, a 6.7-inch Super Actua display, and pro-level cameras for stunning photos and videos.",
        "reviews": [
            {
                "user": "User14",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer35",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 22,
        "name": "iPhone 15 Pro - Classic 2025",
        "category": "mobiles",
        "price": 1151,
        "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=600",
        "description": "The first iPhone with an aerospace-grade titanium design. A17 Pro chip for next-level gaming performance and pro-class camera system.",
        "reviews": [
            {
                "user": "User45",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer41",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 23,
        "name": "Samsung S24 Ultra - Max 2025",
        "category": "mobiles",
        "price": 1700,
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        "description": "Galaxy AI is here. The S24 Ultra features a titanium frame, 200MP camera, and the most powerful Galaxy processor yet.",
        "reviews": [
            {
                "user": "User31",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer75",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 24,
        "name": "OnePlus 12 - Classic 2024",
        "category": "mobiles",
        "price": 762,
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        "description": "Smooth beyond belief. The OnePlus 12 delivers flagship performance with Snapdragon 8 Gen 3 and a 4th Gen Hasselblad Camera System.",
        "reviews": [
            {
                "user": "User66",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer89",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 25,
        "name": "Pixel 8 Pro - Lite 2024",
        "category": "mobiles",
        "price": 706,
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        "description": "The Google Pixel 8 Pro features the new Tensor G3 chip, a 6.7-inch Super Actua display, and pro-level cameras for stunning photos and videos.",
        "reviews": [
            {
                "user": "User95",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer17",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 26,
        "name": "Sony Xperia 1 - Lite 2025",
        "category": "mobiles",
        "price": 491,
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
        "description": "Created for creators. The Xperia 1 features a 4K HDR OLED display and pro-camera features inspired by Alpha cameras.",
        "reviews": [
            {
                "user": "User54",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer30",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 27,
        "name": "Xiaomi 14 - Lite 2023",
        "category": "mobiles",
        "price": 980,
        "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
        "description": "Leica optics in your pocket. The Xiaomi 14 offers a compact design with a pro-grade camera system and Snapdragon 8 Gen 3 speed.",
        "reviews": [
            {
                "user": "User84",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer76",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 28,
        "name": "Pixel 8 Pro - Classic 2023",
        "category": "mobiles",
        "price": 1750,
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
        "description": "The Google Pixel 8 Pro features the new Tensor G3 chip, a 6.7-inch Super Actua display, and pro-level cameras for stunning photos and videos.",
        "reviews": [
            {
                "user": "User7",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer10",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 29,
        "name": "Pixel 7 - Max 2023",
        "category": "mobiles",
        "price": 1747,
        "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
        "description": "Google's helpfulness in a smartphone. Pixel 7 is fast and secure, with an advanced camera and amazing battery life.",
        "reviews": [
            {
                "user": "User88",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer96",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 30,
        "name": "Sony Xperia 1 - Max 2024",
        "category": "mobiles",
        "price": 160,
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=600",
        "description": "Created for creators. The Xperia 1 features a 4K HDR OLED display and pro-camera features inspired by Alpha cameras.",
        "reviews": [
            {
                "user": "User33",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer35",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 31,
        "name": "Samsung S23 - Classic 2024",
        "category": "mobiles",
        "price": 866,
        "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
        "description": "Epic nights are coming. The Samsung S23 features Nightography, a fast processor, and a design that's good for the planet.",
        "reviews": [
            {
                "user": "User77",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer26",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 32,
        "name": "iPhone 15 - Edition 2024",
        "category": "mobiles",
        "price": 1913,
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        "description": "iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C. Durable color-infused glass and aluminum design.",
        "reviews": [
            {
                "user": "User73",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer15",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 33,
        "name": "iPhone 15 - Lite 2023",
        "category": "mobiles",
        "price": 136,
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
        "description": "iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C. Durable color-infused glass and aluminum design.",
        "reviews": [
            {
                "user": "User6",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer80",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 34,
        "name": "Xiaomi 14 - Classic 2023",
        "category": "mobiles",
        "price": 791,
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        "description": "Leica optics in your pocket. The Xiaomi 14 offers a compact design with a pro-grade camera system and Snapdragon 8 Gen 3 speed.",
        "reviews": [
            {
                "user": "User9",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer18",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 35,
        "name": "Pixel 7 - Lite 2025",
        "category": "mobiles",
        "price": 1449,
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
        "description": "Google's helpfulness in a smartphone. Pixel 7 is fast and secure, with an advanced camera and amazing battery life.",
        "reviews": [
            {
                "user": "User47",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer66",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 36,
        "name": "Sony Xperia 1 - Ultra 2024",
        "category": "mobiles",
        "price": 410,
        "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff23?auto=format&fit=crop&q=80&w=600",
        "description": "Created for creators. The Xperia 1 features a 4K HDR OLED display and pro-camera features inspired by Alpha cameras.",
        "reviews": [
            {
                "user": "User33",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer53",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 37,
        "name": "Pixel 8 Pro - Edition 2025",
        "category": "mobiles",
        "price": 308,
        "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=600",
        "description": "The Google Pixel 8 Pro features the new Tensor G3 chip, a 6.7-inch Super Actua display, and pro-level cameras for stunning photos and videos.",
        "reviews": [
            {
                "user": "User56",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer34",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 38,
        "name": "Samsung S23 - Lite 2023",
        "category": "mobiles",
        "price": 179,
        "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
        "description": "Epic nights are coming. The Samsung S23 features Nightography, a fast processor, and a design that's good for the planet.",
        "reviews": [
            {
                "user": "User42",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer19",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 39,
        "name": "iPhone 15 Pro - Ultra 2023",
        "category": "mobiles",
        "price": 621,
        "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=600",
        "description": "The first iPhone with an aerospace-grade titanium design. A17 Pro chip for next-level gaming performance and pro-class camera system.",
        "reviews": [
            {
                "user": "User7",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer35",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 40,
        "name": "iPhone 15 - Edition 2025",
        "category": "mobiles",
        "price": 1229,
        "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=600",
        "description": "iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C. Durable color-infused glass and aluminum design.",
        "reviews": [
            {
                "user": "User45",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer93",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 41,
        "name": "Samsung S23 - Edition 2023",
        "category": "mobiles",
        "price": 1803,
        "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=600",
        "description": "Epic nights are coming. The Samsung S23 features Nightography, a fast processor, and a design that's good for the planet.",
        "reviews": [
            {
                "user": "User27",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer45",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 42,
        "name": "Samsung S23 - Pro 2024",
        "category": "mobiles",
        "price": 126,
        "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
        "description": "Epic nights are coming. The Samsung S23 features Nightography, a fast processor, and a design that's good for the planet.",
        "reviews": [
            {
                "user": "User68",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer31",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 43,
        "name": "Samsung S24 Ultra - Ultra 2025",
        "category": "mobiles",
        "price": 1434,
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        "description": "Galaxy AI is here. The S24 Ultra features a titanium frame, 200MP camera, and the most powerful Galaxy processor yet.",
        "reviews": [
            {
                "user": "User86",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer58",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 44,
        "name": "OnePlus 12 - Lite 2023",
        "category": "mobiles",
        "price": 482,
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        "description": "Smooth beyond belief. The OnePlus 12 delivers flagship performance with Snapdragon 8 Gen 3 and a 4th Gen Hasselblad Camera System.",
        "reviews": [
            {
                "user": "User64",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer49",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 45,
        "name": "iPhone 15 - Edition 2023",
        "category": "mobiles",
        "price": 1922,
        "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
        "description": "iPhone 15 brings you Dynamic Island, a 48MP Main camera, and USB-C. Durable color-infused glass and aluminum design.",
        "reviews": [
            {
                "user": "User7",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer20",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 46,
        "name": "OnePlus 12 - Max 2023",
        "category": "mobiles",
        "price": 1725,
        "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=600",
        "description": "Smooth beyond belief. The OnePlus 12 delivers flagship performance with Snapdragon 8 Gen 3 and a 4th Gen Hasselblad Camera System.",
        "reviews": [
            {
                "user": "User70",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer32",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 47,
        "name": "Pixel 7 - Max 2024",
        "category": "mobiles",
        "price": 767,
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        "description": "Google's helpfulness in a smartphone. Pixel 7 is fast and secure, with an advanced camera and amazing battery life.",
        "reviews": [
            {
                "user": "User67",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer16",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 48,
        "name": "Pixel 8 Pro - Ultra 2025",
        "category": "mobiles",
        "price": 564,
        "image": "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=600",
        "description": "The Google Pixel 8 Pro features the new Tensor G3 chip, a 6.7-inch Super Actua display, and pro-level cameras for stunning photos and videos.",
        "reviews": [
            {
                "user": "User23",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer53",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 49,
        "name": "iPhone 14 - Classic 2024",
        "category": "mobiles",
        "price": 1065,
        "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPhone 14 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User79",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer75",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 50,
        "name": "Samsung S23 - Pro 2024",
        "category": "mobiles",
        "price": 493,
        "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=600",
        "description": "Epic nights are coming. The Samsung S23 features Nightography, a fast processor, and a design that's good for the planet.",
        "reviews": [
            {
                "user": "User45",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer52",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 51,
        "name": "Surface Pro 9 - Ultra 2024",
        "category": "tablets",
        "price": 463,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Surface Pro 9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User93",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer96",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 52,
        "name": "Lenovo Tab P12 - Edition 2023",
        "category": "tablets",
        "price": 1012,
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Lenovo Tab P12 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User70",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer80",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 53,
        "name": "Surface Pro 9 - Lite 2024",
        "category": "tablets",
        "price": 598,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Surface Pro 9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User74",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer47",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 54,
        "name": "Samsung Tab S9 - Max 2023",
        "category": "tablets",
        "price": 1235,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User65",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer67",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 55,
        "name": "Surface Pro 9 - Edition 2025",
        "category": "tablets",
        "price": 1895,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Surface Pro 9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User66",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer39",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 56,
        "name": "iPad Mini 6 - Edition 2023",
        "category": "tablets",
        "price": 410,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Mini 6 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User14",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer6",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 57,
        "name": "Samsung Tab S8 - Edition 2024",
        "category": "tablets",
        "price": 399,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S8 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User87",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer19",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 58,
        "name": "Samsung Tab S8 - Edition 2023",
        "category": "tablets",
        "price": 668,
        "image": "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S8 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User66",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer50",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 59,
        "name": "Surface Pro 9 - Classic 2023",
        "category": "tablets",
        "price": 1671,
        "image": "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Surface Pro 9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User42",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer4",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 60,
        "name": "Lenovo Tab P12 - Classic 2025",
        "category": "tablets",
        "price": 1745,
        "image": "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Lenovo Tab P12 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User21",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer73",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 61,
        "name": "Samsung Tab S9 - Edition 2025",
        "category": "tablets",
        "price": 1532,
        "image": "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User39",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer20",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 62,
        "name": "Lenovo Tab P12 - Edition 2023",
        "category": "tablets",
        "price": 1164,
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Lenovo Tab P12 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User28",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer26",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 63,
        "name": "iPad Pro M4 - Edition 2025",
        "category": "tablets",
        "price": 341,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Pro M4 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User51",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer66",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 64,
        "name": "Lenovo Tab P12 - Max 2023",
        "category": "tablets",
        "price": 1839,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Lenovo Tab P12 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User2",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer32",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 65,
        "name": "Samsung Tab S8 - Max 2023",
        "category": "tablets",
        "price": 706,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S8 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User99",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer13",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 66,
        "name": "Amazon Fire Max - Max 2023",
        "category": "tablets",
        "price": 1134,
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Amazon Fire Max suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User99",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer19",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 67,
        "name": "Lenovo Tab P12 - Lite 2024",
        "category": "tablets",
        "price": 1664,
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Lenovo Tab P12 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User58",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer32",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 68,
        "name": "Pixel Tablet - Lite 2025",
        "category": "tablets",
        "price": 220,
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Pixel Tablet suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User3",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer81",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 69,
        "name": "Lenovo Tab P12 - Max 2024",
        "category": "tablets",
        "price": 1358,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Lenovo Tab P12 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User13",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer44",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 70,
        "name": "iPad Air 5 - Ultra 2025",
        "category": "tablets",
        "price": 155,
        "image": "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Air 5 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User73",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer5",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 71,
        "name": "iPad Air 5 - Edition 2024",
        "category": "tablets",
        "price": 1807,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Air 5 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User84",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer58",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 72,
        "name": "Samsung Tab S9 - Lite 2023",
        "category": "tablets",
        "price": 1004,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User23",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer59",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 73,
        "name": "Amazon Fire Max - Lite 2023",
        "category": "tablets",
        "price": 1123,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Amazon Fire Max suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User29",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer96",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 74,
        "name": "Xiaomi Pad 6 - Ultra 2025",
        "category": "tablets",
        "price": 1574,
        "image": "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Xiaomi Pad 6 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User71",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer26",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 75,
        "name": "iPad Air 5 - Classic 2023",
        "category": "tablets",
        "price": 860,
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Air 5 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User37",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer36",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 76,
        "name": "iPad Pro M4 - Max 2025",
        "category": "tablets",
        "price": 1420,
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Pro M4 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User92",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer5",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 77,
        "name": "iPad Mini 6 - Edition 2025",
        "category": "tablets",
        "price": 1868,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Mini 6 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User29",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer88",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 78,
        "name": "iPad Pro M4 - Ultra 2023",
        "category": "tablets",
        "price": 179,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Pro M4 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User2",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer65",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 79,
        "name": "Xiaomi Pad 6 - Lite 2024",
        "category": "tablets",
        "price": 1766,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Xiaomi Pad 6 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User10",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer32",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 80,
        "name": "iPad Pro M4 - Classic 2024",
        "category": "tablets",
        "price": 1045,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Pro M4 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User29",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer70",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 81,
        "name": "iPad Air 5 - Lite 2025",
        "category": "tablets",
        "price": 1897,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Air 5 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User34",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer3",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 82,
        "name": "Surface Pro 9 - Pro 2024",
        "category": "tablets",
        "price": 1569,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Surface Pro 9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User19",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer20",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 83,
        "name": "iPad Mini 6 - Classic 2025",
        "category": "tablets",
        "price": 164,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Mini 6 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User50",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer4",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 84,
        "name": "Pixel Tablet - Max 2025",
        "category": "tablets",
        "price": 999,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Pixel Tablet suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer48",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 85,
        "name": "Samsung Tab S8 - Classic 2025",
        "category": "tablets",
        "price": 518,
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S8 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User2",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer54",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 86,
        "name": "Samsung Tab S9 - Edition 2024",
        "category": "tablets",
        "price": 1406,
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User45",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer85",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 87,
        "name": "Samsung Tab S8 - Edition 2023",
        "category": "tablets",
        "price": 401,
        "image": "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S8 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User91",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer74",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 88,
        "name": "Samsung Tab S8 - Classic 2024",
        "category": "tablets",
        "price": 891,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S8 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User36",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer52",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 89,
        "name": "Lenovo Tab P12 - Lite 2025",
        "category": "tablets",
        "price": 468,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Lenovo Tab P12 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User10",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer67",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 90,
        "name": "Samsung Tab S8 - Max 2024",
        "category": "tablets",
        "price": 1863,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S8 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User87",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer27",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 91,
        "name": "iPad Mini 6 - Edition 2023",
        "category": "tablets",
        "price": 659,
        "image": "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Mini 6 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User97",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer17",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 92,
        "name": "Samsung Tab S9 - Ultra 2024",
        "category": "tablets",
        "price": 748,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User99",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer38",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 93,
        "name": "iPad Air 5 - Ultra 2023",
        "category": "tablets",
        "price": 1493,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Air 5 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User73",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer75",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 94,
        "name": "iPad Pro M4 - Classic 2025",
        "category": "tablets",
        "price": 534,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality iPad Pro M4 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User1",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer61",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 95,
        "name": "Lenovo Tab P12 - Classic 2023",
        "category": "tablets",
        "price": 688,
        "image": "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Lenovo Tab P12 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User18",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer86",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 96,
        "name": "Samsung Tab S9 - Pro 2025",
        "category": "tablets",
        "price": 1405,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User37",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer44",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 97,
        "name": "Amazon Fire Max - Pro 2023",
        "category": "tablets",
        "price": 1028,
        "image": "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Amazon Fire Max suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User38",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer14",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 98,
        "name": "Amazon Fire Max - Edition 2025",
        "category": "tablets",
        "price": 973,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Amazon Fire Max suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User33",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer36",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 99,
        "name": "Xiaomi Pad 6 - Classic 2024",
        "category": "tablets",
        "price": 1993,
        "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Xiaomi Pad 6 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User39",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer39",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 100,
        "name": "Samsung Tab S8 - Pro 2024",
        "category": "tablets",
        "price": 1741,
        "image": "https://images.unsplash.com/photo-1611532736597-b52c26ca64d7?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Tab S8 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User17",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer2",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 101,
        "name": "Dell UltraSharp - Pro 2024",
        "category": "monitors",
        "price": 1045,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Dell UltraSharp suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User24",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer21",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 102,
        "name": "Acer Predator - Max 2023",
        "category": "monitors",
        "price": 1828,
        "image": "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Acer Predator suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User31",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer60",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 103,
        "name": "Gigabyte Aorus - Max 2024",
        "category": "monitors",
        "price": 1690,
        "image": "https://images.unsplash.com/photo-1593640408118-b81037631367?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gigabyte Aorus suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User94",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer63",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 104,
        "name": "Dell UltraSharp - Classic 2024",
        "category": "monitors",
        "price": 1197,
        "image": "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Dell UltraSharp suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User42",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer49",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 105,
        "name": "Dell UltraSharp - Max 2025",
        "category": "monitors",
        "price": 1499,
        "image": "https://images.unsplash.com/photo-1593640408118-b81037631367?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Dell UltraSharp suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User28",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer44",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 106,
        "name": "Gigabyte Aorus - Ultra 2025",
        "category": "monitors",
        "price": 1806,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gigabyte Aorus suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User61",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer62",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 107,
        "name": "ASUS TUF Gaming - Classic 2024",
        "category": "monitors",
        "price": 1209,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality ASUS TUF Gaming suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User71",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer96",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 108,
        "name": "HP Omen - Ultra 2023",
        "category": "monitors",
        "price": 302,
        "image": "https://images.unsplash.com/photo-1593640408118-b81037631367?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality HP Omen suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User19",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer68",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 109,
        "name": "BenQ Mobiuz - Ultra 2024",
        "category": "monitors",
        "price": 1309,
        "image": "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality BenQ Mobiuz suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User27",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer91",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 110,
        "name": "Samsung Odyssey G9 - Pro 2025",
        "category": "monitors",
        "price": 1313,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Odyssey G9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User65",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer40",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 111,
        "name": "LG UltraGear 4K - Max 2025",
        "category": "monitors",
        "price": 108,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality LG UltraGear 4K suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User85",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer38",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 112,
        "name": "BenQ Mobiuz - Edition 2024",
        "category": "monitors",
        "price": 1157,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality BenQ Mobiuz suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User22",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer17",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 113,
        "name": "LG UltraGear 4K - Max 2025",
        "category": "monitors",
        "price": 592,
        "image": "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality LG UltraGear 4K suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User58",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer11",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 114,
        "name": "Dell UltraSharp - Edition 2025",
        "category": "monitors",
        "price": 1795,
        "image": "https://images.unsplash.com/photo-1593640408118-b81037631367?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Dell UltraSharp suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User43",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer99",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 115,
        "name": "Alienware 34 - Edition 2025",
        "category": "monitors",
        "price": 685,
        "image": "https://images.unsplash.com/photo-1593640408118-b81037631367?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Alienware 34 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User84",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer65",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 116,
        "name": "Gigabyte Aorus - Edition 2023",
        "category": "monitors",
        "price": 880,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gigabyte Aorus suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User4",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer66",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 117,
        "name": "Alienware 34 - Pro 2024",
        "category": "monitors",
        "price": 1921,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Alienware 34 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User71",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer95",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 118,
        "name": "Alienware 34 - Ultra 2023",
        "category": "monitors",
        "price": 1388,
        "image": "https://images.unsplash.com/photo-1593640408118-b81037631367?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Alienware 34 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User13",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer29",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 119,
        "name": "Acer Predator - Pro 2024",
        "category": "monitors",
        "price": 761,
        "image": "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Acer Predator suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User9",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer100",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 120,
        "name": "ASUS TUF Gaming - Lite 2025",
        "category": "monitors",
        "price": 1266,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality ASUS TUF Gaming suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User90",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer22",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 121,
        "name": "BenQ Mobiuz - Edition 2023",
        "category": "monitors",
        "price": 417,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality BenQ Mobiuz suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User74",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer98",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 122,
        "name": "Samsung Odyssey G9 - Ultra 2024",
        "category": "monitors",
        "price": 1361,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Odyssey G9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User96",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer18",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 123,
        "name": "Alienware 34 - Pro 2024",
        "category": "monitors",
        "price": 1519,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Alienware 34 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User42",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer30",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 124,
        "name": "Gigabyte Aorus - Ultra 2023",
        "category": "monitors",
        "price": 977,
        "image": "https://images.unsplash.com/photo-1593640408118-b81037631367?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gigabyte Aorus suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User67",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer19",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 125,
        "name": "Alienware 34 - Lite 2024",
        "category": "monitors",
        "price": 379,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Alienware 34 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User77",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer37",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 126,
        "name": "Samsung Odyssey G9 - Lite 2023",
        "category": "monitors",
        "price": 305,
        "image": "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Odyssey G9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User8",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer9",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 127,
        "name": "BenQ Mobiuz - Edition 2023",
        "category": "monitors",
        "price": 545,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality BenQ Mobiuz suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User18",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer88",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 128,
        "name": "Acer Predator - Edition 2024",
        "category": "monitors",
        "price": 225,
        "image": "https://images.unsplash.com/photo-1593640408118-b81037631367?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Acer Predator suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User88",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer42",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 129,
        "name": "Gigabyte Aorus - Max 2025",
        "category": "monitors",
        "price": 466,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gigabyte Aorus suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User77",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer44",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 130,
        "name": "Gigabyte Aorus - Lite 2024",
        "category": "monitors",
        "price": 1011,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gigabyte Aorus suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User54",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer51",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 131,
        "name": "HP Omen - Max 2024",
        "category": "monitors",
        "price": 112,
        "image": "https://images.unsplash.com/photo-1593640408118-b81037631367?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality HP Omen suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User26",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer17",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 132,
        "name": "Gigabyte Aorus - Lite 2023",
        "category": "monitors",
        "price": 1450,
        "image": "https://images.unsplash.com/photo-1593640408118-b81037631367?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gigabyte Aorus suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User66",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer91",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 133,
        "name": "MSI Optix - Ultra 2023",
        "category": "monitors",
        "price": 660,
        "image": "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality MSI Optix suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User99",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer58",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 134,
        "name": "MSI Optix - Max 2023",
        "category": "monitors",
        "price": 1556,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality MSI Optix suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User54",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer24",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 135,
        "name": "Dell UltraSharp - Ultra 2025",
        "category": "monitors",
        "price": 1221,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Dell UltraSharp suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User86",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer89",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 136,
        "name": "Alienware 34 - Max 2024",
        "category": "monitors",
        "price": 1524,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Alienware 34 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User92",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer53",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 137,
        "name": "Gigabyte Aorus - Ultra 2025",
        "category": "monitors",
        "price": 160,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gigabyte Aorus suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User87",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer72",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 138,
        "name": "BenQ Mobiuz - Ultra 2023",
        "category": "monitors",
        "price": 1289,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality BenQ Mobiuz suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User97",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer77",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 139,
        "name": "BenQ Mobiuz - Lite 2023",
        "category": "monitors",
        "price": 1792,
        "image": "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality BenQ Mobiuz suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User39",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer48",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 140,
        "name": "LG UltraGear 4K - Pro 2024",
        "category": "monitors",
        "price": 1276,
        "image": "https://images.unsplash.com/photo-1593640408118-b81037631367?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality LG UltraGear 4K suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User40",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer33",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 141,
        "name": "Acer Predator - Pro 2023",
        "category": "monitors",
        "price": 733,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Acer Predator suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User41",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer97",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 142,
        "name": "ASUS TUF Gaming - Edition 2023",
        "category": "monitors",
        "price": 1341,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality ASUS TUF Gaming suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User27",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer72",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 143,
        "name": "Samsung Odyssey G9 - Max 2023",
        "category": "monitors",
        "price": 546,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Odyssey G9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User100",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer77",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 144,
        "name": "Gigabyte Aorus - Pro 2023",
        "category": "monitors",
        "price": 528,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gigabyte Aorus suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User80",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer31",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 145,
        "name": "LG UltraGear 4K - Edition 2025",
        "category": "monitors",
        "price": 137,
        "image": "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality LG UltraGear 4K suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User42",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer37",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 146,
        "name": "BenQ Mobiuz - Edition 2023",
        "category": "monitors",
        "price": 169,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality BenQ Mobiuz suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User51",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer4",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 147,
        "name": "Samsung Odyssey G9 - Ultra 2024",
        "category": "monitors",
        "price": 947,
        "image": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Samsung Odyssey G9 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User78",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer98",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 148,
        "name": "LG UltraGear 4K - Pro 2024",
        "category": "monitors",
        "price": 1161,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality LG UltraGear 4K suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User23",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer4",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 149,
        "name": "Gigabyte Aorus - Edition 2023",
        "category": "monitors",
        "price": 1370,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gigabyte Aorus suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer24",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 150,
        "name": "LG UltraGear 4K - Edition 2023",
        "category": "monitors",
        "price": 590,
        "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality LG UltraGear 4K suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User58",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer42",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 151,
        "name": "Sony Pulse 3D - Edition 2024",
        "category": "playstation",
        "price": 1012,
        "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Sony Pulse 3D suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User94",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer98",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 152,
        "name": "DualSense Controller - Ultra 2025",
        "category": "playstation",
        "price": 1611,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality DualSense Controller suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User100",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer78",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 153,
        "name": "God of War Ragnarok - Ultra 2025",
        "category": "playstation",
        "price": 1960,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality God of War Ragnarok suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User79",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer78",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 154,
        "name": "PS5 Cover - Classic 2025",
        "category": "playstation",
        "price": 737,
        "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PS5 Cover suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User81",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer14",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 155,
        "name": "Spider-Man 2 - Max 2024",
        "category": "playstation",
        "price": 956,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Spider-Man 2 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User21",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer30",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 156,
        "name": "DualSense Controller - Ultra 2024",
        "category": "playstation",
        "price": 207,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality DualSense Controller suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User59",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer69",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 157,
        "name": "God of War Ragnarok - Edition 2025",
        "category": "playstation",
        "price": 1835,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality God of War Ragnarok suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User19",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer22",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 158,
        "name": "Charging Station - Pro 2023",
        "category": "playstation",
        "price": 1385,
        "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Charging Station suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User43",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer93",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 159,
        "name": "PS5 Cover - Edition 2024",
        "category": "playstation",
        "price": 1714,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PS5 Cover suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User93",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer15",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 160,
        "name": "Gran Turismo 7 - Ultra 2025",
        "category": "playstation",
        "price": 1747,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gran Turismo 7 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User27",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer48",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 161,
        "name": "PS5 Digital - Pro 2025",
        "category": "playstation",
        "price": 1716,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PS5 Digital suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User50",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer50",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 162,
        "name": "PS5 Digital - Ultra 2024",
        "category": "playstation",
        "price": 1186,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PS5 Digital suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User98",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer94",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 163,
        "name": "PS5 Digital - Ultra 2023",
        "category": "playstation",
        "price": 453,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PS5 Digital suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User15",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer68",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 164,
        "name": "Sony Pulse 3D - Max 2025",
        "category": "playstation",
        "price": 1621,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Sony Pulse 3D suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User71",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer71",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 165,
        "name": "Gran Turismo 7 - Pro 2025",
        "category": "playstation",
        "price": 1195,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gran Turismo 7 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User57",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer28",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 166,
        "name": "God of War Ragnarok - Classic 2023",
        "category": "playstation",
        "price": 952,
        "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality God of War Ragnarok suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User32",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer23",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 167,
        "name": "Gran Turismo 7 - Max 2025",
        "category": "playstation",
        "price": 193,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gran Turismo 7 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User78",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer77",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 168,
        "name": "Charging Station - Lite 2023",
        "category": "playstation",
        "price": 221,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Charging Station suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User93",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer79",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 169,
        "name": "God of War Ragnarok - Lite 2024",
        "category": "playstation",
        "price": 1947,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality God of War Ragnarok suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User39",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer49",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 170,
        "name": "PS5 Digital - Ultra 2024",
        "category": "playstation",
        "price": 1839,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PS5 Digital suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User7",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer33",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 171,
        "name": "PlayStation 5 Slim - Pro 2024",
        "category": "playstation",
        "price": 882,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PlayStation 5 Slim suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User44",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer66",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 172,
        "name": "Sony Pulse 3D - Pro 2023",
        "category": "playstation",
        "price": 1803,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Sony Pulse 3D suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User83",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer18",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 173,
        "name": "PS VR2 - Edition 2025",
        "category": "playstation",
        "price": 506,
        "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PS VR2 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User6",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer37",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 174,
        "name": "Gran Turismo 7 - Lite 2024",
        "category": "playstation",
        "price": 1127,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gran Turismo 7 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User11",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer59",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 175,
        "name": "Charging Station - Edition 2023",
        "category": "playstation",
        "price": 289,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Charging Station suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User70",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer49",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 176,
        "name": "God of War Ragnarok - Pro 2023",
        "category": "playstation",
        "price": 584,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality God of War Ragnarok suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User27",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer44",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 177,
        "name": "God of War Ragnarok - Ultra 2023",
        "category": "playstation",
        "price": 274,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality God of War Ragnarok suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User100",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer41",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 178,
        "name": "God of War Ragnarok - Ultra 2023",
        "category": "playstation",
        "price": 366,
        "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality God of War Ragnarok suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User79",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer5",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 179,
        "name": "DualSense Controller - Pro 2023",
        "category": "playstation",
        "price": 1489,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality DualSense Controller suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User84",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer85",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 180,
        "name": "DualSense Controller - Ultra 2024",
        "category": "playstation",
        "price": 1370,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality DualSense Controller suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User22",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer87",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 181,
        "name": "PS VR2 - Edition 2025",
        "category": "playstation",
        "price": 1818,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PS VR2 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User83",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer64",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 182,
        "name": "Charging Station - Max 2025",
        "category": "playstation",
        "price": 958,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Charging Station suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User94",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer5",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 183,
        "name": "PS VR2 - Max 2025",
        "category": "playstation",
        "price": 1795,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PS VR2 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User77",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer54",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 184,
        "name": "Gran Turismo 7 - Ultra 2024",
        "category": "playstation",
        "price": 388,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gran Turismo 7 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User86",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer58",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 185,
        "name": "PS5 Cover - Edition 2025",
        "category": "playstation",
        "price": 456,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PS5 Cover suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User10",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer57",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 186,
        "name": "Charging Station - Edition 2025",
        "category": "playstation",
        "price": 1406,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Charging Station suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User49",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer64",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 187,
        "name": "God of War Ragnarok - Lite 2023",
        "category": "playstation",
        "price": 1075,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality God of War Ragnarok suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User86",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer59",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 188,
        "name": "Spider-Man 2 - Ultra 2025",
        "category": "playstation",
        "price": 1705,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Spider-Man 2 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User27",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer3",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 189,
        "name": "PS VR2 - Ultra 2023",
        "category": "playstation",
        "price": 1090,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PS VR2 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User49",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer17",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 190,
        "name": "PlayStation 5 Slim - Pro 2025",
        "category": "playstation",
        "price": 1912,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PlayStation 5 Slim suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User13",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer6",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 191,
        "name": "Sony Pulse 3D - Lite 2025",
        "category": "playstation",
        "price": 535,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Sony Pulse 3D suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User23",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer31",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 192,
        "name": "Gran Turismo 7 - Lite 2024",
        "category": "playstation",
        "price": 1657,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Gran Turismo 7 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User78",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer70",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 193,
        "name": "PlayStation 5 Slim - Max 2024",
        "category": "playstation",
        "price": 1138,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PlayStation 5 Slim suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User96",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer89",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 194,
        "name": "Spider-Man 2 - Max 2023",
        "category": "playstation",
        "price": 718,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Spider-Man 2 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User16",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer54",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 195,
        "name": "DualSense Controller - Pro 2023",
        "category": "playstation",
        "price": 762,
        "image": "https://images.unsplash.com/photo-1592155931584-901ac1576d98?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality DualSense Controller suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User68",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer96",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 196,
        "name": "DualSense Controller - Lite 2023",
        "category": "playstation",
        "price": 1080,
        "image": "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality DualSense Controller suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User43",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer37",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 197,
        "name": "God of War Ragnarok - Ultra 2023",
        "category": "playstation",
        "price": 1653,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality God of War Ragnarok suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User50",
                "rating": 5,
                "comment": "Great product!"
            },
            {
                "user": "Buyer91",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 198,
        "name": "PlayStation 5 Slim - Ultra 2023",
        "category": "playstation",
        "price": 471,
        "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PlayStation 5 Slim suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User4",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer47",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 199,
        "name": "Spider-Man 2 - Max 2025",
        "category": "playstation",
        "price": 856,
        "image": "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality Spider-Man 2 suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User42",
                "rating": 3,
                "comment": "Great product!"
            },
            {
                "user": "Buyer21",
                "rating": 5,
                "comment": "Worth the money."
            }
        ]
    },
    {
        "id": 200,
        "name": "PS5 Cover - Ultra 2025",
        "category": "playstation",
        "price": 467,
        "image": "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=600",
        "description": "This requires a description. A high quality PS5 Cover suitable for all your needs. Features top tier specs.",
        "reviews": [
            {
                "user": "User44",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "Buyer85",
                "rating": 4,
                "comment": "Worth the money."
            }
        ]
    }
];