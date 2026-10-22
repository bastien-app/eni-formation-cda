export class RendezVous {

    constructor(creneau, patient, dateRDV) {
        this.creneau = creneau;
        this.patient = patient;
        this.dateRDV = dateRDV;
    }


    afficher() {

        let result = `<h2>Rendez-vous du ${this.dateRDV.toLocaleDateString()}</h2>`;
        result += `<div>${this.creneau.afficher()}</div>`;
        result += `<div>avec le Dr ${this.creneau.medecin.nom}</div>`;
        result += `<div>Pour : ${this.patient.afficher()}</div>`;
        return result;
    }

}
