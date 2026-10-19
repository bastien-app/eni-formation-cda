import {Adresse} from "../BO/Adresse.js";


console.log("__________________________ Adresses ______________________________");

const sh = new Adresse(
    "ZAC du Moulin Neuf",
    2,
    "B",
    "rue Benjamin Franklin",
    44800,
    "Saint Herblain"
);

const nio = Adresse.fromSansMentions(
    19,
    null,
    "avenue Léo Lagrange",
    79000,
    "Niort"
);

const comp = Adresse.fromSansMentions(
    4,
    null,
    "Rue des Glatiniers",
    2100,
    "Saint-Quentin"
);

sh.afficher();
console.log("------------------------------------------------------------------");
nio.afficher();
console.log("------------------------------------------------------------------");
comp.afficher();
