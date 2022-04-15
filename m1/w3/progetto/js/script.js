alert('Questa è la mia calcolatrice')


function display(bottone){
    let numero = bottone.innerHTML;
    let schermo = document.querySelector('#bianco')

    schermo.value += numero;
}


function uguale(){
    let totale = 0;
    let schermo = document.querySelector('#bianco')
    let eq = schermo.value;
    let c = eq.charAt(eq.length - 1)
    if(c=='%'){
        let n = eq.substring(0, eq.length -1)
        n = parseInt(n)
        totale = n / 100;
      }else{
        totale = eval(schermo.value)
      }
    
    

    schermo.value = totale;



}

function canc(){
    let schermo = document.querySelector('#bianco')

    schermo.value = '';

}
function del(){
    let schermo = document.querySelector('#bianco')

    let val = schermo.value;

    schermo.value = val.replace(/.$/,'')
    

}

