import {Tache} from "./tache.js";
import {TypesDeTaches} from "./typestaches.js";

export class JeuVideo {

    equipe = [];
    taches = []


    constructor(titre, genre, plateforme, dateDebut){
        this.titre = titre;
        this.genre = genre;
        this.plateforme = plateforme;
        this.dateDebut = dateDebut;
    }

    ajouterEmploye(employe){
        this.equipe.push(employe);
    }

    ajouterTache(tache){
        this.taches.push(tache);
    }

    afficherEquipe(){
        console.log(`Equipe du projet ${this.titre}`)
        for(let i = 0; i < this.equipe.length; i++){
            this.equipe[i].afficherDetail();
        }
    }

    afficherProjet(){

        console.log(`Projet ${this.titre}
        (Date : ${this.dateDebut.toLocaleDateString("fr-FR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        })},
        Genre : ${this.genre},
        Plateforme : ${this.plateforme})
        
        -- Les tâches:`)
        for(let i = 0; i < this.taches.length; i++){
            this.taches[i].afficherTache();
        }
    }

    chercherTachesTodoNonAttribuees(){
        let result= [];
        for (let i = 0 ; i < this.taches.length; i++){
            if(this.taches[i].statut === "ToDo" && !this.taches[i].employe){
                result.push(this.taches[i]);
            }
        }
        return result;
    }

    chercherEmployePourTypeTache(typeTache){
        let i = 0
        let cont = true
        let result;
        while(i < this.equipe.length && cont){
            if((this.equipe[i].job === "Developpeur" &&
                Object.values(TypesDeTaches.DEVELOPPEUR).includes(typeTache))
                ||
            (this.equipe[i].job === "Graphiste" &&
                Object.values(TypesDeTaches.GRAPHISTE).includes(typeTache))){
                result = this.equipe[i];
                cont = false;
            }
            else{
                i++
            }

        }
        return result;
    }

    attribuerTachesTodoNonAttribuees(){
        let tachesNonAttribuee = this.chercherTachesTodoNonAttribuees();
        let employeTrouve;
        for(let i = 0; i < tachesNonAttribuee.length; i++){
            employeTrouve = this.chercherEmployePourTypeTache(tachesNonAttribuee[i].type);
            if(employeTrouve){
                tachesNonAttribuee[i].assignerEmploye(employeTrouve);
            }

        }

    }


}