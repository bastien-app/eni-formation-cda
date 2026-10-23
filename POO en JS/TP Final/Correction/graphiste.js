import {Employe} from "./employe.js";

export class Graphiste extends Employe {
    constructor(nom, prenom, email, niveau, logiciels) {
        super(nom, prenom, email, niveau);
        this.logiciels = logiciels;
    }

    afficherDetail() {
        super.afficherDetail();
        console.log(`\t${this.prenom} crée des visuels avec ${this.logiciels.join(", ")}`);
    }
}
