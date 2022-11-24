//fetch weather information from an API 
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather_img');
const currentCond = document.querySelector('#conditions');
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=83686&appid=93a20289158fa33d5ee7312e3af01861';

async function apiGrab() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

apiGrab();

function displayResults(weatherInfo){
    currentTemp.innerHTML = `${weatherInfo.main.temp.toFixed(0)}`;
    const imgURL = `https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
    const weatherDesc = weatherInfo.weather[0].description;

    weatherIcon.setAttribute('scr', imgURL);
    weatherIcon.setAttribute('alt', weatherDesc);
    currentCond.textContent = weatherDesc;
}

let wind = document.getElementById("wind_chill");
let windSpeed= document.getElementById("wind_speed");

if (temp <= 50 && wind > 3.0){
    let wind_chill = 35.74 + 0.6215 * temp - 35.75 * winde+ 0.4275 * temp * winde;
    document.getElementById('wind_chill').textContent = wind_chill;
}else{
    document.getElementById('wind_chill').textContent = "N/A";
}