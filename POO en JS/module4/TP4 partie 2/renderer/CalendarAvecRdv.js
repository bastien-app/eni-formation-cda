import {Calendar} from "./Calendar.js";

export class CalendarAvecRdv extends Calendar{



    constructor(datePickerId, calendarId, rdvId, tableRDV) {
        super(datePickerId, calendarId);
        this.rdvId = document.getElementById(rdvId);
        this.tableRDV = tableRDV;
    }

    showRdvForDay(day) {
        let i = 0;
        this.rdvId.innerHTML = ""
        for (i; i < this.tableRDV.length; i++) {

            if (this.tableRDV[i].dateRDV.getDate() === day.getDate() && this.tableRDV[i].dateRDV.getFullYear() === day.getFullYear() && this.tableRDV[i].dateRDV.getMonth() === day.getMonth()) {

                this.rdvId.innerHTML += `${this.tableRDV[i].afficher()}`;

            }


        }
        if(this.rdvId.innerHTML === "") {
            this.rdvId.innerHTML += `<h2>Aucun rendez-vous</h2>`;
        }
    }




        renderCalendar()
        {
            super.renderCalendar();
            this.calendarDiv.addEventListener("click", (event) => {
                let today = new Date();
                let year = today.getFullYear();
                let month = today.getMonth();

                if (this.datePicker.value) {
                    const [y, m] = this.datePicker.value.split("-");
                    year = parseInt(y);
                    month = parseInt(m) - 1;
                }
                let day = parseInt(event.target.textContent);

                let date = new Date(year, month, day);
                this.showRdvForDay(date);
            });
        }

}





