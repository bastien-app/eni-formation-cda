import {Personne} from "./Personne.js";

export class Patient extends Personne {
    // Constructeur
    constructor(
        nom,
        prenom,
        numeroDeTelephone,
        sexe,
        numSecu,
        dateNaissance,
        commentaires,
        adresse
    ) {
        super(nom, prenom, numeroDeTelephone, adresse)
        this.sexe = sexe; // 'F' ou 'M'
        this.numSecu = numSecu;
        this.dateNaissance = dateNaissance;
        this.commentaires = commentaires;
    }

    afficher() {
        let result = super.afficher()
        result += (
            `Sexe : ${this.sexe === "F" ? "Féminin" : "Masculin"}<br>` +
            `Numéro de Sécurité sociale : ${this.numSecu}<br>` +
            `Date de naissance : ${this.dateNaissance.toLocaleDateString()}<br>` +
            `Commentaires : ${this.commentaires ?? "[aucun commentaire]"}`
        );
        return result;
    }

}
