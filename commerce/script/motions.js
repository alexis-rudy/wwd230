//get current date
const day = new Date();

//months and days for current date format
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April',
'May', 'June', 'July', 'August', 'September', 'October',
'November', 'December'];

//setting current date format
const today = days[day.getDay()];
const date = day.getDate();
const month = months[day.getMonth()];
const year = day.getFullYear();
document.getElementById('currentDate').textContent = `${today},
 ${date} ${month} ${year}`;

//create join us message for Mondays and Tuesdays
if (day.getDay() === 1 || day.getDay() === 2){
    document.getElementById('message').textContent = 
    `Come join us for chamber meet and greet Wednesday at 7:00!`
}else{
    document.getElementById('message').hidden() = true;
    
}

//create year
document.getElementById('yearspan').textContent = year;

//create last modified
const lastMod = document.lastModified;
document.getElementById('lastmod').textContent = lastMod;

//responsive dropdown menu
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamBtn').classList.toggle('open');

}
let x = document.getElementById('hamBtn');
x.onclick = toggleMenu;

//change the button to a x when dropdown is open


//times visited
// initialize display elements
const visitsDisplay = document.querySelector("#times");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.



