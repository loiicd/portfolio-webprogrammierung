import { ObjectContainer } from './components/ObjectTile.js';
import { getLocalStorage, addToCompletedOrders, clearOrders, addToLocalStorage, isInLocalStorage } from './components/updateLocalStorage.js';


//- * * * * * * * * *
//- * * Functions * *
//- * * * * * * * * *

function completeOrder() {
  const orderedItems = getLocalStorage('orders');
  if (orderedItems.length === 0) {
    alert('Ihr Warenkorb ist leer. Bitte fügen Sie Artikel hinzu, bevor Sie eine Bestellung aufgeben.');
    return;
  }

  addToCompletedOrders(orderedItems);
  clearOrders();
  container.render([]);

  if (orders.length === 0 && isInLocalStorage(orderedItems, 'completedOrders')) {
    alert('Ihre Bestellung wurde abgeschlossen.');
  } else {
    alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
  }
};


//- * * * * * * * * * * * * *
//- * * Base Declarations * *
//- * * * * * * * * * * * * *
let orders = getLocalStorage('orders');
const container = new ObjectContainer('objectDisplay-Container');
container.render(orders);


//- * * * * * * * * * * * *
//- * * Event Listeners * *
//- * * * * * * * * * * * *
window.addEventListener('localStorageUpdated', () => {
  let orders = getLocalStorage('orders');
  container.render(orders);
}); 

document.getElementById('placeOrderButton').addEventListener('click', () => {
  completeOrder();
});








  