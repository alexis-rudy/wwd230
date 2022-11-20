const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Nampa&appid=93a20289158fa33d5ee7312e3af01861';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); 
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(weatherdata) {
    currentTemp.innerHTML = `${weatherdata.main.temp.toFixed(0)}`;
    const imgURL = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    const weatherDesc = weatherdata.weather[0].description;

    weatherIcon.setAttribute('src', imgURL);
    weatherIcon.setAttribute('alt', weatherDesc);
    captionDesc.textContent = weatherDesc;
}