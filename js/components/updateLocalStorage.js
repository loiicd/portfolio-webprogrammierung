export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
    }

export function isInLocalStorage(object, key) {
    const storedObjects = getLocalStorage(key);
    return storedObjects.some(favorite => favorite.title === object.title);
    }

export function addToLocalStorage(object, key) {
  const storedObjects = getLocalStorage(key)
  storedObjects.push(object);
  localStorage.setItem(key, JSON.stringify(storedObjects));

  window.dispatchEvent(new CustomEvent('favoritesUpdated'));
  console.log('Added to LocalStorage:', object);
}

export function removeFromLocalStorage(object, key) {
  const storedObjects = getLocalStorage(key)
  const index = storedObjects.findIndex(favorite => favorite.id === object.id);
  if (index !== -1) {
    storedObjects.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(storedObjects));

    window.dispatchEvent(new CustomEvent('favoritesUpdated'));
    console.log('Removed from LocalStorage:', object);
  }
}
