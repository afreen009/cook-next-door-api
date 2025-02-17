export async function seed(knex) {
  await knex("menu_items").del();
  await knex("cooks").del();

  const cooks = [
    {
      id: 4,
      name: "Alice",
      delivery_options: "pick-up only",
      lat: 42.933,
      long: -81.256,
      avatar:
        "https://unsplash.com/photos/woman-blonde-hair-and-red-lipstick-LyeduBb2Auk",
      categories: "veg,non-veg,halal",
    },
    {
      id: 1,
      name: "Bob",
      delivery_options: "delivery and pick-up",
      lat: 42.9315,
      long: -81.2575,
      avatar:
        "https://unsplash.com/photos/shallow-focus-photography-of-woman-outdoor-during-day-rDEOVtE7vOs",
      categories: "non-veg,halal",
    },
    {
      id: 2,
      name: "Carol",
      delivery_options: "pick-up only",
      lat: 42.932,
      long: -81.258,
      avatar:
        "https://unsplash.com/photos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k",
      categories: "veg",
    },
    {
      id: 3,
      name: "Nilufar",
      delivery_options: "pick-up only",
      lat: 42.934,
      long: -81.255,
      avatar:
        "https://unsplash.com/photos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k",
      categories: "Non-veg,Halal",
    },
    {
      id: 14,
      name: "John",
      delivery_options: "delivery only",
      lat: 42.9305,
      long: -81.259,
      avatar:
        "https://unsplash.com/photos/man-wearing-white-dress-shirt-2C_pL8tqOq8",
      categories: "Veg,Gluten-free",
    },
    {
      id: 5,
      name: "Sarah",
      delivery_options: "pick-up and delivery",
      lat: 42.931,
      long: -81.2565,
      avatar:
        "https://unsplash.com/photos/woman-smiling-outdoor-1443425821022-889c1f3fdb5c",
      categories: "Vegan,Dairy-free",
    },
    {
      id: 6,
      name: "Carlos",
      delivery_options: "pick-up only",
      lat: 42.9325,
      long: -81.2555,
      avatar:
        "https://unsplash.com/photos/man-smiling-while-wearing-white-shirt-800537098105",
      categories: "Non-veg,Kosher",
    },
    {
      id: 7,
      name: "Mina",
      delivery_options: "delivery only",
      lat: 42.9345,
      long: -81.253,
      avatar:
        "https://unsplash.com/photos/close-up-of-woman-smiling-1281621067006-9d1e9a6b8b6f",
      categories: "Halal,Vegetarian",
    },
    {
      id: 8,
      name: "Alex",
      delivery_options: "pick-up and delivery",
      lat: 42.93,
      long: -81.26,
      avatar:
        "https://unsplash.com/photos/man-in-white-sweater-standing-outside-843731992032",
      categories: "Non-veg,Vegan",
    },
    {
      id: 9,
      name: "Emma",
      delivery_options: "pick-up only",
      lat: 42.935,
      long: -81.252,
      avatar:
        "https://unsplash.com/photos/woman-in-gray-shirt-using-smartphone-1611392340406-9b32b32e4e74",
      categories: "Veg,Gluten-free",
    },
    {
      id: 10,
      name: "Liam",
      delivery_options: "delivery only",
      lat: 42.940123,
      long: -81.24789,
      avatar: "https://unsplash.com/photos/man-in-black-jacket-871393200006",
      categories: "Non-veg,Dairy-free",
    },
    {
      id: 11,
      name: "Sofia",
      delivery_options: "pick-up and delivery",
      lat: 41.89,
      long: 12.49,
      avatar: "https://unsplash.com/photos/woman-in-black-jacket-837649333444",
      categories: "Vegan,Vegetarian",
    },
    {
      id: 12,
      name: "David",
      delivery_options: "pick-up only",
      lat: 42.941234,
      long: -81.246789,
      avatar: "https://unsplash.com/photos/man-in-black-suit-743260999880",
      categories: "Non-veg,Kosher",
    },
    {
      id: 13,
      name: "Laura",
      delivery_options: "delivery only",
      lat: 42.942345,
      long: -81.245678,
      avatar:
        "https://unsplash.com/photos/woman-in-gray-shirt-1554746572-3d88e6e99d19",
      categories: "Halal,Vegan",
    },
  ];

  await knex("cooks").insert(cooks);

  const menuItems = [
    {
      food_id: 1,
      food_url:
        "https://images.unsplash.com/photo-1478749485505-2a903a729c63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 2,
      menu_name: "Pho",
      rating: 5,
      price: "$30",
      description:
        "Pho is a Vietnamese noodle soup consisting of broth, linguine-shaped",
    },
    {
      food_id: 2,
      food_url:
        "https://images.unsplash.com/photo-1533450823749-791a21b4692a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 3,
      menu_name: "Spaghetti",
      rating: 4.5,
      price: "$40",
      description: "Spaghetti is a long, thin, solid, cylindrical pasta.",
    },
    {
      food_id: 3,
      food_url:
        "https://images.unsplash.com/photo-1620292760785-94e105bdaa8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 2,
      menu_name: "Baklava",
      rating: 4.5,
      price: "$30",
      description: "Baklava is a rich, sweet pastry made of layers of filo",
    },
    {
      food_id: 4,
      food_url:
        "https://images.unsplash.com/photo-1555475337-7a243bada82e?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 3,
      menu_name: "Pie",
      rating: 4.5,
      price: "$50",
      description:
        "Pie is a baked dish which is usually made of a pastry dough casing that",
    },
    {
      food_id: 5,
      food_url:
        "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 1,
      menu_name: "Tacos",
      rating: 4.7,
      price: "$25",
      description:
        "Tacos are a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.",
    },
    {
      food_id: 6,
      food_url:
        "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 1,
      menu_name: "Biryani",
      rating: 4.8,
      price: "$35",
      description:
        "Biryani is a mixed rice dish with its origins among the Muslims of the Indian subcontinent.",
    },
    {
      food_id: 7,
      food_url:
        "https://plus.unsplash.com/premium_photo-1663853051660-91bd9b822799?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmFsYWZlbHxlbnwwfHwwfHx8MA%3D%3D",
      cook_id: 1,
      menu_name: "Falafel",
      rating: 4.2,
      price: "$20",
      description:
        "Falafel is a deep-fried ball or patty-shaped fritter made from ground chickpeas.",
    },
    {
      food_id: 8,
      food_url:
        "https://images.unsplash.com/photo-1676471970358-1cff04452e7b?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 2,
      menu_name: "Egg Avocado Toast",
      rating: 4.3,
      price: "$30",
      description:
        "Egg Avocado Toast is a dish that consists of pasta and fresh vegetables.",
    },
    {
      food_id: 9,
      food_url:
        "https://images.unsplash.com/photo-1633424411431-5eb8d0e96488?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnYW4lMjBidXJnZXJzfGVufDB8fDB8fHww",
      cook_id: 2,
      menu_name: "Veggie Burger",
      rating: 4.5,
      price: "$25",
      description: "Veggie Burger is a burger that uses a meatless patty.",
    },
    {
      food_id: 10,
      food_url:
        "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 3,
      menu_name: "Pasta Primavera",
      rating: 4.3,
      price: "$30",
      description:
        "Pasta Primavera is a dish that consists of pasta and fresh vegetables.",
    },
    {
      food_id: 11,
      food_url:
        "https://images.unsplash.com/photo-1522036664039-3c5756c2b459?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 3,
      menu_name: "Veggie Burger",
      rating: 4.5,
      price: "$25",
      description: "Veggie Burger is a burger that uses a meatless patty.",
    },
    {
      food_id: 12,
      food_url:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 4,
      menu_name: "Chicken Curry",
      rating: 4.8,
      price: "$35",
      description:
        "A spicy and savory chicken curry with a rich and creamy sauce.",
    },
    {
      food_id: 13,
      food_url:
        "https://images.unsplash.com/photo-1573821663912-6df460f9c684?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 5,
      menu_name: "Margherita Pizza",
      rating: 4.7,
      price: "$20",
      description:
        "Classic Margherita Pizza with fresh tomatoes, mozzarella, and basil.",
    },
    {
      food_id: 14,
      food_url:
        "https://images.unsplash.com/photo-1570877215023-229052e10c34?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 6,
      menu_name: "Sushi Platter",
      rating: 4.9,
      price: "$50",
      description:
        "A variety of fresh sushi including tuna, salmon, and avocado rolls.",
    },
    {
      food_id: 15,
      food_url:
        "https://images.unsplash.com/photo-1681072530653-db8fe2538631?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 7,
      menu_name: "Falafel Wrap",
      rating: 4.4,
      price: "$15",
      description:
        "Crispy falafel balls wrapped in a warm pita with fresh veggies and tahini.",
    },
    {
      food_id: 16,
      food_url:
        "https://plus.unsplash.com/premium_photo-1661730314652-911662c0d86e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 8,
      menu_name: "Beef Tacos",
      rating: 4.6,
      price: "$30",
      description:
        "Delicious beef tacos served with fresh salsa, guacamole, and sour cream.",
    },
    {
      food_id: 17,
      food_url:
        "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1590&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 9,
      menu_name: "Pasta Carbonara",
      rating: 4.5,
      price: "$28",
      description:
        "A creamy pasta dish made with eggs, cheese, pancetta, and pepper.",
    },
    {
      food_id: 18,
      food_url:
        "https://plus.unsplash.com/premium_photo-1700089483464-4f76cc3d360b?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 10,
      menu_name: "Caesar Salad",
      rating: 4.3,
      price: "$18",
      description:
        "A fresh Caesar salad with romaine lettuce, croutons, and Parmesan cheese.",
    },
    {
      food_id: 19,
      food_url:
        "https://plus.unsplash.com/premium_photo-1661610605309-77feabcc8772?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 11,
      menu_name: "Pad Thai",
      rating: 4.7,
      price: "$22",
      description:
        "A traditional Thai dish with stir-fried noodles, shrimp, peanuts, and lime.",
    },
    {
      food_id: 20,
      food_url:
        "https://images.unsplash.com/photo-1595777216528-071e0127ccbf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 12,
      menu_name: "Lamb Kebabs",
      rating: 4.6,
      price: "$40",
      description:
        "Juicy lamb kebabs grilled to perfection and served with a side of rice.",
    },
    {
      food_id: 21,
      food_url:
        "https://plus.unsplash.com/premium_photo-1666662657930-7c3c39a12062?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 13,
      menu_name: "Chocolate Cake",
      rating: 4.9,
      price: "$10",
      description:
        "A rich and moist chocolate cake with a creamy chocolate frosting.",
    },
    {
      food_id: 22,
      food_url:
        "https://images.unsplash.com/photo-1625938393850-10f1f23de467?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 4,
      menu_name: "Grilled Salmon",
      rating: 4.8,
      price: "$45",
      description:
        "Fresh salmon fillet grilled to perfection, served with a side of asparagus and lemon butter sauce.",
    },
    {
      food_id: 23,
      food_url:
        "https://images.unsplash.com/photo-1668724775591-f50dd8ed65a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 4,
      menu_name: "Beef Stroganoff",
      rating: 4.7,
      price: "$40",
      description:
        "A classic Russian dish with tender beef strips in a creamy mushroom sauce, served over egg noodles.",
    },
    {
      food_id: 24,
      food_url:
        "https://plus.unsplash.com/premium_photo-1667899298118-24a6cad326ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 4,
      menu_name: "Cheesecake",
      rating: 4.9,
      price: "$15",
      description:
        "A rich and creamy cheesecake with a graham cracker crust and a strawberry topping.",
    },
    {
      food_id: 25,
      food_url:
        "https://plus.unsplash.com/premium_photo-1690561082636-06237f98bfab?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 5,
      menu_name: "Greek Salad",
      rating: 4.5,
      price: "$12",
      description:
        "A fresh Greek salad with cucumbers, tomatoes, olives, feta cheese, and a lemon vinaigrette.",
    },
    {
      food_id: 26,
      food_url:
        "https://images.unsplash.com/photo-1642497394078-4794e837019c?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 5,
      menu_name: "Lentil Soup",
      rating: 4.6,
      price: "$10",
      description:
        "A hearty and healthy lentil soup with carrots, celery, and spices.",
    },
    {
      food_id: 27,
      food_url:
        "https://images.unsplash.com/photo-1592119747782-d8c12c2ea267?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 5,
      menu_name: "Stuffed Peppers",
      rating: 4.7,
      price: "$18",
      description:
        "Bell peppers stuffed with a mix of rice, vegetables, and spices, baked to perfection.",
    },
    {
      food_id: 28,
      food_url:
        "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 6,
      menu_name: "Chicken Fajitas",
      rating: 4.8,
      price: "$35",
      description:
        "Grilled chicken strips with bell peppers and onions, served with tortillas and salsa.",
    },
    {
      food_id: 29,
      food_url:
        "https://images.unsplash.com/photo-1542326237-94b1c5a538d4?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 6,
      menu_name: "Tiramisu",
      rating: 4.9,
      price: "$20",
      description:
        "A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
    },
    {
      food_id: 30,
      food_url:
        "https://plus.unsplash.com/premium_photo-1671559021023-3da68c12aeed?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 6,
      menu_name: "Lasagna",
      rating: 4.7,
      price: "$30",
      description:
        "Layers of pasta, meat sauce, and cheese baked to golden perfection.",
    },
    {
      food_id: 31,
      food_url:
        "https://plus.unsplash.com/premium_photo-1694141251195-2cf78a758fda?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 7,
      menu_name: "Biryani",
      rating: 4.8,
      price: "$40",
      description:
        "A flavorful Indian rice dish with spices, saffron, and tender pieces of meat or vegetables.",
    },
    {
      food_id: 32,
      food_url:
        "https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 7,
      menu_name: "Hummus Platter",
      rating: 4.6,
      price: "$15",
      description:
        "A platter of creamy hummus served with pita bread, olives, and fresh vegetables.",
    },
    {
      food_id: 33,
      food_url:
        "https://images.unsplash.com/photo-1699728088600-6d684acbeada?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 7,
      menu_name: "Lamb Shawarma",
      rating: 4.7,
      price: "$25",
      description:
        "Tender lamb slices marinated in spices, served with pita, tahini sauce, and salad.",
    },
    {
      food_id: 34,
      food_url:
        "https://images.unsplash.com/photo-1701197159530-80a188e34dfc?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 8,
      menu_name: "Quiche Lorraine",
      rating: 4.6,
      price: "$22",
      description:
        "A savory French tart with a buttery crust, filled with eggs, cream, bacon, and cheese.",
    },
    {
      food_id: 35,
      food_url:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 8,
      menu_name: "Coq au Vin",
      rating: 4.9,
      price: "$45",
      description:
        "A classic French dish of chicken braised with red wine, mushrooms, and onions.",
    },
    {
      food_id: 36,
      food_url:
        "https://plus.unsplash.com/premium_photo-1713635953474-b74990274152?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 8,
      menu_name: "Ratatouille",
      rating: 4.7,
      price: "$30",
      description:
        "A French Provençal stewed vegetable dish, made with eggplant, zucchini, peppers, and tomatoes.",
    },
    {
      food_id: 37,
      food_url:
        "https://plus.unsplash.com/premium_photo-1666920344211-88611229ce09?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 9,
      menu_name: "Tempura",
      rating: 4.8,
      price: "$35",
      description:
        "A Japanese dish of battered and deep-fried vegetables and seafood, served with dipping sauce.",
    },
    {
      food_id: 38,
      food_url:
        "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 9,
      menu_name: "Ramen",
      rating: 4.7,
      price: "$25",
      description:
        "A Japanese noodle soup with a rich broth, slices of pork, and various toppings.",
    },
    {
      food_id: 39,
      food_url:
        "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 9,
      menu_name: "Teriyaki Chicken",
      rating: 4.6,
      price: "$28",
      description:
        "Grilled chicken glazed with a sweet and savory teriyaki sauce, served with rice.",
    },
    {
      food_id: 40,
      food_url:
        "https://images.unsplash.com/photo-1602406372206-4d58edc0b733?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 10,
      menu_name: "Sauerbraten",
      rating: 4.7,
      price: "$35",
      description:
        "A traditional German pot roast, marinated in a mixture of vinegar, water, and spices.",
    },
    {
      food_id: 41,
      food_url:
        "https://images.unsplash.com/photo-1576618148423-df549bcb6972?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 10,
      menu_name: "Bratwurst",
      rating: 4.6,
      price: "$20",
      description:
        "German sausages made from pork, beef, or veal, typically served with sauerkraut.",
    },
    {
      food_id: 42,
      food_url:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 10,
      menu_name: "Black Forest Cake",
      rating: 4.9,
      price: "$15",
      description:
        "A rich German chocolate cake with layers of chocolate sponge, cherries, and whipped cream.",
    },
    {
      food_id: 43,
      food_url:
        "https://plus.unsplash.com/premium_photo-1667807522175-bc48128e951e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 11,
      menu_name: "Paella",
      rating: 4.8,
      price: "$40",
      description:
        "A Spanish rice dish with saffron, mixed seafood, chicken, and vegetables.",
    },
    {
      food_id: 44,
      food_url:
        "https://images.unsplash.com/photo-1695234502934-dca6a45f88cb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 11,
      menu_name: "Churros",
      rating: 4.6,
      price: "$12",
      description:
        "Fried dough pastries sprinkled with sugar and cinnamon, often served with chocolate sauce.",
    },
    {
      food_id: 45,
      food_url:
        "https://images.unsplash.com/photo-1662469843203-b63638ace131?q=80&w=1636&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 11,
      menu_name: "Gazpacho",
      rating: 4.5,
      price: "$18",
      description:
        "A cold Spanish soup made with blended tomatoes, peppers, cucumbers, and garlic.",
    },
    {
      food_id: 46,
      food_url:
        "https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 12,
      menu_name: "Peking Duck",
      rating: 4.9,
      price: "$50",
      description:
        "A famous Chinese dish featuring crispy-skinned roasted duck served with pancakes and hoisin sauce.",
    },
    {
      food_id: 47,
      food_url:
        "https://plus.unsplash.com/premium_photo-1700161711418-014824c357bb?q=80&w=1572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 12,
      menu_name: "Kung Pao Chicken",
      rating: 4.7,
      price: "$25",
      description:
        "A spicy Sichuan dish made with chicken, peanuts, vegetables, and chili peppers.",
    },
    {
      food_id: 48,
      food_url:
        "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 12,
      menu_name: "Spring Rolls",
      rating: 4.6,
      price: "$12",
      description:
        "Crispy rolls filled with a mix of vegetables and sometimes meat, served with dipping sauce.",
    },
    {
      food_id: 49,
      food_url:
        "https://images.unsplash.com/photo-1607800910317-b92a6c395a1d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 13,
      menu_name: "Borscht",
      rating: 4.7,
      price: "$20",
      description:
        "A traditional Eastern European beet soup, often served with sour cream.",
    },
    {
      food_id: 50,
      food_url:
        "https://images.unsplash.com/photo-1547414368-1ae8e2c0ae4f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGVsbWVuaXxlbnwwfHwwfHx8MA%3D%3D",
      cook_id: 13,
      menu_name: "Pelmeni",
      rating: 4.8,
      price: "$22",
      description:
        "Russian dumplings filled with minced meat, served with sour cream or butter.",
    },
    {
      food_id: 51,
      food_url:
        "https://images.unsplash.com/photo-1675540212407-a67ab877c418?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 13,
      menu_name: "Blini",
      rating: 4.6,
      price: "$15",
      description:
        "Thin Russian pancakes often served with various toppings such as sour cream, caviar, or jam.",
    },
  ];

  await knex("menu_items").insert(menuItems);
}
