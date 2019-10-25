let words = ['patience', 'hope', 'wish', 'dreams', 'peace','study', 'fear','passion','fate', 'love', 'hate'];
let index = Math.floor(Math.random() * words.length);
let word = words[index];
let wordLength = word.length;
let collection = document.getElementById('collection');
let ele = document.createElement('span');
collection.append(ele);
for(let i =0; i < wordLength;i++){
    
}