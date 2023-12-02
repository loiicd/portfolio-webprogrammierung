import { isInLocalStorage, removeFromLocalStorage, addToLocalStorage } from "./updateLocalStorage.js";

class ObjectTile {
  constructor(object) {
    this.object = object;
    this.element = this.createElement();
  }

  createElement() {
    const objectTile = document.createElement('div');
    objectTile.classList.add('object-tile');

    const tileHeader = document.createElement('div');
    tileHeader.classList.add('tile-header');

    const image = document.createElement('img');
    image.src = this.object.image;
    image.alt = this.object.title;

    const updateFavouritesIcon = document.createElement('img');
    updateFavouritesIcon.src = 'assets/icons/favicon-false.png';
    updateFavouritesIcon.classList.add('favourites-icon');
    updateFavouritesIcon.addEventListener('click', () => this.updateFavorites());
    this.updateFavoritesDisplay(updateFavouritesIcon);

    tileHeader.append(image);
    
    const favouritesDiv = document.createElement('div');
    favouritesDiv.classList.add('favourites-div');
    favouritesDiv.append(updateFavouritesIcon);
    
    tileHeader.append(favouritesDiv);

    const tileCenterButtons = document.createElement('div');
    tileCenterButtons.classList.add('tile-center-buttons');

    const updateFavoritesButton = document.createElement('button');
    updateFavoritesButton.addEventListener('click', () => this.updateFavorites());
    this.updateFavoritesDisplay(updateFavoritesButton);

    tileCenterButtons.append(updateFavoritesButton);

    const tileTitle = document.createElement('div');
    tileTitle.classList.add('tile-title');

    const title = document.createElement('h3');
    title.textContent = this.object.title;

    tileTitle.append(title);

    const tileDescription = document.createElement('div');
    tileDescription.classList.add('tile-description');

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

    tileDescription.append(expandButton, expandedText);

    objectTile.append(tileHeader, tileCenterButtons, tileTitle, tileDescription);

    return objectTile;
  }

  updateFavorites() {
    if (isInLocalStorage(this.object, "favorites")) {
      removeFromLocalStorage(this.object, "favorites");
    } else {
      addToLocalStorage(this.object, "favorites");
    }
    this.updateFavoritesDisplay(this.element.querySelector('button'));
    this.updateFavoritesDisplay(this.element.querySelector('div.favourites-div img'));
    window.dispatchEvent(new Event('localStorageUpdated'));
  }

  updateFavoritesDisplay(element) {
    if (isInLocalStorage(this.object, "favorites")) {
      element.classList.add('remove-from-favorites');
      element.classList.remove('add-to-favorites');
      if (element.tagName === 'BUTTON') {
        element.textContent = 'Remove from Favourites';
      } else {
        element.src = '../assets/icons/favicon-true.png';
      }
    } else {
      element.classList.add('add-to-favorites');
      element.classList.remove('remove-from-favorites');
      if (element.tagName === 'BUTTON') {
        element.textContent = 'Add to Favourites';
      } else {
        element.src = '../assets/icons/favicon-false.png';
      }
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