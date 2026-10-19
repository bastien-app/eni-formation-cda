export class Patient {
    // Constructeur
    constructor(
        nom,
        prenom,
        numeroDeTelephone,
        sexe,
        numSecu,
        dateNaissance,
        commentaires
    ) {
        this.nom = nom.toUpperCase();
        this.prenom = prenom;
        this.numeroDeTelephone = numeroDeTelephone;
        this.sexe = sexe; // 'F' ou 'M'
        this.numSecu = numSecu;
        this.dateNaissance = dateNaissance; // objet Date en JS
        this.commentaires = commentaires;
    }

    // Méthodes
    afficher() {
        console.log(
            `${this.nom} ${this.prenom}\n` +
            `Téléphone : ${this.numeroDeTelephone}\n` +
            `Sexe : ${this.sexe === "F" ? "Féminin" : "Masculin"}\n` +
            `Numéro de Sécurité sociale : ${this.numSecu}\n` +
            `Date de naissance : ${this.dateNaissance.toLocaleDateString()}\n` +
            `Commentaires : ${this.commentaires ?? "[aucun commentaire]"}`
        );
    }

}
