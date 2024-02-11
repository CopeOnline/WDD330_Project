import { NUMS } from "./const.mjs";

// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  //get existing Data from localStorage.  If it doesn't exist yet, make an empty array
  let existingData = getLocalStorage(key) || [];
  //append the new data to the existingData
  existingData.push(data);
  //save to localStorage
  localStorage.setItem(key, JSON.stringify(existingData));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
    console.log('listener loaded')
  });
  qs(selector).addEventListener("click", callback);
  console.log('listener loaded')
}
/* getParams */
export function getParams(param){
  console.log(param)
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const location = urlParams.get(param)
  return location;
}

/* renderListWithTemplate */
//used by ProductList
// export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear=false){
//   const htmlStrings = list.map(templateFn);
//   //use clear to wipe the element before loading with the template
//   if (clear){
//     parentElement.innerHTML = '';
//   }
//   parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
// }

//Render Template
export function renderWithTemplate(templateFn, parentElement, data, callback, position = "afterbegin"){
  //No idea what this is for...
  if(callback) {
    callback(data)
  }
  //insert the template data at the beginning of the element.
  parentElement.insertAdjacentHTML(position, templateFn);
}

/* Load header and footer */
export async function loadHeaderFooter(){
  //grab header/footer elements
  const header = document.getElementById('main-header');
  const footer = document.getElementById('main-footer');
  //grab the template data
  const headerTemplate = await loadTemplate('../partials/header.html');
  const footerTemplate = await loadTemplate('../partials/footer.html');
  renderWithTemplate(headerTemplate, header);
  renderWithTemplate(footerTemplate, footer);
}
//fetch the template info
//note this is generic so could be reused if needed.
export async function loadTemplate(path) {
  const response = await fetch(path);
  const template = await response.text();
  return template
}


//Hide element
//Toggle visibility of the cart counter depending on if something is in it
//default is hidden
export function showElement(element) {
  element.classList.add('visible');
  element.classList.remove('hidden');
}
// export function hideElement(element) {
//   element.classList.add('hidden');
//   element.classList.remove('visible');
// }
export function getCartCount() {
  const cart = getLocalStorage('so-cart');
  let cartCount = 0;
  if (cart !== null && cart !== undefined) {
    cartCount = cart.length;
  }
  return cartCount;
}


export function stopAnimateCartIcon() {
  const cart = document.querySelector('.cart');
  cart.classList.remove('animate');
}

export function sampleIds(){
  let count = 0;
  while (count < 4 ){
    NUMS.push(`location_id: '${randomNum()}'`)
    count++
  }
}


export function randomNum() {
  const min = 2
  const max = 10000000
  return Math.floor(Math.random() * (max - min) + min);
}