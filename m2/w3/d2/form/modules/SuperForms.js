export default class SuperForms{
    
    static createHTMLInputElement(obj){

        let input = document.createElement('input')
        input.type = obj.type
        input.name = obj.name
        input.placeholder = obj.placeholder
        if(obj_classes != undefined){
            input.classList.add(obj_classes)
        }
        return input
        
    }
}