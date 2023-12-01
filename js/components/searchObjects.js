
export function searchObjects(searchText, objects) {
    if (!filter) {
        const objects = objects;
    } else if (filter === typeof String || Number) {
        const objects = objects.filter(object => object.category === filter);
    } else {
        objects.filter(object => { object.category in filter });
    }

  return objects.filter(object => {
    return object.title.toLowerCase().includes(searchText.toLowerCase()) ||
      object.description.toLowerCase().includes(searchText.toLowerCase())
  });
}

