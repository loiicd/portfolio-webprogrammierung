/**
 * @module js/components/ObjectTile.js
 */

import { isInLocalStorage, removeFromLocalStorage, addToLocalStorage } from "./updateLocalStorage.js";


/**
 * @description Class which represents a container of ObjectTiles.
 * @constructor id of html-div to display the container in.
 * @function render() takes a array of Objects which will be displayed.
 */
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

class ObjectTile {
  constructor(object) {
    this.object = object;
    this.element = this.createElement();
  }

  createElement() {
    const objectTile = document.createElement('div');
    objectTile.classList.add('object-tile');
    objectTile.classList.add('card');
    objectTile.classList.add('hover');

    const tileHeader = document.createElement('div');
    tileHeader.classList.add('tile-header');

    const image = document.createElement('img');
    image.src = this.object.image;
    image.alt = this.object.title;

    const updateFavouritesIcon = document.createElement('img');
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
    
    const updateOrderButton = document.createElement('button');
    updateOrderButton.addEventListener('click', () => this.updateOrder());
    this.updateOrderDisplay(updateOrderButton);
    tileCenterButtons.append(updateOrderButton);

    const tileTitle = document.createElement('div');
    tileTitle.classList.add('tile-title');

    const title = document.createElement('h3');
    title.textContent = this.object.title;

    tileTitle.append(title);

    const tileDescription = document.createElement('div');
    tileDescription.classList.add('tile-description');

    const expandButton = document.createElement('a');
    expandButton.textContent = 'Description ...';
    expandButton.classList.add('tile-description-button');
    expandButton.href = '##';
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
    this.updateFavoritesDisplay(this.element.querySelector('div.favourites-div img'));
    window.dispatchEvent(new Event('localStorageUpdated'));
  }

  updateFavoritesDisplay(element) {
    if (isInLocalStorage(this.object, "favorites")) {
      element.src = '../assets/icons/favicon-true.png';
    } else {
      element.src = '../assets/icons/favicon-false.png';
    }
  }

  updateOrder() {
    if (isInLocalStorage(this.object, "orders")) {
      removeFromLocalStorage(this.object, "orders");
    } else {
      addToLocalStorage(this.object, "orders");
    }
    this.updateOrderDisplay(this.element.querySelector('button'));
    this.updateOrderDisplay(this.element.querySelector('div.favourites-div img'));
    window.dispatchEvent(new Event('localStorageUpdated'));
  }

  updateOrderDisplay(element) {
    if (isInLocalStorage(this.object, "orders")) {
      element.classList.add('remove-from-orders');
      element.classList.remove('add-to-orders');
      if (element.tagName === 'BUTTON') {
        element.textContent = 'Remove from Order';
      }
    } else {
      element.classList.add('add-to-orders');
      element.classList.remove('remove-from-orders');
      if (element.tagName === 'BUTTON') {
        element.textContent = 'Add to Order';
      }
    }
  }

  toggleExpand(objectTile, expandButton) {
    const paragraph = objectTile.querySelector('p');
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      expandButton.textContent = 'Hide';
    } else {
      paragraph.style.display = "none";
      expandButton.textContent = 'Description ...';
    }
  }

  render(container) {
    container.append(this.element);
  }
}

export { ObjectTile, ObjectContainer };