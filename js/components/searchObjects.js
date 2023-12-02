
export function searchObjects(searchText, objects) {
  return objects.filter(object => {
    return object.title.toLowerCase().includes(searchText.toLowerCase()) ||
      object.description.toLowerCase().includes(searchText.toLowerCase())
  });
}