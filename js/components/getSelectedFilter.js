/**
 * Get the selected from a NodeList of Checkboxes
 * @param {NodeList} checkboxes - Nodelist of checkboxes
 * @return {NodeList} - Nodelist of selected checkboxes
 */
const getSelectedFilter = (searchFilter) => {
  let selectedSearchFilter = [];
  for (var i = 0; i < searchFilter.length; i++) {
    if (searchFilter[i].checked) selectedSearchFilter.push(searchFilter[i].value);
  };
  return selectedSearchFilter;
};

export default getSelectedFilter;