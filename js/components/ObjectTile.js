/**
 * @module js/components/ObjectTile.js
 */

import { isInLocalStorage, removeFromLocalStorage, addToLocalStorage } from "./updateLocalStorage.js";

/**
 * Class representing a Container for object tiles.
 * @property {HTMLElement} container - The HTML element for the container specified by the given id.
 */
class ObjectContainer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  /**
   * Render the given objects in the container.
   * @param {Array} objects - The objects to render.
   */
  render(objects) {
    this.container.innerHTML = '';
    objects.forEach(object => {
      const tile = new ObjectTile(object);
      tile.render(this.container);
    });
  }
}

/**
 * Class representing a tile for an object.
 * @property {Object} object - The object to display.
 */
class ObjectTile {
  constructor(object) {
    this.object = object;
    this.element = this.createElement();
  }

  /**
   * Render the tile in the given container.
   * @param {HTMLElement} container - The HTML element for the container.
  */
  render(container) {
    container.append(this.element);
  }

  /**
   * Create the HTML element for the tile with all its children: 
   * tile header with image, tile center button, tile title, tile description
   * @return {HTMLElement} The created element.
   */
  createElement() {
    const objectTile = document.createElement('div');
    objectTile.classList.add('object-tile', 'card', 'hover');

    const tileHeader = this.createTileHeader();
    const tileCenterButtons = this.createTileCenterButtons();
    const tileTitle = this.createTileTitle();
    const tileDescription = this.createTileDescription();

    objectTile.append(tileHeader, tileCenterButtons, tileTitle, tileDescription);

    return objectTile;
  }

  createTileHeader() {
    const tileHeader = document.createElement('div');
    tileHeader.classList.add('tile-header');
    const image = this.createImage();
    const updateFavouritesIcon = this.createIcon('favourites-icon', () => this.updateFavorites());
    this.updateFavoritesDisplay(updateFavouritesIcon);
    tileHeader.append(image, this.createDiv('favourites-div', updateFavouritesIcon));
    return tileHeader;
  }

  createImage() {
    const image = document.createElement('img');
    image.src = this.object.image;
    image.alt = this.object.title;
    return image;
  }

  createTileCenterButtons() {
    const tileCenterButtons = this.createDiv('tile-center-buttons');
    const updateOrderButton = this.createButton(() => this.updateOrder());
    this.updateOrderDisplay(updateOrderButton);
    tileCenterButtons.append(updateOrderButton);
    return tileCenterButtons;
  }

  createTileTitle() {
    const tileTitle = this.createDiv('tile-title');
    const title = document.createElement('h3');
    title.textContent = this.object.title;
    tileTitle.append(title);
    return tileTitle;
  }

  createTileDescription() {
    const tileDescription = this.createDiv('tile-description');
    const expandButton = this.createLink('tile-description-button', 'Description ...', '##', (event) => {
      event.preventDefault();
      this.toggleExpand(objectTile, expandButton);
    });
    const expandedText = this.createExpandedText();
    tileDescription.append(expandButton, expandedText);
    return tileDescription;
  }

  createExpandedText() {
    const expandedText = document.createElement('p');
    expandedText.textContent = this.object.description.length > 70 ? this.object.description.substring(0, 67) + '...' : this.object.description;
    expandedText.style.display = 'none';
    return expandedText;
  }

  createIcon(className, clickHandler) {
    const icon = document.createElement('img');
    icon.classList.add(className);
    icon.addEventListener('click', clickHandler);
    return icon;
  }

  createDiv(className, childElement) {
    const div = document.createElement('div');
    div.classList.add(className);
    if (childElement) {
      div.append(childElement);
    }
    return div;
  }

  createButton(clickHandler) {
    const button = document.createElement('button');
    button.addEventListener('click', clickHandler);
    return button;
  }

  createLink(className, text, href, clickHandler) {
    const link = document.createElement('a');
    link.textContent = text;
    link.classList.add(className);
    link.href = href;
    link.addEventListener('click', clickHandler);
    return link;
  }

  /**
   * Update the favorites in the local storage.
   * @fires localStorageUpdated
   **/
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
    element.src = isInLocalStorage(this.object, "favorites") ? '../assets/icons/favicon-true.png' : '../assets/icons/favicon-false.png';
  }

    /**
   * Update the orders in the local storage.
   * @fires localStorageUpdated
   **/
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
    const isObjectInOrders = isInLocalStorage(this.object, "orders");
    element.classList.toggle('remove-from-orders', isObjectInOrders);
    element.classList.toggle('add-to-orders', !isObjectInOrders);
    if (element.tagName === 'BUTTON') {
      element.textContent = isObjectInOrders ? 'Remove from Order' : 'Add to Order';
    }
  }

  toggleExpand(objectTile, expandButton) {
    const paragraph = objectTile.querySelector('p');
    const isParagraphHidden = paragraph.style.display === "none";
    paragraph.style.display = isParagraphHidden ? "block" : "none";
    expandButton.textContent = isParagraphHidden ? 'Hide' : 'Description ...';
  }
}

export { ObjectTile, ObjectContainer };