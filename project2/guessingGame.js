let guess = document.getElementById("guess");
    let box1 = `<div width="200px" border="1px solid black"><input id="check" type="number" border="1px solid black" placeholder="Type the number"></input></div>`;
    let item = document.getElementById('guessing').appendChild(box1);
    let num = Math.floor(Math.random() * 100);
    let value = document.getElementById('check').value;
    // let value = parseInt(val);
    console.log(num);
    let chance = 5;
    while(chance){
        if(num < value){
            alert("Too High");
        }else if(num > value){
            alert("Too Low");
        }else{
            alert("Congratulations You guessed it");
            break;
        };
         document.getElementById('guessing').appendChild(box1);
        // let num = Math.floor(Math.random() * 100);
         value = document.getElementById('check').value;
        chance--;
        guess.innerHTML = chance;
        guess.style.color = 'red';
    };
    if(!chance){

        alert("Sorry your chances are over.")
        alert('The number was '+ num)
    }
