import {Tache} from "./tache.js";
import {TypesDeTaches} from "./typestaches.js";

export class JeuVideo {
    constructor(titre, genre, plateforme, dateDebut) {
        this.titre = titre;
        this.genre = genre;
        this.platforme = plateforme;
        this.dateDebut = dateDebut;
        this.taches = [];
        this.equipe = [];
    }

    ajouterEmploye(employe) {
        this.equipe.push(employe);
    }

    ajouterTache(tache) {
        this.taches.push(tache);
    }

    afficherEquipe() {
        console.log(`Équipe du projet ${this.titre} :`);
        this.equipe.forEach(e => e.afficherDetail());
    }

    afficherProjet() {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        console.log(`Projet ${this.titre} 
            (date : ${this.dateDebut.toLocaleDateString('fr-FR', options)}, 
            genre : ${this.genre}, 
            plateforme : ${this.platforme}).
-- Les tâches :`);
        this.taches.forEach(t => t.afficherTache());
    }


    // Retourne l'ensemble des tâches en statut TO DO et non attribuées à un employé
    chercherTachesTodoNonAttribuees() {
        return this.taches.filter(t => t.statut === Tache.Statuts.Todo && t.employe == null);
    }

    // Retourne le premier employe qui peut gérer une tâche du type indiqué
    // Sans se préoccuper de sa charge de travail
    chercherEmployePourTypeTache(typeTache) {
        return this.equipe.find(e => {
            const nomClasse = e.constructor.name.toUpperCase();
            const job = TypesDeTaches.getKeyFromValue(typeTache);
            return nomClasse === job;
        });
    }

    // Attribuer toutes les tâches non associées à un employé et avec un statut à faire
    attribuerTachesTodoNonAttribuees() {
        const todos = this.chercherTachesTodoNonAttribuees();
        if (todos.length > 0) {
            // Attribuer une tâche en fonction du métier de l'Employe
           todos.forEach(t => {
                const employe = this.chercherEmployePourTypeTache(t.type);
                if(employe) {
                    t.assignerEmploye(employe);
                }
            });
        }
    }

}