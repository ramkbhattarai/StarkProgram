
// document.addEventListener('DOMContentLoaded', () =>{
    
    
// });

let farenheit = document.getElementById('farenheit');
farenheit.addEventListener("change", () => {
     prompt("Please enter number.")
    let x = farenheit.value;
    let ans = changeFtC(x);
    document.getElementById("celsius").value = ans;
    alert("Wait for the answer a moment.")
});

function changeFtC(n){
    return Math.floor((5 * (n - 32)) / 9);
}

let celsius = document.getElementById('celsius');
celsius.addEventListener("change", () => {
    prompt("Please enter number.")
    let x = celsius.value;
    let ans = changeCTF(x);
    farenheit.value = ans;
    alert("Wait for the answer a moment.")

});

function changeCTF(n) {
    return Math.floor(( 9 * n / 5) + 32);
}

// this is comment

let cups = document.getElementById('cups');
cups.addEventListener("change", () => {
    prompt("Please enter number.")
    let x = cups.value;
    let ans = changeCTT(x);
    document.getElementById("teaspoons").value = ans;
    alert("Wait for the answer a moment.")

});

function changeCTT(n) {
    return n*48;
}

let teaspoons = document.getElementById('teaspoons');
teaspoons.addEventListener("change", () => {
    prompt("Please enter number.")
    let x = teaspoons.value;
    let ans = changeTTC(x);
    cups.value = ans;
    alert("Wait forthe answer a moment.")

});

function changeTTC(n) {
    return n/48;
}


// this is comment
let leagues = document.getElementById('leagues');
leagues.addEventListener("change", () => {
    prompt("Please enter number.")
    let x = leagues.value;
    let ans = changeLtF(x);
    document.getElementById("forlongs").value = ans;
    alert("Wait for the answer a moment.")

});

function changeLtF(n) {
    return n * 27.6187;
}

let forlongs = document.getElementById('forlongs');
forlongs.addEventListener("change", () => {
    prompt("Please enter number.")
    let x = forlongs.value;
    let ans = changeFtL(x);
    leagues.value = ans;
    alert("Wait for the answer a moment.")

});

function changeFtL(n) {
    return n / 27.6187;
}

 