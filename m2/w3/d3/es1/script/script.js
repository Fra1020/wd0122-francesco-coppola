/*fetch("json/discografia.json")
.then(res => {
    console.log(res)
    return res.json()
    
})*/


let first = document.querySelector("#first")
let bottone1 = document.querySelector("#scrivi")
let bottone2 = document.querySelector("#cancella")
let titolo = document.querySelector("#titolo")

bottone1.addEventListener('click',function(e){
    e.preventDefault()
    sessionStorage.setItem("nome" + first.value)
    
})

bottone2.addEventListener('click',function(e){
    e.preventDefault()
})

