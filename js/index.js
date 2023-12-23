import { ObjectContainer } from './components/ObjectTile.js';
import dineData from './data/objectData.js';
import { clearLocalStorage, getLocalStorage } from './components/updateLocalStorage.js';
import getRecommendations from './components/getRecomendations.js';


//- * * * * * * * * * * * * *
//- * * Base Declarations * *
//- * * * * * * * * * * * * *
const recomendedatoins = getRecommendations(dineData);
const container = new ObjectContainer('objectDisplay-Container');
const deleteHistoryButton = document.getElementById('deleteHistoryButton');
// const showOrders = document.getElementById('show-orders');
// const completedOrders = getLocalStorage('completedOrders');


//- * * * * * * * * * * * *
//- * * Event Listeners * *
//- * * * * * * * * * * * *
if (deleteHistoryButton) {
  deleteHistoryButton.addEventListener('click', () => {
    clearLocalStorage('completedOrders');
    location.reload();
  });
};
window.addEventListener('DOMContentLoaded', () => container.render(recomendedatoins));