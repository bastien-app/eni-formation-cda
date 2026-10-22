export class Adresse {

    //static noAdresse;
    //static complementAdresse;
    //static nomRue;
    //static codePostal;
    //static ville;


    constructor(nomLieu,
    noAdresse,
    complementAdresse,
    nomRue,
    codePostal,
    ville) {
        this.nomLieu = nomLieu;
        this.noAdresse = noAdresse;
        this.complementAdresse = complementAdresse;
        this.nomRue = nomRue;
        this.codePostal = codePostal;
        this.ville = ville;
    }

    afficher(){
        if(this.nomLieu){
            console.log(this.nomLieu);
        }
        console.log(`
        ${this.noAdresse} ${this.complementAdresse ? this.complementAdresse : ""}
        ${this.nomRue}
        ${this.codePostal} ${this.ville}
        `)
    }
    static fromSansMentions(noAdresse,
    complementAdresse,
    nomRue,
    codePostal,
    ville){
        let result = new Adresse(null, noAdresse, complementAdresse, nomRue, codePostal, ville)
        return result
    }

}