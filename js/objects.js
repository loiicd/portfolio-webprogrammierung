import { ObjectContainer } from './components/ObjectTile.js';
import { dineData } from './components/objectData.js';
import { searchObjects } from './components/searchObjects.js';

const searchInput = document.getElementById('search-input');
const searchFilterSelect = document.getElementById('search-filter');

const container = new ObjectContainer('objectDisplay-Container');
container.render(dineData);

searchInput.addEventListener('input', () => {
  const searchText = searchInput.value;
  const searchFilter = searchFilterSelect.options
  let selectedSearchFilter = []
  for (var i = 0; i < searchFilter.length; i++) {
    if (searchFilter[i].selected) selectedSearchFilter.push(searchFilter[i].value)
  }
  if (searchText) {
    // const searchResults = dineData.filter(object => object.title.toLowerCase().includes(searchText.toLowerCase()));

    const searchResults = searchObjects(searchText, selectedSearchFilter, dineData)
    container.render(searchResults);
  } else {
    container.render(dineData)
  }
});

