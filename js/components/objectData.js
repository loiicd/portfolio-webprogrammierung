/**
 * @fileOverview This file is the object catalouge.
 * It contains the objects array with its attributes: id, title, category, description, image, and diet{vegetarian, gluten_free, vegan}
 */

export const dineData = [
    { id: 1001, title: "Pizza Salami", description: "Eine köstliche Pizza mit Salami und Käse.", category: "Pizza", image: "../../assets/compressed/Pizza_Salami.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 12.99 },
    { id: 1002, title: "Pizza Margherita", description: "Eine klassische Pizza mit Tomaten, Mozzarella und Basilikum.", category: "Pizza", image: "../../assets/compressed/Pizza_Margherita.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 10.99 },
    { id: 1003, title: "Pizza Funghi", description: "Pizza mit Pilzen, Olivenöl und frischem Knoblauch.", category: "Pizza", image: "../../assets/compressed/Pizza_Funghi.jpg", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 11.99 },
    { id: 1004, title: "Spaghetti Carbonara", description: "Spaghetti mit einer cremigen Eiersauce, Speck und Parmesankäse.", category: "Pasta", image: "../../assets/compressed/Spaghetti_Carbonara.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 14.99 },
    { id: 1005, title: "Lasagne", description: "Schichtnudeln mit Hackfleisch, Tomatensauce und Käse überbacken.", category: "Pasta", image: "../../assets/compressed/Lasagne.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 13.99 },
    { id: 1006, title: "Ravioli mit Pesto", description: "Ravioli gefüllt mit Ricotta und Spinat, serviert mit Pesto.", category: "Pasta", image: "../../assets/compressed/Ravioli_mit_Pesto.png", diet: { vegetarian: true, gluten_free: false, vegan: false }, price: 15.99 },
    { id: 1007, title: "Hamburger", description: "Ein saftiger Hamburger mit Rindfleisch, Tomaten, Salat und Käse.", category: "Burger", image: "../../assets/compressed/Burger.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 9.99 },
    { id: 1008, title: "Chicken Burger", description: "Hamburger mit knusprig gebratenem Hühnchen, Salat und Mayonnaise.", category: "Burger", image: "../../assets/compressed/Chicken_Burger.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 11.99 },
    { id: 1009, title: "Veggie Burger", description: "Ein vegetarischer Burger mit Gemüsepatty und Avocado.", category: "Burger", image: "../../assets/compressed/Veggie_Burger.png", diet: { vegetarian: true, gluten_free: false, vegan: false }, price: 10.99 },
    { id: 1010, title: "Sushi Combo", description: "Eine Auswahl an frischem Sushi mit verschiedenen Sorten und Sojasauce.", category: "Sushi", image: "../../assets/compressed/Sushi_Combo.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 18.99 },
    { id: 1011, title: "Sashimi Deluxe", description: "Frische Sashimi-Scheiben von Thunfisch und Lachs.", category: "Sushi", image: "../../assets/compressed/Sashimi.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 22.99 },
    { id: 1012, title: "Tempura Roll", description: "Sushi-Rolle mit knusprig gebackenem Tempura und Avocado.", category: "Sushi", image: "../../assets/compressed/Tempura_Roll.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 16.99 },
    { id: 1013, title: "Caesar Salad", description: "Ein knackiger Caesar-Salat mit Hühnchen, Croutons und Caesar-Dressing.", category: "Salat", image: "../../assets/compressed/Caesar_Salad.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 8.99 },
    { id: 1014, title: "Greek Salad", description: "Griechischer Salat mit Tomaten, Gurken, Oliven und Feta-Käse.", category: "Salat", image: "../../assets/compressed/Greek_Salad.png", diet: { vegetarian: true, gluten_free: false, vegan: false }, price: 10.99 },
    { id: 1015, title: "Cobb Salad", description: "Cobb-Salat mit Hühnchen, Bacon, Eiern und Avocado.", category: "Salat", image: "../../assets/compressed/Cobb_Salad.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 12.99 },
    { id: 1021, title: "Mushroom Risotto", description: "Creamy risotto with wild mushrooms and Parmesan cheese.", category: "Risotto", image: "../../assets/compressed/Mushroom_Risotto.png", diet: { vegetarian: true, gluten_free: false, vegan: false }, price: 16.99 },
    { id: 1022, title: "Lemon Garlic Shrimp Pasta", description: "Pasta tossed with succulent shrimp, lemon, and garlic in a white wine sauce.", category: "Pasta", image: "../../assets/compressed/Shrimp_Pasta.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 19.99 },
    { id: 1023, title: "Caprese Panini", description: "Panini with fresh mozzarella, tomatoes, basil, and balsamic glaze.", category: "Sandwich", image: "../../assets/compressed/Caprese_Panini.png", diet: { vegetarian: true, gluten_free: false, vegan: false }, price: 14.99 },
    { id: 1024, title: "Teriyaki Chicken Bowl", description: "Grilled chicken with teriyaki sauce, served over a bed of steamed rice and vegetables.", category: "Bowl", image: "../../assets/compressed/Teriyaki_Chicken_Bowl.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 17.99 },
    { id: 1025, title: "Eggplant Parmesan", description: "Baked eggplant slices layered with marinara sauce and melted mozzarella.", category: "Vegetarian", image: "../../assets/compressed/Eggplant_Parmesan.png", diet: { vegetarian: true, gluten_free: false, vegan: false }, price: 15.99 },
    { id: 1027, title: "Mango Avocado Salad", description: "Fresh salad with mango, avocado, mixed greens, and citrus vinaigrette.", category: "Salad", image: "../../assets/compressed/Mango_Avocado_Salad.png", diet: { vegetarian: true, gluten_free: false, vegan: false }, price: 13.99 },
    { id: 1029, title: "Tomato Basil Bruschetta", description: "Toasted bread topped with diced tomatoes, fresh basil, and balsamic glaze.", category: "Appetizer", image: "../../assets/compressed/Bruschetta.png", diet: { vegetarian: true, gluten_free: false, vegan: false }, price: 7.99 },
    { id: 1030, title: "Pineapple Fried Rice", description: "Fried rice with pineapple, cashews, and a hint of curry powder.", category: "Rice", image: "../../assets/compressed/Pineapple_Fried_Rice.png", diet: { vegetarian: true, gluten_free: false, vegan: false }, price: 11.99 },
    { id: 1031, title: "Beef Enchiladas", description: "Tortillas filled with seasoned beef, topped with enchilada sauce and melted cheese.", category: "Mexican", image: "../../assets/compressed/Beef_Enchiladas.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 14.99 },
    { id: 1032, title: "Vegetable Pad Thai", description: "Stir-fried rice noodles with tofu, vegetables, and a flavorful Pad Thai sauce.", category: "Thai", image: "../../assets/compressed/Vegetable_Pad_Thai.png", diet: { vegetarian: true, gluten_free: true, vegan: true }, price: 15.99 },
    { id: 1033, title: "Salmon Teriyaki", description: "Grilled salmon glazed with teriyaki sauce, served with steamed broccoli and rice.", category: "Seafood", image: "../../assets/compressed/Salmon_Teriyaki.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 22.99 },
    { id: 1035, title: "Quinoa Salad", description: "Healthy salad with quinoa, mixed vegetables, and a lemon vinaigrette.", category: "Salad", image: "../../assets/compressed/Quinoa_Salad.png", diet: { vegetarian: true, gluten_free: true, vegan: true }, price: 13.99 },
    { id: 1036, title: "Chicken Alfredo Pasta", description: "Creamy Alfredo pasta with grilled chicken, mushrooms, and parmesan cheese.", category: "Pasta", image: "../../assets/compressed/Chicken_Alfredo_Pasta.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 17.99 },
    { id: 1037, title: "Spinach and Feta Stuffed Chicken", description: "Chicken breasts stuffed with spinach and feta, baked to perfection.", category: "Chicken", image: "../../assets/compressed/Spinach_Feta_Chicken.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 19.99 },
    { id: 1038, title: "Vegetarian Burrito Bowl", description: "A flavorful bowl with rice, black beans, roasted vegetables, and guacamole.", category: "Mexican", image: "../../assets/compressed/Vegetarian_Burrito_Bowl.png", diet: { vegetarian: true, gluten_free: true, vegan: true }, price: 15.99 },
    { id: 1039, title: "Shrimp Tacos", description: "Tacos filled with seasoned shrimp, cabbage slaw, and avocado crema.", category: "Mexican", image: "../../assets/compressed/Shrimp_Tacos.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 16.99 },
    { id: 1040, title: "Mushroom and Swiss Burger", description: "Juicy burger with sautéed mushrooms, Swiss cheese, and truffle aioli.", category: "Burger", image: "../../assets/compressed/Mushroom_Swiss_Burger.png", diet: { vegetarian: false, gluten_free: false, vegan: false }, price: 14.99 },
];