//set current date
const date = new Date();
const full_date = new Intel.DateTimeFormat('en-Us', {dateStyle: 'full'}).format(date);
document.querySelector('#currentDate').textContent = full_date;

//set last modified
document.querySelector('#lastmod').innerHTML = document.lastModified;

// toggle menu in small view
function toggleMenu(){
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamBtn').classList.toggle('open');

}
const x = document.getElementById('hamBtn');
x.onclick = toggleMenu;
