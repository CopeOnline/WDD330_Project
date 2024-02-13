//Feeds into product.js which feeds the product_pages/index.html
//contain code to dynamically produce the product details
//also contains the addToCart method



//template literal to populate the detail information for the given product
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

//ProductDetail class.  Data is dynamically pulled from json file based on id
//dataSource input determine the path to the json file.  So this decides what category (tent vs backpack, etc)
//initialization actually grabs the data for the id, then calls the renderProductDetails and contains the event listener for the addToCart
export default class ProductDetail {
    constructor(location_id, dataSource){
        this.location_id = location_id;
        this.location = {};
        this.dataSource = dataSource;
    }
    async init() {
        // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
        for(const element of this.dataSource.results.data) {
          console.log(element, 'elem')
          this.location = element.result_object
        
          console.log(this.location.name, 'this loca')
        // once we have the product details we can render out the HTML
        this.renderProductDetails("main");
        // once the HTML is rendered we can add a listener to Add to Cart button
        // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
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