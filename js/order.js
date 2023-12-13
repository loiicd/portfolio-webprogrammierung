import { ObjectContainer } from './components/ObjectTile.js';
import { getLocalStorage, orderObjectIsInLocalStorage, addToCompletedOrders, clearOrders, addToLocalStorage, isInLocalStorage } from './components/updateLocalStorage.js';


//- * * * * * * * * *
//- * * Functions * *
//- * * * * * * * * *

function completeOrder() {
  console.log('Complete Order Ausgeführt')
  const orderedItems = getLocalStorage('orders');
  if (orderedItems.length === 0) {
    alert('Ihr Warenkorb ist leer. Bitte fügen Sie Artikel hinzu, bevor Sie eine Bestellung aufgeben.');
    return;
  }
  const orderId = Date.now()

  addToCompletedOrders(orderedItems, orderId);
  clearOrders();
  container.render([]);

  const if1 = getLocalStorage('orders').length
  const if2 = orderObjectIsInLocalStorage(orderedItems, 'completedOrders', orderId)

  console.log('If1:', if1)
  console.log('If2:', if2)

  if (if1 === 0 && if2) {
    alert('Ihre Bestellung wurde abgeschlossen.');
  } else {
    console.error('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
  }
};


//- * * * * * * * * * * * * *
//- * * Base Declarations * *
//- * * * * * * * * * * * * *
let orders = getLocalStorage('orders');
const placeOrderButton = document.getElementById('placeOrderButton')
const container = new ObjectContainer('objectDisplay-Container');
container.render(orders);


//- * * * * * * * * * * * *
//- * * Event Listeners * *
//- * * * * * * * * * * * *
window.addEventListener('localStorageUpdated', () => {
  let orders = getLocalStorage('orders');
  container.render(orders);
}); 

placeOrderButton.addEventListener('click', () => {
  completeOrder();
});








  