import { getLocalStorage } from './utils.mjs';


function galleryTemplate(photo) {
  const newGallery = `<section class='photo-card' id='${photo.id}'>
    <img class="xtraPhotos"
      src='${photo.images.large.url}'
      alt='${photo.caption}' loading='lazy'
    />
  <h4 class='caption'>${photo.caption}</h4>
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


