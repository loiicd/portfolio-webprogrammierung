import { ObjectContainer } from './components/ObjectTile.js';

let orders = JSON.parse(localStorage.getItem('orders')) || [];

const container = new ObjectContainer('objectDisplay-Container');
container.render(orders);

window.addEventListener('localStorageUpdated', () => {
  let orders = JSON.parse(localStorage.getItem('orders'))  || [];
  container.render(orders);}); 