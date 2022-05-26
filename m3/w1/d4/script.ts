fetch("Abbigliamento.json")
.then(res => res.json())
.then(res =>{
    console.log(res)

for(let vestito of res){
    
class Abbigliamento{
    public id:number
    public codprod:number
    public collezione:string
    public capo:string
    public modello:string
    public quantita:number
    public color:string
    public prezzoivaesclusa:number
    public prezzoivainclusa:number
    public disponibile:string
    public saldo:number

    constructor(id:number, codprod:number, collezione:string, capo:string, modello:string, quantita:number, color:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello
        this.quantita = quantita
        this.color = color
        this.prezzoivaesclusa = prezzoivaesclusa
        this.prezzoivainclusa = prezzoivainclusa
        this.disponibile = disponibile
        this.saldo = saldo
    }

    getsaldocapo():number{

        var sconto = ((this.prezzoivainclusa * this.saldo)/100)
        return this.prezzoivainclusa - sconto;
    }

    getacquistocapo():number{
        var capoScontato = this.prezzoivainclusa
        return capoScontato;
    }

}

let vestito1:any = new Abbigliamento (vestito.id,vestito.codprod,vestito.collezione,vestito.capo,vestito.modello,vestito.quantita,vestito.colore,vestito.prezzoivaesclusa,vestito.prezzoivainclusa,vestito.disponibilità,vestito.saldo)

console.log('sconto: ' + vestito1.getsaldocapo()+'€')
console.log('costo vestito: ' + vestito1.getacquistocapo())

}
})


