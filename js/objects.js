import { ObjectContainer } from './components/ObjectTile.js';
import { dineData } from './components/objectData.js';
import { filterBySearchText, filterByAttributes } from './components/objectFilters.js';


//- * * * * * * * * *
//- * * Functions * *
//- * * * * * * * * *
const renderRawData = () => container.render(dineData);

const renderReducedData = () => {
  const searchText = searchInput.value;
  const searchFilter = searchFilterCheckboxes;
  const selectedSearchFilter = getSelectedFilter(searchFilter);
  const searchResults = filterBySearchText(searchText, dineData);
  const filterResults = filterByAttributes(selectedSearchFilter, dineData);
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


//- * * * * * * * * * * * * *
//- * * Base Declarations * *
//- * * * * * * * * * * * * *
const container = new ObjectContainer('objectDisplay-Container');
const searchInput = document.getElementById('search-input');
const searchFilterCheckboxes = document.getElementsByName('filter-checkbox');


//- * * * * * * * * * * * *
//- * * Event Listeners * *
//- * * * * * * * * * * * *
window.addEventListener('DOMContentLoaded', renderRawData)

searchInput.addEventListener('input', renderReducedData);
for (var i = 0, len = searchFilterCheckboxes.length; i < len; i++) {
  searchFilterCheckboxes[i].addEventListener('change', renderReducedData);
}