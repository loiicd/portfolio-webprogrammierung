import { ObjectContainer } from './components/ObjectTile.js';
import data, { dineData } from './object_catalouge.js';

const objects = dineData

const container = new ObjectContainer('objectDisplay-Container');
container.render(objects);


  /**
  window.addEventListener('favoritesUpdated', () => {
    renderObjects(dineData, 'objectDisplay-Container');
  });
   */

