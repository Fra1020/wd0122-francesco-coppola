/* metodi */

let frase = "La mia pizza preferita è la diavola"
let indice = frase.indexOf('diavola')
console.log(indice)

if(indice !== -1){
    console.log('trovato')
}else{
    console.log('non trovato')
}


/* split e join */

frase = "La mia pizza preferita è la diavola";
let arrFrase = frase.split('é')

console.log(arrFrase);
console.log(arrFrase[0]);


let citta = 'Roma,Milano,Napoli,Firenze';
let arrayCitta = citta.split(',')

console.log(arrayCitta);



let nuovoArrayCitta =  ['Roma,Milano,Napoli,Firenze'];

let nuovoStringaCitta = nuovoArrayCitta.join(' ')
console.log(nuovoStringaCitta);