export class Personne {

    constructor(nom, prenom, numeroDeTelephone, adresse) {
        this.nom = nom.toUpperCase();
        this.prenom = prenom;
        this.numeroDeTelephone = numeroDeTelephone;
        this.adresse = adresse;
    }

    afficher() {
        console.log(
            `${this.nom} ${this.prenom}\n` +
            `Téléphone : ${this.numeroDeTelephone}`);
        if (this.adresse) {
            this.adresse.afficher();
        }
    }

}