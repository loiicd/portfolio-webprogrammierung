import { renderObjects } from './components/objectDisplay.js';
import { dineData } from './object_catalouge.js';



window.addEventListener('load', () => {
    renderObjects(dineData, 'objectDisplay-Container');
  });

