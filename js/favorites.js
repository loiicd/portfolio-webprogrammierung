import { ObjectContainer } from './components/ObjectTile.js';

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

const container = new ObjectContainer('objectDisplay-Container');
container.render(favorites);

window.addEventListener('favoritesUpdated', () => {
  let favorites = JSON.parse(localStorage.getItem('favorites'))  || [];
  container.render(favorites);}); 