export class Creneau {

    constructor(heureDebut, duree, medecin) {
        this.heureDebut = heureDebut;
        this.duree = duree;
        this.medecin = medecin;

        // Ajout bidirectionnel
        medecin.ajouterCreneau(this);
    }


    afficher() {
        //calcul de l'heure de fin, afin de ne pas modifier l'instance de l'heure de début
        const heureFin = new Date(this.heureDebut)
        heureFin.setMinutes(heureFin.getMinutes() + this.duree)

        console.log(
            `${this.heureDebut.toLocaleTimeString()} - ${heureFin.toLocaleTimeString()} (${this.duree} minutes)`
        )

    }

}
