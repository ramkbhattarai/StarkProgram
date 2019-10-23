
// document.addEventListener('DOMContentLoaded', () =>{
    
    
// });

let farenheit = document.getElementById('farenheit');
farenheit.addEventListener("change", () => {
    let x = farenheit.value;
    let ans = changeFtC(x);
    document.getElementById("celsius").value = ans;
});

function changeFtC(n){
    return Math.floor((5 * (n - 32)) / 9);
}

let celsius = document.getElementById('celsius');
celsius.addEventListener("change", () => {
    let x = celsius.value;
    let ans = changeCTF(x);
    farenheit.value = ans;
});

function changeCTF(n) {
    return Math.floor(( 9 * n / 5) + 32);
}

// this is comment

let cups = document.getElementById('cups');
cups.addEventListener("change", () => {
    let x = cups.value;
    let ans = changeCTT(x);
    document.getElementById("teaspoons").value = ans;
});

function changeCTT(n) {
    return Math.floor(n*48);
}

let teaspoons = document.getElementById('teaspoons');
teaspoons.addEventListener("change", () => {
    let x = teaspoons.value;
    let ans = changeTTC(x);
    cups.value = ans;
});

function changeTTC(n) {
    return Math.floor(n/48);
}


// this is comment
let leagues = document.getElementById('leagues');
leagues.addEventListener("change", () => {
    let x = leagues.value;
    let ans = changeLtF(x);
    document.getElementById("forlongs").value = ans;
});

function changeLtF(n) {
    return Math.floor(n * 27.6187);
}

let forlongs = document.getElementById('forlongs');
forlongs.addEventListener("change", () => {
    let x = forlongs.value;
    let ans = changeFtL(x);
    leagues.value = ans;
});

function changeFtL(n) {
    return Math.floor(n / 27.6187);
}

 