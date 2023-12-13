import { ObjectContainer } from './components/ObjectTile.js';
import { dineData } from './components/objectData.js';
import { clearCompletedOrders } from './components/updateLocalStorage.js';

const recomendedatoins = dineData.slice(0,3); // implement getRecommendations() function in ./components/recomendations.js

const container = new ObjectContainer('objectDisplay-Container');
container.render(recomendedatoins);

const deleteHistoryButton = document.getElementById('deleteHistoryButton')

deleteHistoryButton.addEventListener('click', () => {
  clearCompletedOrders();
  location.reload();
})