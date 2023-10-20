/**
 * @fileOverview This file contains the logic for the search functionality.
 * It is based on the objects array from object_catalouge.js.
 */

// searchInput is the input field in the search form
var searchInput = document.getElementById("search-input");

/** 
 * event listener to the searchInput element
 * listens for changes to the input value. When the input value changes, the code retrieves the new search term from the searchInput element.
 */ 
searchInput.addEventListener("input", function() {
  var searchTerm = searchInput.value;

  if (searchTerm === "") {
    displaySearchmatches([]);
  } else {
    var matches = searchObjects(searchTerm);
    displaySearchmatches(matches);
  }
});

/**
 * @description searches the objects array for objects whose ame, id or short description that match the searchTerm
 * @param {string} searchTerm used to search (case insensitive, long description is not searched)
 * @returns {Array} Array of objects that match the searchTerm. Ojects are sorted by how well they match the searchTerm (name, id, short description)
 */
function searchObjects(searchTerm) {
    var matches = [];
  
    for (var i = 0; i < objects.length; i++) {
      var object = objects[i];
  
      if (object.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        matches.push(object);
      } else if (object.id.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        matches.push(object);
      } else if (object.short_description.toLowerCase().includes(searchTerm.toLowerCase())) {
        matches.push(object);
      }
    }
  
    matches.sort(function(a, b) {
      if (a.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0 && b.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== 0) {
        return -1;
      } else if (a.id.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) === 0 && b.id.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) !== 0) {
        return -1;
      } else if (a.short_description.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0 && b.short_description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== 0) {
        return -1;
      } else {
        return 0;
      }
    });
  
    return matches;
  }

/**
 * 
 * @description displays the matches in the search-matches container
 * @param {Array: objects} matches is an array of objects that matched to the searchTerm
 * @returns html-container with a div for each object in matches.
 *         * each div contains the name, id and short description of the object
 *         * each div contains a button to add the object to the favorites
 *         * if the object is already in the favorites, the button SHOULD BE disabled
 */
function displaySearchmatches(matches) {
  var container = document.getElementById("search-results");
  container.innerHTML = "";

  if (matches.length === 0) {
    container.innerHTML = "No matches found.";
    return;
  }

  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  for (var i = 0; i < matches.length; i++) {
    var object = matches[i];

    var div = document.createElement("div");
    div.innerHTML = "<h2>" + object.name + " " + object.id +"</h2><p>" + object.short_description + "</p>";

    var button = document.createElement("button");
    button.textContent = "Favorit";

    for (var j = 0; j < favorites.length; j++) {
      if (favorites[j].id === object.id) {
        button.disabled = true;
      } else {
        button.addEventListener("click", (function(obj, btn) {
          return function() {
            addToFavorites(obj);
            btn.disabled = true;
          };
        })(object, button));
      }
    }
    div.appendChild(button);

    container.appendChild(div);
  }
}

/**
 * @param {object} object is an object that should be added to the favorites
 *            * element will be stored in localStorage
 * @returns {void}
 */

function addToFavorites(object) {
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push(object);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}



