
export function createObjectTile(object, container) {
  const objectTile = document.createElement('div');
  objectTile.classList.add('object-tile');

  const image = document.createElement('img');
  image.src = object.image;
  image.alt = object.title;

  const title = document.createElement('h3');
  title.textContent = object.title;

  const addToFavoritesButton = document.createElement('button');
  addToFavoritesButton.textContent = 'Add to Favorites';
  addToFavoritesButton.addEventListener('click', () => addToFavorites(object));

  const expandButton = document.createElement('a');
  expandButton.textContent = 'See Description';
  expandButton.href = '#';
  expandButton.addEventListener('click', (event) => {
    event.preventDefault();
    toggleExpand(objectTile, object.description, expandButton);
  });

  const expandedText = document.createElement('p');
  expandedText.textContent = object.description.length > 70 ? object.description.substring(0, 67) + '...' : object.description;
  expandedText.style.display = 'none'; // Add this line

  objectTile.appendChild(image);
  objectTile.appendChild(title);
  objectTile.appendChild(addToFavoritesButton);
  objectTile.appendChild(expandButton);
  objectTile.appendChild(expandedText);

  container.appendChild(objectTile);
}


export function addToFavorites(object) {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(object);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  
  console.log('Added to favorites:', object);
}

export function toggleExpand(objectTile, description, expandButton) {
  const paragraph = objectTile.querySelector('p');
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
    expandButton.style.display = "none";
  } else {
    paragraph.style.display = "none";
    expandButton.style.display = "block";
  }
}

export function renderObjects(objects, containerId) {
  const containerElement = document.getElementById(containerId);
  if (containerElement) {
    containerElement.innerHTML = ''; // Clear the container
    objects.forEach(object => createObjectTile(object, containerElement));
  } else {
    console.error('Cannot clear container: Element does not exist or is readonly');
  }
}