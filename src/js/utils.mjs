
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  let existingData = getLocalStorage(key) || [];
  existingData.push(data);
  localStorage.setItem(key, JSON.stringify(existingData));
}

export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
    console.log('listener loaded')
  });
  qs(selector).addEventListener("click", callback);
  console.log('listener loaded')
}

export function getParams(param){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const location = urlParams.get(param)
  return location;
}

export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear=false){
  const htmlStrings = list.map(templateFn);
  if (clear){
    parentElement.innerHTML = '';
  }
  parentElement.insertAdjacentHTML(position, htmlStrings.join(''));
}

export function renderWithTemplate(templateFn, parentElement, data, callback, position = "afterbegin"){
  if(callback) {
    callback(data)
  }
  parentElement.insertAdjacentHTML(position, templateFn);
}

export async function loadHeaderFooter(){
  const header = document.getElementById('main-header');
  const footer = document.getElementById('main-footer');
  const headerTemplate = await loadTemplate('../partials/header.html');
  const footerTemplate = await loadTemplate('../partials/footer.html');
  renderWithTemplate(headerTemplate, header);
  renderWithTemplate(footerTemplate, footer);
}

export async function loadTemplate(path) {
  const response = await fetch(path);
  const template = await response.text();
  return template
}

export function showElement(element) {
  element.classList.add('display');
}

export function hideElement(element) {
  element.classList.remove('display');
}

export function stopAnimateCartIcon() {
  const cart = document.querySelector('.cart');
  cart.classList.remove('animate');
}

