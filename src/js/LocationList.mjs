import { renderListWithTemplate, getLocalStorage } from "./utils.mjs";

function locationCardTemplate(location){
    return `<section class="location-card">
    <a href="../LocationDetails/index.html?location_id=${location.result_object.location_id}">
        <img src="${location.result_object.photo.images.small.url}" alt="${location.result_object.name}" >
        <h3 class="location_name">${location.result_object.name}</h3>
        <h4 class="location_state">${location.result_object.parent_display_name}</h4>
    </a> 
    </section>`
}

function locationErrorTemplate(location){
    return `<section class="error-card">
    <a href="../index.html">
        <h4 class="error_name">Whoops, something went wrong!</h4>
        <h4 class="error_results">- - - - - - - - - -</h4>
        <h4 class="error_state">Click Here to Try Again</h4>
    </a>
    </section>`
}


export default class LocationList{
    constructor(category){
        this.category = category;
        this.dataSource = getLocalStorage('search');
        this.listElement = document.querySelector(".location-list");

        this.template = locationCardTemplate;
    }
    async init() {
        if (this.dataSource === null ) {
            this.element = [{category: 0}]
            this.template = locationErrorTemplate;
        }else {
            this.element = this.dataSource.results.data;
            this.location = this.element.result_object;
        }
        if (Object.keys(this.element).length === 0){
            this.element = [{category: 0}]
            this.template = locationErrorTemplate;
        };
        this.renderList(this.template, this.element)
        }
    renderList(template, element){
        renderListWithTemplate(template, this.listElement, element, 'afterbegin', false);
    }
};

