
export function isFavorite(object) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.some(favorite => favorite.title === object.title);
    }

// In Ihrer addToFavorites-Funktion
export function addToFavorites(object) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(object);
  localStorage.setItem('favorites', JSON.stringify(favorites));

  // Dispatch a custom event
  window.dispatchEvent(new CustomEvent('favoritesUpdated'));

  console.log('Added to favorites:', object);
}

// In Ihrer removeFromFavorites-Funktion
export function removeFromFavorites(object) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const index = favorites.findIndex(favorite => favorite.id === object.id);
  if (index !== -1) {
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Dispatch a custom event
    window.dispatchEvent(new CustomEvent('favoritesUpdated'));
  }
}