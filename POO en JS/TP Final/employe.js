import {Tache} from "./tache.js";

export class Employe {



    static Niveaux = {
        JUNIOR: "Junior",
        SENIOR: "Senior",
        EXPERT: "Expert"
    };


    taches= [];


    constructor(nom, prenom, email, niveau) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.niveau = niveau;
    }

    afficherDetail(){
        console.log(`
        ${this.nom} ${this.prenom} (Email: ${this.email}, Niveau: ${this.niveau})`)
    }

    ajouterTache(tache){
        this.taches.push(tache);
        //tache.employe = this;
    }

    trouverTacheParStatut(statut){
        let result = this.taches.filter(tache => tache.statut === statut);
        return result;

    }
    trierTachesParPriorite(tachesAGerer){
        let priorite = {
            "Could": 1,
            "Should": 2,
            "Must": 3
        }
        tachesAGerer.sort((a, b) => {

            a = priorite[a.priorite];
            b = priorite[b.priorite];
            return b - a;
        })
        return tachesAGerer;
    }

    terminerTachesInProgress(){
        let result = this.trouverTacheParStatut("InProgress");
        result = this.trierTachesParPriorite(result);
        console.log(`-- ${this.prenom}  gère ses tâches IN PROGRESS --`);
        for(let i = 0; i < result.length; i++){
            result[i].statut = Tache.Statuts.Done;
            console.log(`
            ${this.prenom} travaille sur la tâche : ${result[i].titre}
          - tâche terminée
          
        `);
            result[i].afficherTache()
        }



    }

    travaillerTachesTodo(){
        let result = this.trouverTacheParStatut("ToDo");
        result = this.trierTachesParPriorite(result);
        console.log(`-- ${this.prenom}  gère ses tâches TO DO --`);
        for(let i = 0; i < result.length; i++){
            result[i].statut = Tache.Statuts.InProgress;
            console.log(`
            ${this.prenom} travaille sur la tâche : ${result[i].titre}
          - tâche arrêtée pour aujourd'hui
          
        `);
            result[i].afficherTache()
        }
        return result;

    }

    travailler(){
        this.terminerTachesInProgress()
        this.travaillerTachesTodo()

        console.log(`${this.prenom} a fini de travailler.`)
    }

}