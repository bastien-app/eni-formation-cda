export class RendezVous{
    constructor(creneau, patient, date){
        this.creneau = creneau;
        this.patient = patient;
        this.date = date;

    }

    afficher(){
        console.log(`Rendez-vous du ${this.date.toLocaleDateString()}`)
        this.creneau.afficher()
        console.log(`avec le Dr ${this.creneau.medecin.nom}`)
        console.log("pour:")
        this.patient.afficher()
    }
}