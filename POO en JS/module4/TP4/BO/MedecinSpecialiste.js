import {Medecin} from "./Medecin.js";

export class MedecinSpecialiste extends Medecin{

    constructor(nom, prenom, numTel, adresse, specialite, tarif) {
        super(nom, prenom, numTel, adresse);
        this.specialite = specialite;
        this.tarif = tarif;

    }

    afficher(){
        super.afficher()
        console.log(`Specialiste ${this.specialite}\nTarif ${this.tarif}`);
    }

}