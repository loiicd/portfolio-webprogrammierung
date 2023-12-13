import { ObjectContainer } from './components/ObjectTile.js';
import { getLocalStorage, orderObjectIsInLocalStorage, addToCompletedOrders, clearOrders} from './components/updateLocalStorage.js';


//- * * * * * * * * *
//- * * Functions * *
//- * * * * * * * * *

function completeOrder() {
  const orderedItems = getLocalStorage('orders');

  // Überprüfen, ob der Warenkorb leer ist
  if (orderedItems.length === 0) {
    alert('Ihr Warenkorb ist leer. Bitte fügen Sie Artikel hinzu, bevor Sie eine Bestellung aufgeben.');
    return; // Beendet die Funktion, um zu verhindern, dass eine leere Bestellung abgeschlossen wird
  }
  const orderId = Date.now()

  addToCompletedOrders(orderedItems, orderId);
  clearOrders();
  container.render([]);

  if (getLocalStorage('orders').length === 0 && orderObjectIsInLocalStorage(orderedItems, 'completedOrders', orderId)) {
    alert('Ihre Bestellung wurde abgeschlossen.');
  } else {
    alert('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
  }
};

//- * * * * * * * * * * * * *
//- * * Base Declarations * *
//- * * * * * * * * * * * * *
let orders = getLocalStorage('orders');
const placeOrderButton = document.getElementById('placeOrderButton')
const container = new ObjectContainer('objectDisplay-Container');
container.render(orders);

window.addEventListener('localStorageUpdated', () => {
  let orders = getLocalStorage('orders');
  container.render(orders);
}); 

placeOrderButton.addEventListener('click', () => {
  completeOrder();
});








  