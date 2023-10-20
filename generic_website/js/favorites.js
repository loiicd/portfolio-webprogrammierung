function displayIdArray() {
    var div = document.getElementById('ids-in-local-storage');
    div.innerHTML = localStorage.getItem('favorites');
}

function displayFavorites() {
  let html = '';
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  console.log(favorites);
  for (let i = 0; i < favorites.length; i++) {
      const favorite = getObjectById(favorites[i]);
      if (favorite) {
          html += '<div class="object">';
          html += '<p>' + favorite.name + '</p>';
          //html += '<img src="' + favorite.image + '" alt="' + favorite.name + '">';
          //html += '<button onclick="removeFromFavorites(' + favorite + ')">Remove from Favorites</button>';
          html += '<p>' + favorite.description + '</p>';
          html += '</div>';
      }
  }
  favoritesDisplay.innerHTML = html;
  favoritesDisplay.scrollIntoView({behavior: "smooth"});
}
  