import {MedecinGeneraliste} from "../BO/MedecinGeneraliste.js";
import {Adresse} from "../BO/Adresse.js";
import {Patient} from "../BO/Patient.js";
import {RendezVous} from "../BO/RendezVous.js";
import {Creneau} from "../BO/Creneau.js";

console.log("__________________________________________________________________");
console.log("__________________________ Rendez-Vous ___________________________");
//Création d'une adresse
const sh = new Adresse("ZAC du Moulin Neuf", 2, "B", "rue Benjamin Franklin", 44800,
    "Saint Herblain");
//Création du médecin
const melanie = new MedecinGeneraliste("Malalaniche", "Mélanie", "0228031728", sh);
//Création d'un créneau
const c1 = new Creneau(new Date(0, 0, 0, 9, 0), 15, melanie);
//Création du patient
const adhemar = new Patient(
    "Pamamobe",
    "Adhémar",
    "0753428619",
    "M",
    1921121920201421,
    new Date(1992, 10, 21), // novembre = 10
);

//Création du rendez-vous
const rdv = new RendezVous(c1, adhemar, new Date(2020, 4, 23)); // mai = 4

//Affichage
rdv.afficher();
