/**
 * Filter objects by title with search text
 * @param {string} searchText - text to search
 * @param {array} objects - array of objects to search
 * @return {array} - array of objects that match the search
 */
export const searchObjects = (searchText, objects) => {
  return objects.filter(object => {
    return object.title.toLowerCase().includes(searchText.toLowerCase());
  });
};

/**
 * Filter objects by multiple filters
 * @param {string[]} searchFilter - list of filters
 * @param {array} objects - array of objects to search
 * @return {array} - array of objects that match the filters
 */
export const filterDiet = (searchFilter, objects) => {
  if (searchFilter.includes('none')) return objects;
  return objects.filter(object => {
    return (
      (searchFilter.includes('vegetarian') && object.diet.vegetarian) ||
      (searchFilter.includes('vegan') && object.diet.vegan) ||
      (searchFilter.includes('gluten_free') && object.diet.gluten_free)
    );    
  });
};