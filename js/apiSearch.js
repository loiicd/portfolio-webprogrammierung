import { ObjectContainer } from './components/ObjectTile.js';
import getSelectedFilter from './utils/getSelectedFilter.js';

//- * * * * * * * * *
//- * * Functions * *
//- * * * * * * * * *
function searchAPI(searchValue, dietFilters) {
    const selectedDietFilters = getSelectedFilter(dietFilters)
    const url = `${searchURL}${searchValue}&diet=${selectedDietFilters}&apiKey=${API_KEY}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const results = data.results;
        console.log(results);
        let promises = results.map(async result => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${result.id}/summary?apiKey=${API_KEY}`);
            const summaryData = await response.json();
            return {
                title: result.title,
                image: result.image,
                description: summaryData.summary
            };
        });

        Promise.all(promises)
        .then(objectContainers => {
            const container = new ObjectContainer('objectDisplay-Container');
            container.render(objectContainers);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


//- * * * * * * * * * * * * *
//- * * Base Declarations * *
//- * * * * * * * * * * * * *
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const dietFilters = document.getElementsByName('dietFilter');
const API_KEY = '3121448146724bd4a9b9d9a513f8583a';
const searchURL = 'https://api.spoonacular.com/recipes/complexSearch?query=';


//- * * * * * * * * * * * *
//- * * Event Listeners * *
//- * * * * * * * * * * * *
searchButton.addEventListener('click', () => {
    const searchValue = searchInput.value;
    searchAPI(searchValue, dietFilters);
});