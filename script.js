const container = document.querySelector('.container');
const input = document.querySelector('.form-control');
const btn = document.querySelector('#button-addon2');
const addmoreBtn = document.querySelector('#addmoreBtn');


async function main(a=1) {

    let url = `https://api.unsplash.com/search/photos?page=${a}&query=${input.value}&client_id=6aRKI784yJ2OTfT5b7kwljlA6Hsm9CCHEO4Kyttz2R0`;
    
    let data = await fetch(url);
    let result = await data.json();
    console.log(result);

    for(let i = 0; i < 10; i++){
    
        container.innerHTML += `<div class="text-center">
        <img src="${result.results[i].urls.full}" class="rounded box" alt="...">
      </div>`
    }

    addmoreBtn.style.display = 'block';

}
function searchFun() {
    container.innerHTML = '';
    main()
}

let page = 2;
function addmore() {
    main(page);
    page++;
}


btn.addEventListener('click',searchFun);
addmoreBtn.addEventListener('click',addmore)
document.addEventListener('keyup',(key) => {
    if(key.key == 'Enter'){
        searchFun();
    }
  
}
)


