"use strict";
fetch("Abbigliamento.json")
    .then(res => res.json())
    .then(res => {
    console.log(res);
    for (let vestito of res) {
        class Abbigliamento {
            constructor(id, codprod, collezione, capo, modello, quantita, color, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
                this.id = id;
                this.codprod = codprod;
                this.collezione = collezione;
                this.capo = capo;
                this.modello = modello;
                this.quantita = quantita;
                this.color = color;
                this.prezzoivaesclusa = prezzoivaesclusa;
                this.prezzoivainclusa = prezzoivainclusa;
                this.disponibile = disponibile;
                this.saldo = saldo;
            }
            getsaldocapo() {
                var sconto = ((this.prezzoivainclusa * this.saldo) / 100);
                return this.prezzoivainclusa - sconto;
            }
            getacquistocapo() {
                var capoScontato = this.prezzoivainclusa;
                return capoScontato;
            }
        }
        let vestito1 = new Abbigliamento(vestito.id, vestito.codprod, vestito.collezione, vestito.capo, vestito.modello, vestito.quantita, vestito.colore, vestito.prezzoivaesclusa, vestito.prezzoivainclusa, vestito.disponibilità, vestito.saldo);
        console.log('sconto: ' + vestito1.getsaldocapo() + '€');
        console.log('costo vestito: ' + vestito1.getacquistocapo());
    }
});
//# sourceMappingURL=app.js.map