const container = document.querySelector('.container');
const input = document.querySelector('.form-control');
const btn = document.querySelector('#button-addon2');
const paginationBox = document.querySelector(".pagination-box");
const loading = document.querySelector(".loading");

console.log(container);
console.log(container);


async function main(a = 1) {

    container.innerHTML = '';
    loading.classList.remove('d-none')

    try {
        let url = `https://api.unsplash.com/search/photos?page=${a}&query=${input.value}&client_id=6aRKI784yJ2OTfT5b7kwljlA6Hsm9CCHEO4Kyttz2R0`;

        let data = await fetch(url);
        var result = await data.json();
        console.log(result);
    }
    catch (error) {
        alert('check spelling')
    }
    for (let i = 0; i < 10; i++) {

        container.innerHTML += `<img src="${result.results[i].urls.full}" class="img-fluid rounded m-2 " alt="...">`
    }

    loading.classList.add('d-none')
    paginationBox.classList.remove("d-none");



}
function searchFun() {
    container.innerHTML = '';
    main()
}


function addmore(page) {
    main(page);

}

let page = 4;
function nextpage(e) {
    if (e.innerHTML == `»`) {
        main(page);
        page++;

    }
    else if (e.innerHTML == `«`) {

        page--;
        main(page);

    }

    
}


btn.addEventListener('click', main);
document.addEventListener('keyup', (key) => {
    if (key.key == 'Enter') {
        main();
    }

}
)


