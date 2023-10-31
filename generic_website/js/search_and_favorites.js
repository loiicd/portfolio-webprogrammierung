/**
 * @fileOverview This file contains the logic for the search functionality.
 * It is based on the objects array from object_catalouge.js.
 */


import { data } from "./object_catalouge.js";   

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const filterSelect = document.getElementById("filter");
    const searchResults = document.getElementById("searchResults");
    const favoritesButton = document.getElementById("favoritesButton");
    const favoriteResults = document.getElementById("favoriteResults");

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedFilter = filterSelect.value;
        const filteredResults = data.filter(item => {
            if (selectedFilter === "all" || item.title.toLowerCase().includes(selectedFilter)) {
                return item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm);
            }
            return false;
        });

        displayResults(filteredResults);
    });

    favoritesButton.addEventListener("click", function () {
        displayFavorites();
    });

    function displayResults(results) {
        searchResults.innerHTML = "";

        if (results.length === 0) {
            searchResults.innerHTML = "<p>Keine Ergebnisse gefunden.</p>";
        } else {
            results.forEach(result => {
                const resultItem = createResultItem(result, false);

                const favoriteButton = createFavoriteButton(result);
                resultItem.appendChild(favoriteButton);

                searchResults.appendChild(resultItem);
            });
        }
    }

    function createResultItem(result, isFavorite) {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result");

        const title = document.createElement("h2");
        title.textContent = result.title;

        const image = document.createElement("img");
        image.src = result.image; // Das Bild aus dem Datenmodell holen

        const description = document.createElement("p");
        description.textContent = result.description;
        description.style.display = "none";

        const detailsButton = document.createElement("button");
        detailsButton.textContent = "Details anzeigen";
        detailsButton.addEventListener("click", function () {
            if (description.style.display === "block") {
                description.style.display = "none";
                detailsButton.textContent = "Details anzeigen";
            } else {
                description.style.display = "block";
                detailsButton.textContent = "Details ausblenden";
            }
        });

        resultItem.appendChild(title);
        resultItem.appendChild(image); // Bild hinzufügen
        resultItem.appendChild(description);
        resultItem.appendChild(detailsButton);

        if (isFavorite) {
            const unfavoriteButton = createUnfavoriteButton(result);
            resultItem.appendChild(unfavoriteButton);
        }

        return resultItem;
    }

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

    function createUnfavoriteButton(result) {
        const unfavoriteButton = document.createElement("button");
        unfavoriteButton.textContent = "Aus Favoriten entfernen";
        unfavoriteButton.addEventListener("click", function () {
            removeFromFavorites(result);
            displayFavorites(); // Aktualisiert die Ansicht der Favoriten direkt
        });
        return unfavoriteButton;
    }

    function isFavorite(result) {
        return favorites.some(favorite => favorite.title === result.title);
    }

    function addToFavorites(result) {
        if (!isFavorite(result)) {
            favorites.push(result);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            displayFavorites(); // Aktualisiert die Favoritenliste sofort
        }
    }
    

    function removeFromFavorites(result) {
        favorites = favorites.filter(favorite => favorite.title !== result.title);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    function displayFavorites() {
        favoriteResults.innerHTML = "";

        if (favorites.length === 0) {
            favoriteResults.innerHTML = "<p>Keine Favoriten gefunden.</p>";
        } else {
            favorites.forEach(favorite => {
                const resultItem = createResultItem(favorite, true);

                favoriteResults.appendChild(resultItem);
            });
        }
    }
});


