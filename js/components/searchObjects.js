/**
 * Search objects by title and description
 * @param {string} searchText - text to search
 * @param {string[]} searchFilter - array of search filters
 * @param {array} objects - array of objects to search
 * @return {array} - array of objects that match the search
 * 
 * @todo implement filter by category
 */

export function searchObjects(searchText, searchFilter, objects) {
  // return objects.filter(object => {
  //   return object.title.toLowerCase().includes(searchText.toLowerCase())
  // });

  return objects.filter(object => {
    const titleMatch = object.title.toLowerCase().includes(searchText.toLowerCase());
    if (searchFilter.length != 0) {
      const dietMatch = filterDiet(searchFilter, titleMatch);
      return dietMatch;
    } else {
      return titleMatch;  
    };
  });
};

function filterDiet(searchFilter, object) {
  const dietMatch = searchFilter.every(preference => {
    switch (preference) {
      case 'vegetarian':
        return object.diet && object.diet.vegetarian;
      case 'gluten_free':  
        return object.diet && object.diet.gluten_free;
      case 'vegan':
        return object.diet && object.diet.vegan;
      default:
        return false;
    };
  });
  return dietMatch
}