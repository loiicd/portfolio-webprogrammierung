import { ObjectContainer } from './components/ObjectTile.js';
import { dineData } from './components/objectData.js';
import { clearCompletedOrders } from './components/updateLocalStorage.js';


//- * * * * * * * * *
//- * * Functions * *
//- * * * * * * * * *
const getRecommendations = (dineData) => {
  const shuffled = dineData.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 4);
}


//- * * * * * * * * * * * * *
//- * * Base Declarations * *
//- * * * * * * * * * * * * *
const recomendedatoins = getRecommendations(dineData)
const container = new ObjectContainer('objectDisplay-Container');
const deleteHistoryButton = document.getElementById('deleteHistoryButton')


//- * * * * * * * * * * * *
//- * * Event Listeners * *
//- * * * * * * * * * * * *
deleteHistoryButton.addEventListener('click', () => {
  clearCompletedOrders();
  location.reload();
});
window.addEventListener('DOMContentLoaded', () => container.render(recomendedatoins));