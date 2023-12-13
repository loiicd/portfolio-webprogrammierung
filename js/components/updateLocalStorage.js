/**
 * @module js/components/updateLocalStorage.js
 * @description Opperates on LocalStorage to add and remove objects from it.
 */


/**
 * @function getLocalStorage
 * @description Gets the objects from LocalStorage
 * @param {string} key - The key of the LocalStorage object
 * @returns {array} - The array of objects
 */
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
    }


/**
 * @description Checks if an object is in LocalStorage
 * @param {object} object - The object to check
 * @param {string} key - The key of the LocalStorage object (e.g. 'favorites', 'orders')
 * @returns {boolean} - True if the object is in specified key in LocalStorage, false otherwise
 */
export function isInLocalStorage(object, key) {
    const storedObjects = getLocalStorage(key);
    return storedObjects.some(favorite => favorite.id === object.id);
}


export function orderObjectIsInLocalStorage(objects, key, orderId) {
  const storedObjects = getLocalStorage(key);
  return objects.some((object) => storedObjects.some((item) => item.id === object.id && item.orderId === orderId));
}


/**
 * @description Adds an object to LocalStorage
 * @param {object} object - The object to add
 * @param {string} key - The key of the LocalStorage object (e.g. 'favorites', 'orders')
 */
export function addToLocalStorage(object, key) {
  const storedObjects = getLocalStorage(key)
  storedObjects.push(object);
  localStorage.setItem(key, JSON.stringify(storedObjects));

  window.dispatchEvent(new CustomEvent('localStorageUpdated'));
  console.log('Removed from LocalStorage', key, object);
}

/**
 * @description Removes an object from LocalStorage
 * @param {object} object - The object to remove
 * @param {string} key - The key of the LocalStorage object (e.g. 'favorites', 'orders')
 */
export function removeFromLocalStorage(object, key) {
  const storedObjects = getLocalStorage(key)
  const index = storedObjects.findIndex(favorite => favorite.id === object.id);
  if (index !== -1) {
    storedObjects.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(storedObjects));

    window.dispatchEvent(new CustomEvent('localStorageUpdated'));
    console.log('Removed from LocalStorage', key, object);
  }
}

/**
 * Fügt abgeschlossene Bestellungen zum Local Storage hinzu
 * @param {array} orders - Die Liste der Bestellungen, die abgeschlossen wurden
 */
export function addToCompletedOrders(orders, orderId) {
  const completedOrders = getLocalStorage('completedOrders');
  // Füge alle neuen Bestellungen zu den abgeschlossenen Bestellungen hinzu

  orders.map((order) => order.orderId = orderId)
  completedOrders.push(...orders);

  localStorage.setItem('completedOrders', JSON.stringify(completedOrders));
}


export function clearOrders() {
  // Fügen Sie hier Code hinzu, um "orders" zu leeren
  localStorage.setItem('orders', JSON.stringify([]));
}

export const clearCompletedOrders = () => localStorage.setItem('completedOrders', JSON.stringify([]));