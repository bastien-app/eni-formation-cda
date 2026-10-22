import {Personne} from "./Personne.js";

export class Patient extends Personne{


    constructor(nom, prenom, numTel, sexe, numSecu, dateNaissance, commentaire, adresse) {
        super(nom, prenom, numTel)
        this.sexe = sexe;
        this.numSecu = numSecu;
        this.dateNaissance = dateNaissance;
        this.commentaire = commentaire;
        this.adresse = adresse;
    }

    afficher() {

        let result = `
        Sexe : ${this.sexe === "F" ? "Feminin" : "Masculin"}
        Numéro de Sécurité sociale : ${this.numSecu}
        Date de naissance : ${this.dateNaissance.toLocaleDateString()}
        Commentaires : ${this.commentaire ? this.commentaire : "[aucun commentaire]"}`

        if(this.adresse){
            result += `
            Adresse : 
        ${this.adresse.noAdresse}${this.adresse.complementAdresse ? this.adresse.complementAdresse : ""} ${this.adresse.nomRue}
        ${this.adresse.codePostal}
        ${this.adresse.ville}`
        }


        super.afficher()
        console.log(result)


    }
}