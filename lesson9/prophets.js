const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        const prophets = jsonObject["prophets"];
        prophets.forEach(prophet => {
            displayProphets(prophet)
        });;
    })

function displayProphets(prophet){
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let birthplace = document.createElement('h3');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    h3.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`
    // Build the image attributes by using the setAttribute method fo the src, alt and loading attribute values.
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the sections(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(h3);
    card.appendChild(birthplace);

    // Add/append the existing HTML div with the ard class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}