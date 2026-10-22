export class Personne {

    constructor(nom, prenom, numeroDeTelephone, adresse) {
        this.nom = nom.toUpperCase();
        this.prenom = prenom;
        this.numeroDeTelephone = numeroDeTelephone;
        this.adresse = adresse;
    }

    afficher() {
        let result = (
            `${this.nom} ${this.prenom}<br>
            Téléphone : ${this.numeroDeTelephone}<br>`);
        if (this.adresse) {
            result += `${this.adresse.afficher()}<br>`;
        }
        return result;
    }

}