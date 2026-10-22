import {Employe} from "./employe.js";


export class Developpeur extends Employe{

    #job = "Developpeur";
    get job() {
        return this.#job;
    }

    constructor(nom, prenom, email, niveau, langages) {
        super(nom, prenom, email, niveau);
        this.langages = langages;
    }

    afficherDetail(){
        super.afficherDetail();
        let langages = `${this.prenom} code en `
        langages += this.langages.join(", ");
        console.log(langages);
    }
}