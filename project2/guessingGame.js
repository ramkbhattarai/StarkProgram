    let check = document.getElementById('check');
    let chance = 5;
    let num = Math.floor(Math.random() * 100);
    let div = document.getElementById('guessing');
    let ele = document.createElement('h1');
    div.appendChild(ele);
    let span = document.getElementById('guess');
    console.log(num);
    let value;
    check.addEventListener('change', () => {
         value = check.value;
         ele.innerHTML = 'Please Enter the number';
        check.value = "";
         if(value < num){
             ele.innerHTML = 'too low';
         }else if(value > num){
             ele.innerHTML = 'too high';
         }else {
             ele.innerHTML = 'You guessed it';
         }
         chance--;
         span.innerHTML = chance;
         span.style.color = 'red';
        if (!chance) {
            ele.innerHTML = 'The number was ' + num;
        }
    });

    

   