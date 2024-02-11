import { loadSamples } from "./body";
import { SAMPLES } from "./const.mjs";




export function prepareDoc(){
    document.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 'complete'){
            return 
        }
    })
}
export function submit() {
    document.addEventListener('submit', (e) => {
        e.preventDefault();
        // console.log(document.querySelector('#search').value, 'value');
        SAMPLES.push(`q: ${document.querySelector('#search').value}`)
        document.querySelector('#search').value = '';
        loadSamples()
    });
}
export function dropMenuEvents(){
    const dp = document.querySelectorAll('.dropdown-content > a');
    let category;
    dp.forEach(function(element) { element.addEventListener("click", (e) => {
        SAMPLES.push('key:', element.name)
    });
    });
    const dropMenu = document.querySelector('button.dropbtn');
    dropMenu.addEventListener('click', (e) => {
        document.querySelector('.dropdown-content').classList.toggle('show');
    });
    return category;
};
    

