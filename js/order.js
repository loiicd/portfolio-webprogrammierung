import { ObjectContainer } from './components/ObjectTile.js';
import { getLocalStorage, addToCompletedOrders, clearOrders, addToLocalStorage } from './components/updateLocalStorage.js';

function completeOrder() {
  const orderedItems = getLocalStorage('orders');

  // Überprüfen, ob der Warenkorb leer ist
  if (orderedItems.length === 0) {
    alert('Ihr Warenkorb ist leer. Bitte fügen Sie Artikel hinzu, bevor Sie eine Bestellung aufgeben.');
    return; // Beendet die Funktion, um zu verhindern, dass eine leere Bestellung abgeschlossen wird
  }

  // Fügen Sie die Logik zum Verschieben der Bestellung in den abgeschlossenen Bereich hinzu
  addToCompletedOrders(orderedItems);

  // Leeren Sie den aktuellen Warenkorb
  clearOrders(); // Verwenden Sie die bereits definierte Funktion zum Leeren der Bestellungen
  container.render([]); // Leeren Sie den Container

  // Aktualisieren Sie die Anzeige, um zu zeigen, dass der Warenkorb leer ist
  // ... Code, um die Anzeige zu aktualisieren ...

  // Statt alert('Ihre Bestellung wurde abgeschlossen.');
showAlert('Ihre Bestellung wurde abgeschlossen.');
}

let orders = getLocalStorage('orders'); // Verwenden Sie die getLocalStorage-Funktion

const container = new ObjectContainer('objectDisplay-Container');
container.render(orders);

window.addEventListener('localStorageUpdated', () => {
  let orders = getLocalStorage('orders');
  container.render(orders);
}); 

document.getElementById('placeOrderButton').addEventListener('click', () => {
  completeOrder();
});








  