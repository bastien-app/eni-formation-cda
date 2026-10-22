import {Personne} from "./Personne.js";

export class Medecin extends Personne{

    static MAX_CRENEAUX = 15;

    constructor(nom, prenom, numeroDeTelephone, adresse) {
        super(nom, prenom, numeroDeTelephone, adresse);
        this.creneaux = [];
    }

    afficher(){
        super.afficher()
        if(this.creneaux.length > 0){
            console.log("Créneaux :");
            this.creneaux.forEach(creneau => creneau.afficher());
        }
    }


    ajouterCreneau(creneauAAjouter) {
        if (creneauAAjouter.medecin !== this) {
            console.error(
                "Ce créneau ne peut être associé à ce médecin car il est déjà associé à un autre"
            );
            return;
        }

        if (this.creneaux.length >= Medecin.MAX_CRENEAUX) {
            console.error("Trop de créneaux sont affectés à ce médecin");
            return;
        }

        this.creneaux.push(creneauAAjouter);
    }


}