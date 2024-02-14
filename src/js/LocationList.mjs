//purpose is to generate a list of product cards in HTML from an array
//Will feed into the main html page
    //create a template to populate product card details
    //class to handle productListing info.
    //filter out bad id's for tents.  May need a diff way to filter later?

// import { renderListWithTemplate, capitalizeWord} from "./utils.mjs";

//Template literal for product cards on main page
function locationCardTemplate(location){
    return `<li class="product-card">
    <a href="../location_pages/index.html?location=${location.location_id}">
        <img src="${location.photo.images.small.url}" alt="${location.name} "width="${location.photo.images.small.width}" height="${location.photo.images.small.height}">
        <h3 class="location_brand">${location.name}</h3>
        <h2 class="location_state">${location.location_string}</h2>
        <p class="product-card__price">$${product.FinalPrice}</p>
    </a>
    </li>`
}


export default class LocationList{
    constructor(category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = document.querySelector(".product-list");
    }
    async init(){
        const locationList = await this.dataSource.getData(this.category);
        this.renderList(locationList)
    }
    renderList(locationList){
        renderListWithTemplate(locationCardTemplate, this.listElement, locationList, 'afterbegin', false);
    }
    counter(locationList){
        Object.keys(locationList).forEach(key => {
            this.locationCount += 1;
        });
    }
}
