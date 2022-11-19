let temp = 28;
let wind = 3.0;
let winde = wind ** 0.16

if (temp <= 50 && wind > 3.0){
    let wind_chill = 35.74 + 0.6215 * temp - 35.75 * winde+ 0.4275 * temp * winde;
    document.getElementById('wind_chill').textContent = wind_chill;
}else{
    document.getElementById('wind_chill').textContent = "N/A";
}