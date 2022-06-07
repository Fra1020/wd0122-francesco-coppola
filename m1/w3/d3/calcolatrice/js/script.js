function aggiungiNumero(bottone){
    let numero = bottone.innerHTML; // è una stringa

    let display = document.querySelector('#display'); // seleziono l'elemento con cui andoò ad interagire

    //display.innerHTML = numero // innerHTML e innerText non funzionano per i campi dei form

    display.value += numero; // mi aggancio all'elemento conenuto nella variabile display, per modificare l'attributo value, provocando l'apparizione dei numeri
}

function risultato(){
    let display = document.querySelector('#display');

    let totale = eval(display.value)

    display.value = totale 

}

function cancella(){
    let display = document.querySelector('#display')
    display.value = ' '
}

