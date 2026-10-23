export class Tache {
    // Utiliser un objet simple pour représenter les énuméraitons de valeurs en JS
    static Statuts = {
        Todo: 1,
        InProgress: 2,
        Done: 3
    };

    static getNomStatut(valeur) {
        return Object.keys(Tache.Statuts).find(key => Tache.Statuts[key] === valeur);
    }


    static Priorites = {
        Must: 1,
        Should: 2,
        Could: 3
    };

    static getNomPriorite(valeur) {
        return Object.keys(Tache.Priorites).find(key => Tache.Priorites[key] === valeur);
    }

    constructor(titre, description, type, priorite, statut = Tache.Statuts.Todo) {
        this.titre = titre;
        this.description = description;
        this.type = type;
        this.priorite = priorite;
        this.statut = statut;
        // Association bidirectionnelle entre Employe-Tache
        this.employe = null;
    }


    // Prise en compte des énumérations des statuts et des priorités
    afficherTache() {
        console.log(`- ${this.titre} 
            (description : ${this.description}, 
            type : ${this.type},  
            priorité : ${Tache.getNomPriorite(this.priorite)}, 
            statut : ${Tache.getNomStatut(this.statut)})`);
    }

    // Gestion de l'associatin bidirectionnelle Employe-Tache
    assignerEmploye(employe) {
        this.employe = employe;
        employe.ajouterTache(this);
    }


    // Changer le statut de la tâche si le statut existe
    changerStatut(nouveauStatut) {
        if (Object.values(Tache.Statuts).includes(nouveauStatut)) {
            this.statut = nouveauStatut;
        } else {
            console.warn("Statut invalide");
        }
    }
}