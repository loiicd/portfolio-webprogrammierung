import { renderObjects } from './components/displayObjects.js';
import { dineData } from './object_catalouge.js';


window.addEventListener('load', () => {
    renderObjects(dineData, 'objectDisplay-Container');
  });

window.addEventListener('favoritesUpdated', () => {
    renderObjects(dineData, 'objectDisplay-Container');
  });
