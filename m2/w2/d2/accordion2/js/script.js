

let bottoni = document.querySelectorAll('button') //array
let contents = document.querySelectorAll('.content')//arrayCitta

for(let bottone of bottoni){

    bottone.addEventListener('click',function(){

        let altriOpen = document.querySelector('.content.open')
        let tempTarget = altriOpen
        let target = bottone.getAttribute('data-target')

        if(altriOpen != null && altriOpen.getAttribute('data-target') != target)
        altriOpen.classList.remove('open')

       
        bottone.querySelector(target).classList.toggle('open')

    })
}


/*
si poteva fare anche con forEach
bottoni.forEach((bottone,i) =>{

    bottone.addEventListener('click',function(){

        bottone.nextElementSibling.classList.toggle('open')
        bottone.nextElementSibling.id = 'bottone-'+i
    })
})*/
