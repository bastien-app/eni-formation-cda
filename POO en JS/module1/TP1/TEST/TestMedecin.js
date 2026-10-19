// Création d'une adresse
import {Adresse} from "../BO/Adresse.js";
import {MedecinGeneraliste} from "../BO/MedecinGeneraliste.js";

// Création d'un médecin
const medecin = new MedecinGeneraliste("Dupont", "Jean", "0601020304");


console.log("--------------- Médecin ---------------")
medecin.afficher();
console.log("--------------- Changement du numéro de ce médecin ---------------")
medecin.numeroDeTelephone = "0706050403"
console.log("Nouveau numéro de téléphone : " + medecin.numeroDeTelephone)
console.log("------------------------------------------------------------------")

// Changer le tarif
console.log("--------------- Changement du tarif ---------------")
MedecinGeneraliste.tarif = 30
medecin.afficher();
