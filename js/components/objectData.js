/**
 * @fileOverview This file is the object catalouge.
 * It contains the objects array with its attributes: id, title, category, description, image, and diet{vegetarian, gluten_free, vegan}
 */

export const dineData = [
    {   id: 1001, title: "Pizza Salami", description: "Eine köstliche Pizza mit Salami und Käse.", category: "Pizza", image: "../../assets/Pizza_Salami.png", diet: {vegetarian: false, gluten_free: false, vegan: false}},
    { id: 1002, title: "Pizza Margherita", description: "Eine klassische Pizza mit Tomaten, Mozzarella und Basilikum.", category: "Pizza", image: "../../assets/Pizza_Margherita.png", diet: {vegetarian: false, gluten_free: false, vegan: false}},
    { id: 1003, title: "Pizza Funghi", description: "Pizza mit Pilzen, Olivenöl und frischem Knoblauch.", category: "Pizza", image: "../../assets/Pizza_Funghi.jpg", diet: {vegetarian: false, gluten_free: false, vegan: false}},
    { id: 1004, title: "Spaghetti Carbonara", description: "Spaghetti mit einer cremigen Eiersauce, Speck und Parmesankäse.", category: "Pasta", image: "../../assets/Spaghetti_Carbonara.png", diet: {vegetarian: false, gluten_free: false, vegan: false} },
    { id: 1005, title: "Lasagne", description: "Schichtnudeln mit Hackfleisch, Tomatensauce und Käse überbacken.", category: "Pasta", image: "../../assets/Lasagne.png", diet: {vegetarian: false, gluten_free: false, vegan: false} },
    { id: 1006, title: "Ravioli mit Pesto", description: "Ravioli gefüllt mit Ricotta und Spinat, serviert mit Pesto.", category: "Pasta", image: "../../assets/Ravioli_mit_Pesto.png", vegitarian: true },
    { id: 1007, title: "Hamburger", description: "Ein saftiger Hamburger mit Rindfleisch, Tomaten, Salat und Käse.", category: "Burger", image: "../../assets/Burger.png", diet: {vegetarian: false, gluten_free: false, vegan: false} },
    { id: 1008, title: "Chicken Burger", description: "Hamburger mit knusprig gebratenem Hühnchen, Salat und Mayonnaise.", category: "Burger", image: "../../assets/Chicken_Burger.png", diet: {vegetarian: false, gluten_free: false, vegan: false} },
    { id: 1009, title: "Veggie Burger", description: "Ein vegetarischer Burger mit Gemüsepatty und Avocado.", category: "Burger", image: "../../assets/Veggie_Burger.png", vegitarian: true },
    { id: 1010, title: "Sushi Combo", description: "Eine Auswahl an frischem Sushi mit verschiedenen Sorten und Sojasauce.", category: "Sushi", image: "../../assets/Sushi_Combo.png", diet: {vegetarian: false, gluten_free: false, vegan: false} },
    { id: 1011, title: "Sashimi Deluxe", description: "Frische Sashimi-Scheiben von Thunfisch und Lachs.", category: "Sushi", image: "../../assets/Sashimi.png", diet: {vegetarian: false, gluten_free: false, vegan: false} },
    { id: 1012, title: "Tempura Roll", description: "Sushi-Rolle mit knusprig gebackenem Tempura und Avocado.", category: "Sushi", image: "../../assets/Tempura_Roll.png", diet: {vegetarian: false, gluten_free: false, vegan: false} },
    { id: 1013, title: "Caesar Salad", description: "Ein knackiger Caesar-Salat mit Hühnchen, Croutons und Caesar-Dressing.", category: "Salat", image: "../../assets/Caesar_Salad.png", diet: {vegetarian: false, gluten_free: false, vegan: false} },
    { id: 1014, title: "Greek Salad", description: "Griechischer Salat mit Tomaten, Gurken, Oliven und Feta-Käse.", category: "Salat", image: "../../assets/Greek_Salad.png", vegitarian: true },
    { id: 1015, title: "Cobb Salad", description: "Cobb-Salat mit Hühnchen, Bacon, Eiern und Avocado.", category: "Salat", image: "../../assets/Cobb_Salad.png", diet: {vegetarian: false, gluten_free: false, vegan: false} }
];