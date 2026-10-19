export class MedecinGeneraliste {

    static tarif = 25

    constructor(nom, prenom, numTel) {
        this.nom = nom;
        this.prenom = prenom;
        this.numTel = numTel;
    }

    afficher(){
        console.log(`
        ${this.nom} ${this.prenom} 
        Téléphone : ${this.numTel} 
        Tarif : ${MedecinGeneraliste.tarif}€
        `);
    }

}