import { ObjectContainer } from './components/ObjectTile.js';
import { getLocalStorage, addToCompletedOrders, clearOrders, addToLocalStorage } from './components/updateLocalStorage.js';

function completeOrder () {
  const orderedItems = getLocalStorage('orders');
  const emptyList = [];
  // Fügen Sie die Logik zum Verschieben der Bestellung in den abgeschlossenen Bereich hinzu
  addToLocalStorage(orderedItems, 'completedOrders');

  // Leeren Sie den aktuellen Warenkorb
  localStorage.setItem('orders', JSON.stringify([]));
  container.render(emptyList);

  //event listener hier einfügen
  //button funktionalität als funktion implementieren

  // Aktualisieren Sie die Anzeige, um zu zeigen, dass der Warenkorb leer ist
  // ... Code, um die Anzeige zu aktualisieren ...

  alert('Ihre Bestellung wurde abgeschlossen.');
}

let orders = JSON.parse(localStorage.getItem('orders')) || [];

const container = new ObjectContainer('objectDisplay-Container');
container.render(orders);

window.addEventListener('localStorageUpdated', () => {
  let orders = JSON.parse(localStorage.getItem('orders'))  || [];
  container.render(orders);}); 


document.getElementById('placeOrderButton').addEventListener('click', () => {
  completeOrder();
});







  