import { ObjectContainer } from './components/ObjectTile.js';


//- * * * * * * * * * * * * *
//- * * Base Declarations * *
//- * * * * * * * * * * * * *
const container = new ObjectContainer('objectDisplay-Container');
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


//- * * * * * * * * * * * *
//- * * Event Listeners * *
//- * * * * * * * * * * * *
window.addEventListener('favoritesUpdated', () => {
  let favorites = JSON.parse(localStorage.getItem('favorites'))  || [];
  container.render(favorites);
}); 
window.addEventListener('DOMContentLoaded', () => container.render(favorites));