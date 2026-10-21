export class RendezVous {

    constructor(creneau, patient, dateRDV) {
        this.creneau = creneau;
        this.patient = patient;
        this.dateRDV = dateRDV;
    }


    afficher() {

        console.log(
            `Rendez-vous du ${this.dateRDV.toLocaleDateString()}`);
        this.creneau.afficher();
        console.log(`avec le Dr ${this.creneau.medecin.nom}`);
        console.log('pour :');
        this.patient.afficher();
    }

}
