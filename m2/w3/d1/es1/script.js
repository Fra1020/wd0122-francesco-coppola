let nome = document.querySelector('#nome')
let data = document.querySelector('#data')
let bottone = document.querySelector('#bottone')

bottone.addEventListener('click',function(){
    let div1 = document.createElement('div')
    div1.innerHTML = nome.value
    
    let div2 = document.createElement('div')
    div2.innerHTML = data.value

    div1.classList.add('border', 'border-dark')
    div2.classList.add('border', 'border-dark')

    lista1.append(div1)
    lista2.append(div2)

    nome.value = ''
    data.value = ''
})