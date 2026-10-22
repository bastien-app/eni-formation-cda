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
        super.afficher()
        console.log(
            `Sexe : ${this.sexe === "F" ? "Féminin" : "Masculin"}\n` +
            `Numéro de Sécurité sociale : ${this.numSecu}\n` +
            `Date de naissance : ${this.dateNaissance.toLocaleDateString()}\n` +
            `Commentaires : ${this.commentaires ?? "[aucun commentaire]"}`
        );
    }

}
