try {
    const newyear = new Date().getFullYear();
    justyear = newyear;
    let printyear = document.querySelector('#yearspan');
    printyear.innerHTML = justyear;

}
catch (e) {
    alert = "error"
}

const oLastModif = new Date(document.lastModified);
const mod = document.getElementById('lastmod');
mod.innerHTML = oLastModif;