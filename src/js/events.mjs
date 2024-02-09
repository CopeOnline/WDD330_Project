

export function prepareDoc(){
    document.addEventListener("readystatechange", (e) => {
        if (e.target.readyState === 'complete'){
            console.log('readystate: complete')
            return 
        }
    })
}
export function submit() {
    document.addEventListener('submit', (e) => {
        e.preventDefault(show(e));
        console.log(document.querySelector('#search').value, 'value');
        document.querySelector('#search').value = '';
    });
}
export function dropMenuEvents(){
    const dp = document.querySelectorAll('.dropdown-content > a');
    console.log(dp)
    let category;
    dp.forEach(function(element) { element.addEventListener("click", (e) => {
        console.log(element.name, 'value');
         category = element.name;
    });
    });
    const dropMenu = document.querySelector('button.dropbtn');
    dropMenu.addEventListener('click', (e) => {
        document.querySelector('.dropdown-content').classList.toggle('show');
    });
    return category;
};
    




function show(e) {
    console.log(e, 'prevent');
    //console.log(e.value, "target 1");
}