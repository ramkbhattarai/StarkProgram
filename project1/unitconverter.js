
document.addEventListener('DOMContentLoaded', () =>{

    let temp = document.getElementById('ans');
    console.log("out");
    temp.addEventListener("click", ()=>{
        console.log("in");
        let x = document.getElementById("farenheit").value;
        let ans = changeFtC(x);
        
        document.getElementById("ans").innerHTML = ans;
    });
});

function changeFtC(n){
    return Math.floor((10 * (n - 32)) / 9);
}