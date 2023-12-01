import { isFavorite, addToFavorites, removeFromFavorites } from "./updateFavorites.js";

class ObjectTile {
  constructor(object) {
    this.object = object;
    this.element = this.createElement();
  }

  createElement() {
    const objectTile = document.createElement('div');
    objectTile.classList.add('object-tile');

    const image = document.createElement('img');
    image.src = this.object.image;
    image.alt = this.object.title;

    const title = document.createElement('h3');
    title.textContent = this.object.title;

    const updateFavoritesButton = document.createElement('button');
    updateFavoritesButton.addEventListener('click', () => this.updateFavorites());
    this.updateFavoritesDisplay(updateFavoritesButton);

    const expandButton = document.createElement('a');
    expandButton.textContent = 'See Description';
    expandButton.href = '#';
    expandButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.toggleExpand(objectTile, expandButton);
    });

    const expandedText = document.createElement('p');
    expandedText.textContent = this.object.description.length > 70 ? this.object.description.substring(0, 67) + '...' : this.object.description;
    expandedText.style.display = 'none';

    objectTile.append(image, title, updateFavoritesButton, expandButton, expandedText);

    return objectTile;
  }

  updateFavorites() {
    if (isFavorite(this.object)) {
      removeFromFavorites(this.object);
    } else {
      addToFavorites(this.object);
    }
    this.updateFavoritesDisplay(this.element.querySelector('button'));
    window.dispatchEvent(new Event('favoritesUpdated'));
  }

  updateFavoritesDisplay(button) {
    if (isFavorite(this.object)) {
      button.classList.add('remove-from-favorites');
      button.classList.remove('add-to-favorites');
      button.textContent = 'Remove from Favourites';
    } else {
      button.classList.add('add-to-favorites');
      button.classList.remove('remove-from-favorites');
      button.textContent = 'Add to Favourites';
    }
  }

  toggleExpand(objectTile, expandButton) {
    const paragraph = objectTile.querySelector('p');
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      expandButton.style.display = "none";
    } else {
      paragraph.style.display = "none";
      expandButton.style.display = "block";
    }
  }

  render(container) {
    container.append(this.element);
  }
}

class ObjectContainer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  render(objects) {
    this.container.innerHTML = '';
    objects.forEach(object => {
      const tile = new ObjectTile(object);
      tile.render(this.container);
    });
  }
}

export { ObjectTile, ObjectContainer };