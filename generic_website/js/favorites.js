import { renderObjects } from "./components/displayObjects.js";

var favorites = JSON.parse(localStorage.getItem("favorites"));

renderObjects(favorites, 'objectDisplay-Container');

// In Ihrer Haupt-Datei
window.addEventListener('favoritesUpdated', () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  renderObjects(favorites, 'objectDisplay-Container');
});