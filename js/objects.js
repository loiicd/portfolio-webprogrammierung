import { ObjectContainer } from './components/ObjectTile.js';
import { dineData } from './components/objectData.js';
import { filterBySearchText, filterByAttributes } from './components/objectFilters.js';


//- * * * * * * * * *
//- * * Functions * *
//- * * * * * * * * *
const renderRawDineData = () => container.render(dineData);

const renderFilterCategories = () => {
  const allCategories = [...new Set(dineData.map(item => item.category))];
  allCategories.forEach((category) => createListItem(categoryFilterDiv, category));
}

const renderReducedDineData = () => {
  const allCategories = [...new Set(dineData.map(item => item.category))];
  const searchText = searchInput.value;
  const searchFilter = searchFilterCheckboxes;
  const selectedSearchFilter = getSelectedFilter(searchFilter);
  const searchResults = filterBySearchText(searchText, dineData);
  const filterResults = filterByAttributes(selectedSearchFilter, dineData, allCategories);
  const overlappingResults = searchResults.filter(result => filterResults.includes(result));
  container.render(overlappingResults);
}

const getSelectedFilter = (searchFilter) => {
  let selectedSearchFilter = [];
  for (var i = 0; i < searchFilter.length; i++) {
    if (searchFilter[i].checked) selectedSearchFilter.push(searchFilter[i].value);
  }
  return selectedSearchFilter;
}

const createListItem = (categoryFilterDiv, category) => {
  const listItem = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  const span = document.createElement('span');
  checkbox.name = 'filter-checkbox';
  checkbox.type = 'checkbox';
  checkbox.value = category;
  span.textContent = category;
  listItem.appendChild(label)
  label.appendChild(checkbox);
  label.appendChild(span);
  categoryFilterDiv.appendChild(listItem);
}


//- * * * * * * * * * * * * *
//- * * Base Declarations * *
//- * * * * * * * * * * * * *
const container = new ObjectContainer('objectDisplay-Container');
const categoryFilterDiv = document.getElementById('categoriesFilter');
const searchInput = document.getElementById('search-input');
const searchFilterCheckboxes = document.getElementsByName('filter-checkbox');


//- * * * * * * * * * * * *
//- * * Event Listeners * *
//- * * * * * * * * * * * *
window.addEventListener('DOMContentLoaded', () => {
  renderRawDineData();
  renderFilterCategories();
  searchInput.addEventListener('input', renderReducedDineData);
  for (var i = 0, len = searchFilterCheckboxes.length; i < len; i++) {
    searchFilterCheckboxes[i].addEventListener('change', renderReducedDineData);
  }
})