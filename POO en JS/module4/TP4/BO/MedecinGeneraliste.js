import {Medecin} from "./Medecin.js";

export class MedecinGeneraliste extends Medecin{

    static tarif = 25;
    constructor(nom, prenom, numTel, adresse) {
        super(nom, prenom, numTel, adresse);


    }

    afficher(){
        super.afficher()
        console.log(`Tarif ${MedecinGeneraliste.tarif}€`);
    }

}