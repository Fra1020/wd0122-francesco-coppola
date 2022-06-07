let conta = 0;

let primaSelezione = "";
let secondaSelezione = "";

const carte = document.querySelectorAll(".carte .carta")
carte.forEach((carta) => {
    carta.addEventListener("click", () =>{
        console.log(true)


        if(conta ===0){
            primaSelezione = carta.getAttribute("calciatore")
            conta++;
        }else{
            secondaSelezione = carta.getAttribute("calciatore")
            counter = 0;
        }

        console.log(primaSelezione)   
        console.log(secondaSelezione) 

        if(primaSelezione === secondaSelezione){
            const cartaCorretta = document.querySelector(".carta[calciatore='" + primaSelezione + "']"
            )
        }
    })
})