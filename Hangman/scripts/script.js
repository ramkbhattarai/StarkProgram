let words = ['patience', 'hope', 'wish', 'dreams', 'peace','study', 'fear','passion','fate', 'love', 'hate'];
let index = Math.floor(Math.random() * words.length);
let word = words[index];
console.log(word);
let wordLength = word.length;
let collection = document.getElementById('collection');
let chances = 6;
let strike = 0;
for(let i =0; i < wordLength;i++){
    let ele = document.createElement('li');
    collection.append(ele);
    ele.innerHTML = "_ "
}
let input = document.getElementById('input');
let check = '';
input.addEventListener('change', () =>{
    
    let char = input.value;
    check += char;
    input.value = "";
    if(word.includes(char)){
        for(let i = 0; i < word.length; i++){
            if(word[i] === char){
                collection.children[i].innerHTML = char;
            }
        }
    }else{
        let li = document.createElement('li');
        document.getElementById('guessed').append(li);
        li.innerHTML = char;
        document.getElementById('length').innerHTML = --chances;
        document.getElementById('image').src = `./images/strike-${++strike}.png`;
    }

    if(check === word){
        let h = document.createElement('h2');
        document.getElementById('guessed').append(h);
        h.innerHTML = "Congraulation You Won";
    }
    if(!chances){
        let h = document.createElement('h2');
        document.getElementById('guessed').append(h);
        h.innerHTML ="Game Over";
    }
    
});
