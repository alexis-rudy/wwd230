//get current date
const day = new Date();

//months for current date format
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednsday',
'Thursday', 'Friday', 'Saturday']
const months = ['January', 'Feburary', 'March', 'April',
'May', 'June', 'July', 'Augst', 'September', 'October',
'November', 'December'];

const today = days[day.getDay()];
const date = day.getDay();
const month = months[day.getMonth()];
const year = day.getFullYear();
document.getElementById('currentDate').textContent = `${today},
 ${date} ${month} ${year}`;

//create year
document.getElementById('yearspan').textContent = year;

//create last modified
const lastMod = document.lastModified;
document.getElementById('lastmod').textContent = lastMod;
