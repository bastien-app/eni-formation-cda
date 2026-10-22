import {Employe} from "./employe.js";

export class Graphiste extends Employe{

    #job = "Graphiste";
    get job() {
        return this.#job;
    }

    constructor(nom, prenom, email, niveau, logiciels) {
        super(nom, prenom, email, niveau);
        this.logiciels = logiciels;
    }

    afficherDetail(){
        super.afficherDetail();
        let logiciels = `${this.prenom} crée des visuels avec `
        logiciels += this.logiciels.join(", ");
        console.log(logiciels);
    }
}

