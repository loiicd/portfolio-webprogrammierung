import { ObjectContainer } from './components/ObjectTile.js';
import { dineData } from './object_catalouge.js';

const searchInput = document.getElementById('search-input');

const container = new ObjectContainer('objectDisplay-Container');

searchInput.addEventListener('input', () => {
  const searchText = searchInput.value;
  if (searchText) {
    const searchResults = dineData.filter(object => object.title.toLowerCase().includes(searchText.toLowerCase()));
    container.render(searchResults);
  } else {
    container.render(dineData)
  }
});

