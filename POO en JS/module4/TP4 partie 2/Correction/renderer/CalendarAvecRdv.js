// Étend Calendar pour ajouter le clic sur les jours
import {Calendar} from "./Calendar.js";

export class CalendarAvecRdv extends Calendar {

    constructor(datePickerId, calendarId, rdvId, rendezVousData) {
        super(datePickerId, calendarId);
        this.rdvDiv = document.getElementById(rdvId)
        this.rendezVousData = rendezVousData
    }


    renderCalendar() {
        super.renderCalendar();
        // Ajout des événements de clic sur les cases
        const cells = this.calendarDiv.querySelectorAll(`.${CalendarAvecRdv.DAY_CELL_CLASS}`);
        cells.forEach((cell) => {
            cell.addEventListener("click", () => {
                const day = cell.innerText;
                this.showRdvForDay(day);
            });
        });
    }

    showRdvForDay(day) {
        let year, month;
        if (this.datePicker.value) {
            const [y, m] = this.datePicker.value.split("-");
            year = parseInt(y);
            month = parseInt(m) - 1;
        } else {
            const today = new Date();
            year = today.getFullYear();
            month = today.getMonth();
        }

        const selectedDate = new Date(year, month, day);

        //Filtrer les rendez-vous de ce jour
        const rdvs = this.rendezVousData.filter(
            (rdv) =>
                rdv.dateRDV.toLocaleDateString() === selectedDate.toLocaleDateString()
        );

        const rdvDiv = document.getElementById(this.rdvId)

        //Affichage dans le HTML
        this.rdvDiv.innerHTML = `<h2>Rendez-vous du ${selectedDate.toLocaleDateString()}</h2>`;
        if (rdvs.length === 0) {
            this.rdvDiv.innerHTML += "<p>Aucun rendez-vous.</p>";
        } else {
            rdvs.forEach((rdv) => {
                const p = document.createElement("p");
                p.innerHTML = `
                    Médecin : Dr ${rdv.creneau.medecin.nom} ${rdv.creneau.medecin.prenom}<br>
                    Patient : ${rdv.patient.nom} ${rdv.patient.prenom}<br>
                    Horaire : ${rdv.creneau.afficher()}
                `;
                this.rdvDiv.appendChild(p);
            });
        }
    }
}