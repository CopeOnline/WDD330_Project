import { getLocalStorage } from './utils.mjs';


function galleryTemplate(photo) {
  const newGallery = `<section class='photo-card' id='${photo.id}'>
    <img
      src='${photo.images.medium.url}'
      alt='${photo.caption}'
    />
  <h4>${photo.caption}</h4>
</section>`;

  return newGallery;
}


export default class Gallery {
  constructor(id, dataSource){
    this.id = id;
    this.photo = {};
    this.dataSource = dataSource;
}
  async init() {
    const element = this.dataSource.results.data
    element.forEach(element => {
      this.photo = element
      this.renderGalleryDetails("main");
        })
    };

  renderGalleryDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(
        "afterBegin",
        galleryTemplate(this.photo))
  } 
  }


