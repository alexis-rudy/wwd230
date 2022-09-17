const year1 = document.querySelector('#yearspan');
try{
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    year1.innerHTML = new Date().toLocaleDateString('en-US', options);}
    catch (e){
        alert = "error"
    }

