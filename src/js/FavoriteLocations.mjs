import { getLocalStorage } from './utils.mjs';


function favsItemTemplate(location) {
  const newLocation = `<section class='cart-card divider' id='${location.location_id}'>
  <button class='close-btn' data-id='${location.location_id}'>X</button>
  <a href='#' class='cart-card__image'>
    <img
      src='${location.photo.images.medium.url}'
      alt='${location.name}'
    />
  </a>
  <a href='#'>
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

