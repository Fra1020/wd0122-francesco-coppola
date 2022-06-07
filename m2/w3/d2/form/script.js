import SuperForms from "./modules/SuperForms.js"

let input = SuperForms.createHTMLInputElement({
    type:"text", name:'nome', classes:'form-control'

})
console.log(input);