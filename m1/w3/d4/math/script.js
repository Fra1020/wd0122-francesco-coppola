let x = 1;

console.log(x);

x++; //incremento di 1 il valore della variabile numerica
x = x + 1 //sovrascrivo il valore di x con il suo valore +1
x += 1 //aggiungo 1 al valore della variabile

x-- //decremeno di 1
x = x - 1 
x -= 1 

console.log(x);

/* arrotondare*/
let n1 = 5.3
let n2 = 5.5
let n3 = 5.8
console.log(Math.round(n1)); // arrotonda per eccesso
console.log(Math.round(n2)); //arrotonda per eccesso
console.log(Math.round(n3)); // arrotonda per difetto

console.log(Math.ceil(n1)) //arrotonda per eccesso
console.log(Math.floor(n1)) //arrotonda per difetto


let ringraziamenti = ['grazie','Grazie Mille','Tante grazie','wow grazie']
let punteggiatura = ['','!','!!']
let smile = ['',':D',':)']

function generaRandom(arr){
    return Math.floor(Math.random() * arr.length) 
}

let rand1 = generaRandom(ringraziamenti)
let rand2 = generaRandom(punteggiatura)
let rand3 = generaRandom(smile)



let frase = ringraziamenti[rand1] + ' ' + punteggiatura[rand2] + ' ' + smile[rand3];

console.log(frase);



let target = document.querySelector('#grazie')
target.innerHTML = frase