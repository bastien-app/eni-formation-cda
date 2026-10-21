export class Patient {
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
        this.nom = nom.toUpperCase();
        this.prenom = prenom;
        this.numeroDeTelephone = numeroDeTelephone;
        this.sexe = sexe; // 'F' ou 'M'
        this.numSecu = numSecu;
        this.dateNaissance = dateNaissance;
        this.commentaires = commentaires;
        this.adresse = adresse
    }

    afficher() {
        console.log(
            `${this.nom} ${this.prenom}\n` +
            `Téléphone : ${this.numeroDeTelephone}\n` +
            `Sexe : ${this.sexe === "F" ? "Féminin" : "Masculin"}\n` +
            `Numéro de Sécurité sociale : ${this.numSecu}\n` +
            `Date de naissance : ${this.dateNaissance.toLocaleDateString()}\n` +
            `Commentaires : ${this.commentaires ?? "[aucun commentaire]"}`
        );
        if(this.adresse){
            console.log("Adresse :");
            this.adresse.afficher()
        }
    }

}
