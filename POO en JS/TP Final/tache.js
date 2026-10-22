export class Tache{

    static Statuts = {
        ToDo: "ToDo",
        InProgress: "InProgress",
        Done: "Done"
    }

    static Priorites = {
        Could: "Could",
        Should: "Should",
        Must: "Must"
    }

    //static Typestaches = {
    //    DEVELOPPEUR: {
    //        DEBUG: "Débogage",
    //        GAMEPLAY: "Programmation du Gameplay"
    //    },
    //    GRAPHISTE:{
    //        ANIMATION: "Animation"
    //    }
    //}

    constructor(titre, description, type, priorite, statut = Tache.Statuts.ToDo){
        this.titre = titre;
        this.description = description;
        this.type = type;
        this.statut = statut;
        this.priorite = Tache.Priorites[priorite];
    }

    afficherTache(){
        console.log(`
        ${this.titre}
        (Description: ${this.description},
        Type: ${this.type},
        Priorite: ${this.priorite},
        Statut: ${this.statut})
        `)
    }

    assignerEmploye(employe){
        this.employe = employe;
        this.employe.ajouterTache(this);


    }

    changerStatut(nouveauStatut){
        if(this.statut){
            this.statut = Tache.Statuts[nouveauStatut];
        }
        else{
            console.log('Erreur, aucun statut associé à cette tâche')
        }
    }
}