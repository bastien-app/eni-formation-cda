
import {Adresse} from "../BO/Adresse.js";
import {MedecinGeneraliste} from "../BO/MedecinGeneraliste.js";
import {Creneau} from "../BO/Creneau.js";

//Création d'une adresse
const sh = new Adresse("ZAC du Moulin Neuf", 2, "B", "rue Benjamin Franklin", 44800,
    "Saint Herblain");
const nio = Adresse.fromSansMentions(19, null, "avenue Léo Lagrange", 79000, "Niort")

//Création d'un médecin
const melanie = new MedecinGeneraliste("Malalaniche", "Mélanie", "0228031728", sh);
const edmond = new MedecinGeneraliste("Bosapin", "Edmond", "+33 2 17 18 19 20", nio);
const djemila = new MedecinGeneraliste("Table", "Djémila", "03-04-05-06-07", sh);

melanie.afficher();
console.log("------------------------------------------------------------------");
edmond.afficher()
console.log("------------------------------------------------------------------");
djemila.afficher()

//Création des créneaux
const c1 = new Creneau(new Date(0, 0, 0, 9, 0), 15, melanie);
const c2 = new Creneau(new Date(0, 0, 0, 9, 15), 15, melanie);
const c3 = new Creneau(new Date(0, 0, 0, 9, 30), 15, melanie);
const c4 = new Creneau(new Date(0, 0, 0, 9, 45), 15, melanie);
const c5 = new Creneau(new Date(0, 0, 0, 10, 30), 15, melanie);
const c6 = new Creneau(new Date(0, 0, 0, 10, 45), 15, melanie);
const c7 = new Creneau(new Date(0, 0, 0, 11, 15), 15, melanie);
const c8 = new Creneau(new Date(0, 0, 0, 11, 30), 15, melanie);
const c9 = new Creneau(new Date(0, 0, 0, 11, 45), 15, melanie);
const c10 = new Creneau(new Date(0, 0, 0, 14, 0), 30, melanie);
const c11 = new Creneau(new Date(0, 0, 0, 14, 30), 30, melanie);
const c12 = new Creneau(new Date(0, 0, 0, 15, 0), 30, edmond);
const c13 = new Creneau(new Date(0, 0, 0, 15, 30), 30, edmond);
const c14 = new Creneau(new Date(0, 0, 0, 16, 0), 30, edmond);
const c15 = new Creneau(new Date(0, 0, 0, 16, 30), 30, edmond);

//Affichage
console.log("__________________________________________________________________");
console.log("__________________________ Créneaux ______________________________");
c1.afficher();
edmond.ajouterCreneau(c1)
console.log(`Médecin associé à ce créneau : Dr ${c1.medecin.nom}`);
console.log("------------------------------------------------------------------");
melanie.afficher();
console.log("------------------------------------------------------------------");
edmond.afficher();
console.log("------------------------------------------------------------------");
edmond.ajouterCreneau(c1)

