import { ObjectContainer } from './components/ObjectTile.js';
import { dineData } from './components/objectData.js';
import { filterBySearchText, filterByAttributes } from './components/objectFilters.js';
import getSelectedFilter from './utils/getSelectedFilter.js';


//- * * * * * * * * *
//- * * Functions * *
//- * * * * * * * * *
const renderRawDineData = () => {
  const sortingType = getCheckedRadioValue(sortingRadio);
  const sortedDineData = sortDineData(dineData, sortingType);
  container.render(sortedDineData);
}

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
  const sortingType = getCheckedRadioValue(sortingRadio);
  const sortedDineData = sortDineData(overlappingResults, sortingType);
  container.render(sortedDineData);
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

const getCheckedRadioValue = (sortingRadio) => {
  let checkedValue;
  for (const radio of sortingRadio) {
    if (radio.checked) {
      checkedValue = radio.value;
      break;
    }
  }
  return checkedValue;
}

const sortDineData = (dineData, type) => {
  switch (type) {
    case 'name':
      return dineData.sort((a, b) => a.title.localeCompare(b.title));
    case 'category':
      return dineData.sort((a, b) => a.category.localeCompare(b.category));
    case 'price':
      return dineData.sort((a, b) => a.price -b.price);
  }
}

//- * * * * * * * * * * * * *
//- * * Base Declarations * *
//- * * * * * * * * * * * * *
const container = new ObjectContainer('objectDisplay-Container');
const categoryFilterDiv = document.getElementById('categoriesFilter');
const searchInput = document.getElementById('search-input');
const searchFilterCheckboxes = document.getElementsByName('filter-checkbox');
const sortingRadio = document.getElementsByName('sorting-radio');


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
  for (var i = 0, len = sortingRadio.length; i < len; i++) {
    sortingRadio[i].addEventListener('change', renderRawDineData);
  }
})