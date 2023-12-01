/**
 * @fileOverview This file is the object catalouge.
 * It contains the objects array with its attributes: name, id, short description, category and long description.
 */

// Daten für die Suchergebnisse (Beispiel)
const data = [
    { title: "iPhone 13", description: "Das neueste iPhone-Modell.", image:"../assets/iphone.png"},
    { title: "MacBook Air", description: "Ein leichtes und leistungsstarkes Notebook.", image:"../assets/macbook.png"},
    { title: "Apple Watch Series 7", description: "Die neueste Smartwatch von Apple.", image:"../assets/watch.png"},
    // Weitere Suchergebnisse hier
];

export const dineData = [
    { title: "Pizza Salami", description: "Eine köstliche Pizza mit Salami und Käse.", category: "Pizza", image: "../assets/Pizza_Salami.png", vegetarisch: false },
    { title: "Pizza Margherita", description: "Eine klassische Pizza mit Tomaten, Mozzarella und Basilikum.", category: "Pizza", image: "../assets/Pizza_Margherita.png", vegetarisch: true },
    { title: "Pizza Funghi", description: "Pizza mit Pilzen, Olivenöl und frischem Knoblauch.", category: "Pizza", image: "../assets/Pizza_Funghi.jpg", vegetarisch: true },
    { title: "Spaghetti Carbonara", description: "Spaghetti mit einer cremigen Eiersauce, Speck und Parmesankäse.", category: "Pasta", image: "../assets/Spaghetti_Carbonara.png", vegetarisch: false },
    { title: "Lasagne", description: "Schichtnudeln mit Hackfleisch, Tomatensauce und Käse überbacken.", category: "Pasta", image: "../assets/Lasagne.png", vegetarisch: false },
    { title: "Ravioli mit Pesto", description: "Ravioli gefüllt mit Ricotta und Spinat, serviert mit Pesto.", category: "Pasta", image: "../assets/Ravioli_mit_Pesto.png", vegetarisch: true },
    { title: "Hamburger", description: "Ein saftiger Hamburger mit Rindfleisch, Tomaten, Salat und Käse.", category: "Burger", image: "../assets/Burger.png", vegetarisch: false },
    { title: "Chicken Burger", description: "Hamburger mit knusprig gebratenem Hühnchen, Salat und Mayonnaise.", category: "Burger", image: "../assets/Chicken_Burger.png", vegetarisch: false },
    { title: "Veggie Burger", description: "Ein vegetarischer Burger mit Gemüsepatty und Avocado.", category: "Burger", image: "../assets/Veggie_Burger.png", vegetarisch: true },
    { title: "Sushi Combo", description: "Eine Auswahl an frischem Sushi mit verschiedenen Sorten und Sojasauce.", category: "Sushi", image: "../assets/Sushi_Combo.png", vegetarisch: false },
    { title: "Sashimi Deluxe", description: "Frische Sashimi-Scheiben von Thunfisch und Lachs.", category: "Sushi", image: "../assets/Sashimi.png", vegetarisch: false },
    { title: "Tempura Roll", description: "Sushi-Rolle mit knusprig gebackenem Tempura und Avocado.", category: "Sushi", image: "../assets/Tempura_Roll.png", vegetarisch: false },
    { title: "Caesar Salad", description: "Ein knackiger Caesar-Salat mit Hühnchen, Croutons und Caesar-Dressing.", category: "Salat", image: "../assets/Caesar_Salad.png", vegetarisch: false },
    { title: "Greek Salad", description: "Griechischer Salat mit Tomaten, Gurken, Oliven und Feta-Käse.", category: "Salat", image: "../assets/Greek_Salad.png", vegetarisch: true },
    { title: "Cobb Salad", description: "Cobb-Salat mit Hühnchen, Bacon, Eiern und Avocado.", category: "Salat", image: "../assets/Cobb_Salad.png", vegetarisch: false }
];

export default data