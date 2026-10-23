import {Tache} from "./tache.js";

export class Employe {
    // Utiliser un objet simple pour représenter les énuméraitons de valeurs en JS
    static Niveaux = {
        JUNIOR: 'Junior',
        SENIOR: 'Senior',
        EXPERT: 'Expert',
    };

    constructor(nom, prenom, email, niveau) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.niveau = niveau;
        // Gestion de l'associatin bidirectionnelle Employe-Tache
        this.taches = [];
    }

    afficherDetail(){
        console.log(` ${this.prenom} ${this.nom} (email : ${this.email}, niveau : ${this.niveau})`);
    }

    // Gestion de l'associatin bidirectionnelle Employe-Tache
    ajouterTache(tache) {
        this.taches.push(tache);
    }

    trouverTachesParStatut(statut) {
        return this.taches.filter(t => t.statut === statut);
    }

    trierTachesParPrioriete(tachesAGerer) {
        tachesAGerer.sort((a, b) => a.priorite - b.priorite);
    }

    // Finir les taches InProgress selon leur priorite
    terminerTachesInProgress() {
        console.log(`\n-- ${this.prenom}  gère ses tâches IN PROGRESS --`);
        // Trouver les tâches à finir
        let tacheAGerer = this.trouverTachesParStatut(Tache.Statuts.InProgress);
        this.trierTachesParPrioriete(tacheAGerer);
        tacheAGerer.forEach((t) => {
            console.log(`${this.prenom} travaille sur la tâche : ${t.titre}`);
            t.changerStatut(Tache.Statuts.Done);
            console.log(`\t- tâche terminée`);
            t.afficherTache();
        })
    }

    // Travailler sur les taches à faire selon leur priorite
    travaillerTachesTodo() {
        console.log(`\n-- ${this.prenom}  gère ses tâches TODO --`);
        // Trouver les tâches à faire
        let tachesAFaire = this.trouverTachesParStatut(Tache.Statuts.Todo);
        this.trierTachesParPrioriete(tachesAFaire);
        tachesAFaire.forEach((t) => {
            console.log(`${this.prenom} travaille sur la tâche : ${t.titre}`);
            t.changerStatut(Tache.Statuts.InProgress);
            console.log(`\t- tâche arrêtée pour aujourd'hui`);
            t.afficherTache();
        })
    }

    // Avancer dans son travail
    travailler() {
        this.terminerTachesInProgress();
        this.travaillerTachesTodo();
        console.log(`${this.prenom} a fini de travailler.\n`);
    }

}
