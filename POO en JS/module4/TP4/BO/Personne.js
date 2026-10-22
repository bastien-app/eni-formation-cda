export class Personne{
    constructor(nom, prenom, numTel, adresse) {
        this.nom = nom;
        this.prenom = prenom;
        this.numTel = numTel;
        this.adresse = adresse;
    }

    afficher() {
        console.log(`
        ${this.nom} ${this.prenom}
        Téléphone : ${this.numTel}`)
        this.adresse.afficher()
    }

}