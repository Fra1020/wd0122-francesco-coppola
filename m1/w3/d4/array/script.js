let arr = [1,2,3,4];
console.log(arr,arr.length);
console.log([5,6,7,8,], [5,6,7,8].lenght) // possocreare array al volo senza creare una variabile


let pizze = [
    'Margherita',
    'Diavola',
    '4 stagioni'
]
let pizzaDiavola = pizza[1]
console.log(PizzaDiavola)

console.log(pizze)
console.log( pizze[0])

pizze[0] = 'Capricciosa';



console.log( pizze )


/* destrutturazione */

pizze = [
    'Margherita',
    'Diavola',
    '4 stagioni'
]

let [pizza1,pizza2,pizza3] = pizze

/* sostituisce quella sintassi vecchia ma ancora corretta

let pizza1 = pizze[0]
let pizza2 = pizze[1]
let pizza3 = pizze[2]

*/


/* Conversioni*/

document.write(pizze)
document.write(pizze.toString())



/* riordinare */

let nomi = [
    'Mario',
    'Zaira',
    'Luca',
    'Massimo',
    'Adriana',
    
]
nomi.sort()
console.log(nomi);




/*aggiungi o rimuovi elementi da un array */

nomi.push('Ivona')
console.log(nomi);


let nomeEliminato = nomi.pop() // è possibile asssegnare ad una variabile il risultato di pop(), in questo modo otterremo una copia di ciò che abbiamo eliminato
console.log(nomi)
console.log('Hai eliminato il nome ' + nomeEliminato)

nomi.splice(2,1)

// array.splice(indiceDiPartenza, NumeroElementiDaEliminare)
console.log(nomi)

nomi.splice(2,1,'Ledio') //sostiuisco il terzo elemento con "Ledio"
console.log(nomi)

nomi = ['Mario', 'Zaira', 'Luca','Massimo','Adriana',]
let nomi2 = ['Francesco','Simone','Pasquale']
let nomi3 = ['Ivona','Leopoldo','Chiara']

console.log(nomi)


let unito = nomi.concat(nomi2)
console.log(unito)
console.log(nomi)