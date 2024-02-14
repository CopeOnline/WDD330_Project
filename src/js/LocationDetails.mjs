

function locationDetailsTemplate(location) {
    return `<section class="location-detail"> <h3>${location.location_string}</h3>
      <h2 class="divider">${location.name}</h2>
      <img
        class="divider"
        src="${location.photo.images.large.url}" width="${location.photo.images.large.width}" height="${location.photo.images.large.height}"
        alt="${location.name}"
      />
      <p class="latitude">Latitude: ${location.latitude}</p>
      <p class="latitude">Longitude: ${location.longitude}</p>
      <p class="timezone">Timezone: ${location.timezone}</p>
      <p class="location__description">
      ${location.description}
      </p>
      <div class="location-detail__add">
        <button id="addToFavs" data-id="${location.location_id}">Add to Favorites</button>
      </div></section>`;
}

export default class LocationDetail {
    constructor(location_id, dataSource){
        this.location_id = location_id;
        this.location = {};
        this.dataSource = dataSource;
    }
    async init() {
        for(const element of this.dataSource.results.data) {
          console.log(element, 'elem')
          this.location = element.result_object
        
          console.log(this.location.name, 'this loca')
        this.renderProductDetails("main");

        document.getElementById('addToFavs')
          .addEventListener('click', this.addToFavs);
        }
      };
    //simply adds the product info to the local storage.
    // addToCart(){
    //         setLocalStorage('so-cart', this.product);
    //         //added here to update cart counter each time you add an item
    //         renderCartCount();
    //         removeAllAlerts('add-to-cart-message');
    //         alertMessage(`${this.product.NameWithoutBrand} Added To Cart`, true, 'add-to-cart-message')
    //         setTimeout(() => {removeAllAlerts('add-to-cart-message', true)}, 2500);
    //         startAnimateCartIcon();
    //         setTimeout(() => {stopAnimateCartIcon()}, 500);
    // }
    //populates the details on the product page using the template
    //selector determines what element to attach the details to
    renderProductDetails(selector){
        //method to generate HTML to display our product
        const element = document.querySelector(selector);
        element.insertAdjacentHTML(
            "afterBegin",
            locationDetailsTemplate(this.location)
        )
    } 

}