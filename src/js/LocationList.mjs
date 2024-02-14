import { renderListWithTemplate } from "./utils.mjs";

function locationCardTemplate(location){
    return `<li class="location-card">
    <a href="../LocationDetails/index.html?location_id=${location.result_object.location_id}">
        <img src="${location.result_object.photo.images.small.url}" alt="${location.name} "width="${location.result_object.photo.images.small.width}" height="${location.result_object.photo.images.small.height}">
        <h3 class="location_brand">${location.result_object.name}</h3>
        <h2 class="location_state">${location.result_object.parent_display_name}</h2>
    </a>
    </li>`
}


export default class LocationList{
    constructor(category, dataSource){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = document.querySelector(".location-list");
    }
    async init() {
        console.log(this.dataSource)
        const element = this.dataSource.results.data
        this.location = element.result_object
        this.renderList(element)
    }
    renderList(element){
        renderListWithTemplate(locationCardTemplate, this.listElement, element, 'afterbegin', false);
    }
    counter(element){
        Object.keys(element).forEach(key => {
            this.locationCount += 1;
        });
    }
}
