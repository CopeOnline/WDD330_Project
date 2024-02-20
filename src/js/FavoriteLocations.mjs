import { getLocalStorage } from './utils.mjs';


function favsItemTemplate(location) {
  const newLocation = `<section class='favs-card' id='${location.location_id}'>
  <a href="../LocationDetails/index.html?location_id=${location.location_id}" class='favs-card__image'>
  <img
    src='${location.photo.images.medium.url}'
    alt='${location.name}'
  />
  </a>
  <p>Remove</p>
  <button class='close-btn' data-id='${location.location_id}'>X</button>
  
  <a class="card_name" href="../LocationDetails/index.html?location_id=${location.location_id}">
    <h2 class='card__name'>${location.name}</h2>
  </a>
</section>`;

  return newLocation;
}


export default class Favorite {
  constructor(key, parentSelector) {
    this.key = key;
    this.parentSelector = parentSelector;
  }

  renderFavsContents() {
    const favsItems = getLocalStorage(this.key);
    
    if (favsItems != null && favsItems.length>0){
      const htmlItems = favsItems.map((item) => favsItemTemplate(item));
      document.querySelector(this.parentSelector).innerHTML = htmlItems.join('');
    }
  }

  removeFav(id) {
    var favItems = getLocalStorage('Id');
    if (favItems) {
      const itemIndex = favItems.find((item) => item.Id === id);
      if (itemIndex !== -1) {
        favItems.splice(itemIndex, 1);
        localStorage.setItem('Id', JSON.stringify(favItems)); 
    }
    const itemToDelete = document.getElementById(id); 
    itemToDelete.remove(); 
  }
}
}

