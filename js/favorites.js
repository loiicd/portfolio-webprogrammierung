import { ObjectContainer } from './components/ObjectTile.js';

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
if (favorites.length === 0) {
  container.container.innerHTML = 'Keine Favoriten vorhanden.';
}

const container = new ObjectContainer('objectDisplay-Container');
container.render(favorites);

window.addEventListener('favoritesUpdated', () => {container.render(favorites);});