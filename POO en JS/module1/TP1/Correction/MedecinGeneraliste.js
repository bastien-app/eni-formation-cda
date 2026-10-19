export class MedecinGeneraliste {
    // Attribut de classe
    static tarif = 25;

    // Constructeur
    constructor(nom, prenom, numeroDeTelephone) {
        this.nom = nom.toUpperCase();
        this.prenom = prenom;
        this.numeroDeTelephone = numeroDeTelephone;
    }

    // Méthodes
    afficher() {
        console.log(
            `${this.nom} ${this.prenom}\nTéléphone : ${this.numeroDeTelephone}\nTarif : ${MedecinGeneraliste.tarif}€`
        );
    }

}
