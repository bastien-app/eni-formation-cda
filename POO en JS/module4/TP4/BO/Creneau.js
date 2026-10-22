export class Creneau{
    constructor(heureDebut, duree, medecin){
        this.heureDebut = heureDebut;
        this.duree = duree;
        this.heureFin = new Date(heureDebut);
        this.heureFin.setMinutes(this.heureFin.getMinutes() + duree);
        this.medecin = medecin;
        this.medecin.ajouterCreneau(this)
    }


    afficher(){
        console.log(`${this.heureDebut.toLocaleTimeString("fr-FR")} - ${this.heureFin.toLocaleTimeString("fr-FR")} (${this.duree} minutes)`);
    }
}