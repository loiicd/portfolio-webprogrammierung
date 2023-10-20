function displayFavorites(favorites) {
    console.log("dipslayFavorites")
    const favoritesDiv = document.getElementById('favorites');
    favoritesDiv.innerHTML = "";
    if (favorites.length === 0) {
        favoritesDiv.innerHTML = "You dont have saved any favorites yet.";
        return;
    }
    for (var i = 0; i < favorites.length; i++) {
        var object = favorites[i];
        var div = document.createElement("div");
        div.innerHTML = "<h2>" + object.name + " " + object.id +"</h2><p>" + object.short_description + "</p>";
        var button = document.createElement("button");
        button.textContent = "Remove";
        button.addEventListener("click", (function(obj) {
        return function() {
            removeFavorite(obj);
        };
        })(object));
        div.appendChild(button);
        favoritesDiv.appendChild(div);
    }
}



function removeFavorite(object) {
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  for (var i = 0; i < favorites.length; i++) {
    if (favorites[i].id === object.id) {
      favorites.splice(i, 1);
    }
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  displayFavorites(favorites);
}