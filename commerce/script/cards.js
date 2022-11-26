const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");}

const url = 'data.json';
const cards = document.querySelector('.buscards');

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        const companies = jsonObject['companies'];
        companies.forEach(business => {
         displayCards(business)   
        });;
    })

function displayCards(business){
    let card = document.createElement('section');
    let picture = document.createElement('img');
    let address = document.createElement('h3');
    let number = document.createElement('h3');
    let website = document.createElement('h3');

    // Picture information
    picture.setAttribute('src', business.icon);
    picture.setAttribute('alt', `${business.name}'s logo`);
    picture.setAttribute('loading', 'lazy');

    // Address information
    address.textContent = `${business.address}`;

    // Number
    number.textContent = `${business.phone}`;

    // Website
    website.textContent = `${business.site}`

    card.appendChild(picture);
    card.appendChild(address);
    card.appendChild(number);
    card.appendChild(website);

    document.querySelector('div.buscards').appendChild(card);
}