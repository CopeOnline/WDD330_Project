import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function locationDetailsTemplate(location) {
    return `<section class="location-detail"> <h3>${location.location_string}</h3>
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
        <a href='../favorites/index.html'>
        <button id="addToFavs" data-id="${location.location_id}">Add to Favorites</button>
        </a>
      </div></section>`;
}

export default class LocationDetail {
    constructor(location_id, dataSource){
        this.location_id = location_id;
        this.location = {};
        this.dataSource = dataSource;
    }
    async init() {
        const element = this.dataSource.results.data
        element.forEach(element => {
          if (this.location_id === element.result_object.location_id) {
               this.location = element.result_object
                this.renderLocationDetails("main");
            }
          });
        };
          
    addToFavs(location){
          const con = getLocalStorage('Id')
          console.log(location, 'loca')
          let check = false;
          if (con != null && con.length != 0){ 
            con.forEach(element => {
              console.log(element.location_id)
              if (element.location_id === location) {
                check = true;
              }
            });
          }else{
            console.log(con.location_id)
            console.log(check)
            check = false;
          } 
        if (check === false) {
        setLocalStorage('Id', this.location);
        }
        };
    

    renderLocationDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML(
            "afterBegin",
            locationDetailsTemplate(this.location))
      } 
    }