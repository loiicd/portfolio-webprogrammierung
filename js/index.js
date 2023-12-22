import { ObjectContainer } from './components/ObjectTile.js';
import dineData from './data/objectData.js';
import { clearOrders } from './components/updateLocalStorage.js';
import getRecommendations from './components/getRecomendations.js';


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
  clearOrders('completedOrders');
  location.reload();
});
window.addEventListener('DOMContentLoaded', () => container.render(recomendedatoins));