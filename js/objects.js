import { ObjectContainer } from './components/ObjectTile.js';
import { dineData } from './components/objectData.js';
import { filterBySearchText, filterByAttributes } from './components/objectFilters.js';


//- * * * * * * * * *
//- * * Functions * *
//- * * * * * * * * *
const renderReducedData = () => {
  const searchText = searchInput.value;
  const searchFilter = searchFilterSelect.options;
  let selectedSearchFilter = [];
  for (var i = 0; i < searchFilter.length; i++) {
    if (searchFilter[i].selected) selectedSearchFilter.push(searchFilter[i].value);
  }
  const searchResults = filterBySearchText(searchText, dineData);
  const filterResults = filterByAttributes(selectedSearchFilter, dineData);
  const overlappingResults = searchResults.filter(result => filterResults.includes(result));
  container.render(overlappingResults);
}

const renderRawData = () => container.render(dineData);


//- * * * * * * * * * * * * *
//- * * Base Declarations * *
//- * * * * * * * * * * * * *
const container = new ObjectContainer('objectDisplay-Container');
const searchInput = document.getElementById('search-input');
const searchFilterSelect = document.getElementById('search-filter');


//- * * * * * * * * * * * *
//- * * Event Listeners * *
//- * * * * * * * * * * * *
window.addEventListener('DOMContentLoaded', renderRawData)

searchInput.addEventListener('input', renderReducedData);
searchFilterSelect.addEventListener('change', renderReducedData);