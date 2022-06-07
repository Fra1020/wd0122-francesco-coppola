function cambiaSfondo(e){

    console.log(e)
    /* il codice commentato si riferisce allo step precedente, in cui "e" era un indice che indicava */

    //let blocchi = document.getElementsByClassName('blocco') //array di elementi con la classe blocco
    //blocchi[e].style.backgroundColor = 'red';

    
    let colore = e.getAttribute('data-colore'); // va a recuperare il valore di qualunque attributo
    console.log(colore)

    if(e.style.backgroundColor == ''){
        e.style.backgroundColor = colore

    }else{
        e.style.backgroundColor = '';
    }

}
