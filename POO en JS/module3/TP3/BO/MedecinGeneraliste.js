export class MedecinGeneraliste {

    static tarif = 25
    creneaux = []

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
        Creneaux :`);
        for (let i = 0; i < this.creneaux.length; i++) {
            this.creneaux[i].afficher();
        }
    }

    ajouterCreneau(creneau){

        if (creneau.medecin !== this){
            console.log(`Ce créneau ne peut être associé à ce médecin car il est déjà associé à un autre`)
        }
        else if (this.creneaux.includes(creneau)) {
            console.log("Ce créneau est déjà associé à ce médecin.");
            return;
        }
        else{
            if(this.creneaux.length >= 15){
                console.log("Plus de creneaux disponibles pour ce medecin");
            }
            else{
                if (creneau.heureDebut.getHours() < 12){
                    if(creneau.duree !== 15){
                        console.log("ERREUR : Les créneaux du matin durent 15 minutes.");
                    }
                    else{
                        this.creneaux.push(creneau);
                        creneau.medecin = this;
                    }
                }
                else{
                    if(creneau.duree !== 30){
                        console.log("ERREUR : Les créneaux de l'après midi durent 30 minutes.");
                    }
                    else{
                        this.creneaux.push(creneau);
                        creneau.medecin = this;
                    }
                }

            }
        }

    }

}