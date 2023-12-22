/**
 * @module js/components/updateLocalStorage.js
 * @description Opperates on LocalStorage to add and remove objects from it.
 */

const localStorageKeys = ['favorites', 'orders', 'completedOrders'];

/**
 * @function getLocalStorage
 * @description Gets the objects from LocalStorage
 * @param {string} key - The key of the LocalStorage object
 * @returns {array} - The array of objects
 */
export const getLocalStorage = (key) => {
  if (!localStorageKeys.includes(key)) throw new Error('Key not supported!');
  return JSON.parse(localStorage.getItem(key)) || [];
};

/**
 * @description Checks if an object is in LocalStorage
 * @param {object} object - The object to check
 * @param {string} key - The key of the LocalStorage object (e.g. 'favorites', 'orders')
 * @returns {boolean} - True if the object is in specified key in LocalStorage, false otherwise
 */
export function isInLocalStorage(object, key) {
  if (!localStorageKeys.includes(key)) throw new Error('Key not supported!');
  const storedObjects = getLocalStorage(key);
  return storedObjects.some(favorite => favorite.id === object.id);
};


export function orderObjectIsInLocalStorage(objects, key, orderId) {
  if (!localStorageKeys.includes(key)) throw new Error('Key not supported!');
  const storedObjects = getLocalStorage(key);
  return objects.some((object) => storedObjects.some((item) => item.id === object.id && item.orderId === orderId));
};


/**
 * @description Adds an object to LocalStorage
 * @param {object} object - The object to add
 * @param {string} key - The key of the LocalStorage object (e.g. 'favorites', 'orders')
 */
export function addToLocalStorage(object, key) {
  if (!localStorageKeys.includes(key)) throw new Error('Key not supported!');
  const storedObjects = getLocalStorage(key)
  storedObjects.push(object);
  localStorage.setItem(key, JSON.stringify(storedObjects));
  window.dispatchEvent(new CustomEvent('localStorageUpdated'));
};

/**
 * @description Removes an object from LocalStorage
 * @param {object} object - The object to remove
 * @param {string} key - The key of the LocalStorage object (e.g. 'favorites', 'orders')
 */
export function removeFromLocalStorage(object, key) {
  const storedObjects = getLocalStorage(key);
  const index = storedObjects.findIndex(favorite => favorite.id === object.id);
  if (index !== -1) {
    storedObjects.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(storedObjects));
    window.dispatchEvent(new CustomEvent('localStorageUpdated'));
  };
};

/**
 * Fügt abgeschlossene Bestellungen zum Local Storage hinzu
 * @param {array} orders - Die Liste der Bestellungen, die abgeschlossen wurden
 * @param {string} orderId - Order ID
 */
export function addToCompletedOrders(orders, orderId) {
  const completedOrders = getLocalStorage('completedOrders');
  orders.map((order) => order.orderId = orderId);
  completedOrders.push(...orders);
  localStorage.setItem('completedOrders', JSON.stringify(completedOrders));
};

/**
 * Löscht Orders aus dem Local Storage
 * @param {string} key - 'orders' oder 'completedOrders' oder 'favorites'
 * @return {void}
 */
export const clearLocalStorage = (key) => {
  if (!localStorageKeys.includes(key)) throw new Error('Key not supported!');
  localStorage.setItem(type, JSON.stringify([]));
};