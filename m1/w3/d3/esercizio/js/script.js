/* primo punto */

function calcolaAnni(compleanno) {
    return 2022 - compleanno;
}

alert(calcolaAnni(2001));

const anni = calcolaAnni(1999);
console.log(anni);

const calcolaAnni2 = compleanno => 2022 - compleanno;

let anni2 = calcolaAnni2(1981);
console.log(anni2);


/* secondo punto */

let divisione = (a,b) => console.log(a / b) ;
divisione(10,2);


/* terzo punto */

function moltipica(a){
    
    return function(b){
        return function(c){
            return a * b * c;
        }
    }

}

let risultato = moltiplica(2)(4)(3);
console.log(risultato);



/* quarto punto */
if(typeof num == 'number'){
    console.log('è un numero')
}

let num1 = 1;
let num2 = '1';

console.log(num1 == num2)
console.log(num1 === num2) 
console.log(num1 != num2) 
console.log(num1 !== num2) 
