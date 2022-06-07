let lista = document.querySelector('#lista')
let bottone = document.querySelector('#bottone')
let testo = document.querySelector('#testo')

bottone.addEventListener('click',function(){

    let div = document.createElement('div') //<div></div>
    div.innerHTML = testo.value
    div.classList.add('alert', 'alert-success')
    
    lista.append(div) //scrivi l'elemento nell'html
})