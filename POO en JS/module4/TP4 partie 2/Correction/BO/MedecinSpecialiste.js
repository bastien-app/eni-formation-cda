import {Medecin} from "./Medecin.js";

export class MedecinSpecialiste extends Medecin {

    constructor(nom, prenom, numeroDeTelephone, adresse, specialite, tarif) {
        super(nom, prenom, numeroDeTelephone, adresse)
        this.specialite = specialite;
        this.tarif = tarif;
    }

    afficher() {
        super.afficher()
        console.log(`Specicalite : ${this.specialite}\nTarif : ${this.tarif}€`)

    }

}
