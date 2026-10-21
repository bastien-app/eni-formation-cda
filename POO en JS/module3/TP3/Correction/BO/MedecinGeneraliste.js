export class MedecinGeneraliste {
    // Attribut de classe
    static tarif = 25;
    static MAX_CRENEAUX = 15;

    // Constructeur
    constructor(nom, prenom, numeroDeTelephone, adresse) {
        this.nom = nom.toUpperCase();
        this.prenom = prenom;
        this.numeroDeTelephone = numeroDeTelephone;
        this.adresse = adresse;
        //on intialise un tableau de créneaux vides
        this.creneaux = []
    }

    afficher() {
        console.log(
            `${this.nom} ${this.prenom}\nTéléphone : ${this.numeroDeTelephone}\nTarif : ${MedecinGeneraliste.tarif}€`
        );
        if(this.adresse){
            console.log("Adresse :");
            this.adresse.afficher()
        }
        if(this.creneaux.length > 0){
            console.log("Créneaux :");
            this.creneaux.forEach(creneau => creneau.afficher());
        }


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
