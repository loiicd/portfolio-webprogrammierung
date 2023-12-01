/**
 * @fileOverview This file contains the logic for the favourites functionality.
 * It is based on the objects array from object_catalouge.js.
 */


import data from "./object_catalouge.js";

document.addEventListener("DOMContentLoaded", function () {
    
    const favoritesButton = document.getElementById("favoritesButton");
    const favoriteResults = document.getElementById("favoriteResults");

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let isFavoritesVisible = false;
    
    


    //favoritesbuttonvisibility
    favoritesButton.addEventListener("click", function () {
        if (isFavoritesVisible) {
            // Wenn Favoriten sichtbar sind, ausblenden
            favoriteResults.style.display = "none";
            favoritesButton.textContent = "Favoriten anzeigen";
            isFavoritesVisible = false;
        } else {
            // Wenn Favoriten nicht sichtbar sind, anzeigen
            displayFavorites();
            favoriteResults.style.display = "flex";
            favoritesButton.textContent = "Favoriten ausblenden";
            isFavoritesVisible = true;
        }
    });

    

    //favoritebutton
    function createFavoriteButton(result) {
        const favoriteButton = document.createElement("button");
        favoriteButton.textContent = "Zu Favoriten hinzufügen";
        favoriteButton.addEventListener("click", function () {
            if (!isFavorite(result)) {
                addToFavorites(result);
            }
        });
        return favoriteButton;
    }

    //unfavoritebutton
    function createUnfavoriteButton(result) {
        const unfavoriteButton = document.createElement("button");
        unfavoriteButton.textContent = "Aus Favoriten entfernen";
        unfavoriteButton.addEventListener("click", function () {
            removeFromFavorites(result);
            displayFavorites(); // Aktualisiert die Ansicht der Favoriten direkt
        });
        return unfavoriteButton;
    }

    //isfavorite
    function isFavorite(result) {
        return favorites.some(favorite => favorite.title === result.title);
    }

    //addtofavorites
    function addToFavorites(result) {
    if (!isFavorite(result)) {
        favorites.push(result);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        displayFavorites();
        }
    }

    
    //removefromfavorites
    function removeFromFavorites(result) {
        favorites = favorites.filter(favorite => favorite.title !== result.title);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    //displayfavorites
    function displayFavorites() {
        favoriteResults.innerHTML = "";

        if (favorites.length === 0) {
            favoriteResults.innerHTML = "<p>Keine Favoriten gefunden.</p>";
        } else {
            favorites.forEach(favorite => {
                const resultItem = createResultItem(favorite, true);
                resultItem.classList.add("favorite");
                favoriteResults.appendChild(resultItem);
            });
        }
    }


});


