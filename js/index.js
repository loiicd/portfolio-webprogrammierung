import { ObjectContainer } from './components/ObjectTile.js';
import { dineData } from './components/objectData.js';
import { clearCompletedOrders } from './components/updateLocalStorage.js';

const getRecommendations = (dineData) => {
  const shuffled = dineData.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}

const recomendedatoins = getRecommendations(dineData)

const container = new ObjectContainer('objectDisplay-Container');
container.render(recomendedatoins);

const deleteHistoryButton = document.getElementById('deleteHistoryButton')

deleteHistoryButton.addEventListener('click', () => {
  clearCompletedOrders();
  location.reload();
})