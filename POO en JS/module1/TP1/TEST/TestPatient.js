import {Patient} from "../BO/Patient.js";


console.log("__________________________ Patient _______________________________");

const hillary = new Patient(
    "Vambuce",
    "Hillary",
    "0123456789",
    "F",
    2870602440101541,
    new Date(1987, 5, 2),
    "Allergie aux arachides"
);

const ines = new Patient(
    "Perret",
    "Inès",
    "0698745123",
    "F",
    2450210670345211,
    new Date(1945, 1, 10), // février = 1
    null
);

const adhemar = new Patient(
    "Pamamobe",
    "Adhémar",
    "0753428619",
    "M",
    1921121920201421,
    new Date(1992, 10, 21), // novembre = 10
    null
);

hillary.afficher();
console.log("------------------------------------------------------------------");
ines.afficher();
console.log("------------------------------------------------------------------");
adhemar.afficher();
