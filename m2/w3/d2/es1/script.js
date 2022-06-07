class persone{
    constructor(nome, eta){
    this.nome = nome;
    this.eta = eta;
    }


    supercalcolo(obj2){
        if (this.age > obj2.age){
            console.log(this.name + 'è più vecchio di' + obj2.name)
        }
        else if(this.age < obj2.age){
            console.log(this.name + 'è più giovane di' + obj2.name)
        }
        else if(this.age == obj2.age){
            console.log(this.name + 'e' + obj2.name + 'hanno la stessa età')
        }
    }
}