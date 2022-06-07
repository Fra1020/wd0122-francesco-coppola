/* stringhe ed escape */

var saluto = "ciao";
var domanda = "Com'è oggi il tempo?"
var domanda2 = 'Com\'è oggi il tempo?'
var html = '<div class="blocco"></div>'
var html = "<div class=\"blocco\"></div>"


var nome = 'Giovanni'; // valore ipoteticamente definito dall'utente
var frase = "Ciao " + nome + " come stai?";
var frase2 = `Ciao ${nome} come stai?` //backtick  alt-9-6

console.log(frase2,'color:red')
console.log(frase2)
console.log(frase2.length)
console.log( frase2[0] )

var ultimoIndice = frase2.length -1
console.log( frase2[ ultimoIndice ] ); // ultima lettera della frase

console.log( ''.length) //lunghezza di una stringa 


console.log('%c log colorato','color:red; font-size:30px') // come applicare css ai console log()



/* let e const*/

const PASSWORD = 'SDFDSFSLA'
console.log(PASSWORD)
//PASSWORD = '3232138FDFDSA' => ERRORE
const OBJ = { 
    nome: 'Mario'
}

OBJ.nome= 'marco'
console.log(OBJ) // posso modificare le proprietà di un oggetto anche se si trova in una costante

var x = 1;

{
    console.log(x);
}

let y = 2;

{
    console.log(y);
}

{
    var x2 = 1;
    console.log(x2)
}
console.log(x2) // essendo che la var ignora il block scope la variabile è raggiungibile

{
    let y2 = 2; //quetsa è una variabile locale che appartiene al blocco
    console.log(y2)
}
//console.log(y2); errore: y2 non è definita


function scriviSaluto(){
    var s = 'Ciao';
    document.write(s)
    return s;
}

console.log(scriviSaluto())


/* conversione variabili */

var num = 4;
var testo = '4';
var prezzo = '4€';

console.log(num + testo); //num viene trasformato in stringa
console.log(num * testo); //tetso viene trasformato in numero e quindi moltiplicato
console.log(num * prezzo);

let bool = false;
let valore = "<br>il valore della variabile booleana è " + bool + '<br>';
document.write(valore)
console.log(num * bool) //se convertito in numero, un valore booleano si trasforma in 0 se è false, in 1 se è true

let booleano = Number(true) 
let errore = Number('4a') 
let stringa = String(4)
console.log(booleano, errore, stringa)

let arr = ['a','b','c','d',60];
document.write(arr); // i valori vengono concatenati in una stringa e separati tra loro con una virgola
