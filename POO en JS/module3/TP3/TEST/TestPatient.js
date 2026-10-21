import {Patient} from "../BO/Patient.js";
import {Adresse} from "../BO/Adresse.js";
console.log("__________________________ Patient _______________________________");

const nio = Adresse.fromSansMentions(19, null, "avenue Léo Lagrange", 79000, "Niort")
const stq = Adresse.fromSansMentions(4, null, "Rue des Glatiniers", 2100, "Saint-Quentin")

const hillary = new Patient(
    "Vambuce",
    "Hillary",
    "0123456789",
    "F",
    2870602440101541,
    new Date(1987, 5, 2),
    "Allergie aux arachides",
    nio
);

const ines = new Patient(
    "Perret",
    "Inès",
    "0698745123",
    "F",
    2450210670345211,
    new Date(1945, 1, 10), // février = 1
    null,
    stq
);

const adhemar = new Patient(
    "Pamamobe",
    "Adhémar",
    "0753428619",
    "M",
    1921121920201421,
    new Date(1992, 10, 21), // novembre = 10
);

hillary.afficher();
console.log("------------------------------------------------------------------");
ines.afficher();
console.log("------------------------------------------------------------------");
adhemar.afficher();
