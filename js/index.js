import { ObjectContainer } from './components/ObjectTile.js';
import { dineData } from './components/objectData.js';

const recomendedatoins = dineData.slice(0,3); // implement getRecommendations() function in ./components/recomendations.js

const container = new ObjectContainer('objectDisplay-Container');
container.render(recomendedatoins);