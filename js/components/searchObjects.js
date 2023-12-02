/**
 * Search objects by title and description
 * @param {string} searchText - text to search
 * @param {array} objects - array of objects to search
 * @return {array} - array of objects that match the search
 * 
 * @todo implement filter by category
 */

export function searchObjects(searchText, objects) {
  return objects.filter(object => {
    return object.title.toLowerCase().includes(searchText.toLowerCase())
  });
}