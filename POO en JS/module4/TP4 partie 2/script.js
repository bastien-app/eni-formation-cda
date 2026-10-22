import {RendezVous} from "./BO/RendezVous.js";
import {MedecinGeneraliste} from "./BO/MedecinGeneraliste.js";
import {Patient} from "./BO/Patient.js";
import {Creneau} from "./BO/Creneau.js";
import {CalendarAvecRdv} from "./renderer/CalendarAvecRdv.js";
import {MedecinSpecialiste} from "./BO/MedecinSpecialiste.js";

//Création du médecin
const melanie = new MedecinGeneraliste("Malalaniche", "Mélanie", "0228031728");
const edmond = new MedecinSpecialiste("Bosapin", "Edmond", "+33 2 17 18 19 20", null, "ORL", 52);
//Création de créneaux pour aujourd'hui
const c1 = new Creneau(new Date(0, 0, 0, 9, 0), 15, melanie);
const c2 = new Creneau(new Date(0, 0, 0, 10, 0), 30, edmond);
//créneau pour demain

const c3 = new Creneau(new Date(0,0,0,15,15), 30, edmond)

//Création du patient
const adhemar = new Patient(
    "Pamamobe",
    "Adhémar",
    "0753428619",
    "M",
    1921121920201421,
    new Date(1992, 10, 21), // novembre = 10
);
const hillary = new Patient(
    "Vambuce",
    "Hillary",
    "0123456789",
    "F",
    2870602440101541,
    new Date(1987, 5, 2),
    "Allergie aux arachides"
);

let demain = new Date()
demain.setDate(demain.getDate() + 1)
//Création des RDV
const rendezVousData = [
    new RendezVous(c1, adhemar, new Date()),
    new RendezVous(c2, hillary, new Date()),
    new RendezVous(c3, adhemar, demain)
];

//création du calendrier
window.onload = () => {
    new CalendarAvecRdv("datePicker", "calendar", "rdv-details", rendezVousData);
};
