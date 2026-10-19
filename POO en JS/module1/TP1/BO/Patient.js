export class Patient{

    constructor(nom, prenom, numTel, sexe, numSecu, dateNaissance, commentaire) {
        this.nom = nom;
        this.prenom = prenom;
        this.numTel = numTel;
        this.sexe = sexe;
        this.numSecu = numSecu;
        this.dateNaissance = dateNaissance;
        this.commentaire = commentaire;
    }

    afficher() {
        console.log(`
        ${this.nom} ${this.prenom}
        Téléphone : $${this.numTel}
        Sexe : ${this.sexe === "F" ? "Feminin" : "Masculin"}
        Numéro de Sécurité sociale : ${this.numSecu}
        Date de naissance : ${this.dateNaissance.toLocaleDateString()}
        Commentaires : ${this.commentaire ? this.commentaire : "[aucun commentaire]"}
        `)
    }
}