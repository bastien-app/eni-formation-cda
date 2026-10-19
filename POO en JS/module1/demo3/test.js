import {Client} from "./Client.js";
import {Voiture} from "./Voiture.js";



let v1 = new Voiture();

v1.immat = "XX254XX";
v1.marque = "Mercedes";
v1.modele = "SLK";
v1.kilometrage = 100;
v1.vitesse = 0;
v1.vitesseMax = 230;
v1.boiteDeVitesse = "automatique";
v1.energie = "essence";
v1.categorie = "cabriolet";

//comportements de mon objet v1 de type Voiture
console.log(v1.afficherDetailVoiture()); //affiche le detail de v1
v1.demarrer(); //v1 demarre
for (let i = 0; i < 20; i++) {
    v1.accelerer(); //v1 accélère jusqu'à 100km/h
}
console.log(v1.afficherDetailVoiture()); //affiche le detail de v1
v1.demarrer();
for (let i = 0; i < 10; i++) {
    v1.freiner();//v1 freine jusqu'à 50km/h
}
console.log(v1.afficherDetailVoiture()); //affiche le detail de v1
v1.tourner(10);
for (let i = 0; i < 9; i++) {
    v1.freiner();//v1 freine jusqu'à 0km/h
}
console.log(v1.afficherDetailVoiture()); //affiche le detail de v1
v1.arreter();
v1.freiner();
v1.arreter();


//creation de c1 de type Client (obtention d'une instance de Client)
let c1= new Client();
//hydratation des attributs de mon objet c1 de type Client
c1.noClient = 102530;
c1.nom = "Mario";
c1.prenom = "Luigi";
c1.adresse = "10 allée des Lilas";
c1.dateNaissance = new Date(1961, 1, 1);
c1.noPermis = "12487593Z125";
//comportements de mon objet c1 de type Client
console.log(c1.afficherDonnesClient());