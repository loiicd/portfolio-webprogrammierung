/**
 * Filter objects by title with search text
 * @param {string} searchText - text to search
 * @param {array} objects - array of objects to search
 * @return {array} - array of objects that match the search
 */
export const filterBySearchText = (searchText, objects) => {
  return objects.filter(object => {
    return object.title.toLowerCase().includes(searchText.toLowerCase());
  });
};

/**
 * Filter objects by multiple attributes
 * @param {string[]} searchFilter - list of attributes
 * @param {array} objects - array of objects to search
 * @param {string[]} allCategories - array of all categories 
 * @return {array} - array of objects that match the attributes
 */
export const filterByAttributes = (searchFilter, objects, allCategories) => {
  if (searchFilter.length === 0) return objects;
  const dietFilters = getDietFilters(searchFilter);
  const categoriesFilter = getCategoriesFilter(searchFilter);
  let categoriyFilteredData = applyCategoriesFilter(objects, categoriesFilter);
  return applyDietFilters(categoriyFilteredData, dietFilters);
};

const getDietFilters = (searchFilter) => {
  return searchFilter.filter(item => ['vegetarian', 'vegan', 'gluten_free'].includes(item));
};

const getCategoriesFilter = (searchFilter) => {
  return searchFilter.filter(item => !['vegetarian', 'vegan', 'gluten_free'].includes(item));
};

const applyCategoriesFilter = (objects, categoriesFilter) => {
  return categoriesFilter.length === 0 ? objects : objects.filter(object => categoriesFilter.includes(object.category));
};

const applyDietFilters = (categoriyFilteredData, dietFilters) => {
  return dietFilters.length === 0 ? categoriyFilteredData : categoriyFilteredData.filter(object => {
    return (
      (dietFilters.includes('vegetarian') && object.diet.vegetarian) ||
      (dietFilters.includes('vegan') && object.diet.vegan) ||
      (dietFilters.includes('gluten_free') && object.diet.gluten_free)
    );
  });
};