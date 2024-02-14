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


//Product List class used on main page to list out locations from json, 
//calls renderList to actually display the info from the ProductList class using the template
//filter is used to manually filter out broken locations in the json file.  
//TODO - I'd like to move the filter IDs into a JSON and pull from that dynamically.  So an admin could just keep the filter.json file updated on what products they don't want displayed.  
export default class LocationList{
    constructor(category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = document.querySelector(".product-list");
    }
    async init(){
        //const LocationList = await this.dataSource.getData(this.category);
        this.renderList(LocationList)
    }
    renderList(LocationList){
        //filter out bad locations before sending to render

    renderListWithTemplate(locationCardTemplate, this.listElement, LocationList, 'afterbegin', false);
    }
    //counts number of items in the list for the breadcrumb. 
    counter(locationList){
        Object.keys(LocationList).forEach(key => {
            this.locationCount += 1;
        });
    }
}
