import {Personne} from "./Personne.js";

export class Medecin extends Personne{



    constructor(nom, prenom, numTel, adresse) {
        super(nom, prenom, numTel, adresse);
        this.creneaux = []
    }

    afficher(){
        super.afficher();
        console.log(`Creneaux :`);
        for (let i = 0; i < this.creneaux.length; i++) {
            this.creneaux[i].afficher();
        }
    }

    ajouterCreneau(creneau){

        if (creneau.medecin !== this){
            console.log(`Ce créneau ne peut être associé à ce médecin car il est déjà associé à un autre`)
        }
        else if (this.creneaux.includes(creneau)) {
            console.log("Ce créneau est déjà associé à ce médecin.");
            return;
        }
        else{
            if(this.creneaux.length >= 15){
                console.log("Plus de creneaux disponibles pour ce medecin");
            }
            else{
                if (creneau.heureDebut.getHours() < 12){
                    if(creneau.duree !== 15){
                        console.log("ERREUR : Les créneaux du matin durent 15 minutes.");
                    }
                    else{
                        this.creneaux.push(creneau);
                        creneau.medecin = this;
                    }
                }
                else{
                    if(creneau.duree !== 30){
                        console.log("ERREUR : Les créneaux de l'après midi durent 30 minutes.");
                    }
                    else{
                        this.creneaux.push(creneau);
                        creneau.medecin = this;
                    }
                }

            }
        }

    }

}