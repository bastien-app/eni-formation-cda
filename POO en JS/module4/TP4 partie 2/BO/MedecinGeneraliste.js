import {Medecin} from "./Medecin.js";

export class MedecinGeneraliste extends Medecin {
    // Attribut de classe
    static tarif = 25;

    // Constructeur
    constructor(nom, prenom, numeroDeTelephone, adresse) {
        super(nom, prenom, numeroDeTelephone, adresse)
    }

    afficher() {
        super.afficher()
        console.log(`Tarif : ${MedecinGeneraliste.tarif}€`)

    }

    ajouterCreneau(creneauAAjouter) {
        if (creneauAAjouter.medecin !== this) {
            console.error(
                "Ce créneau ne peut être associé à ce médecin car il est déjà associé à un autre"
            );
            return;
        }

        if (this.creneaux.length >= MedecinGeneraliste.MAX_CRENEAUX) {
            console.error("Trop de créneaux sont affectés à ce médecin");
            return;
        }

        this.creneaux.push(creneauAAjouter);
    }

}
