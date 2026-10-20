export class Calendar {

    static DAY_HEADER_CLASS = "day-header"
    static DAY_CELL_CLASS = "day-cell"

    constructor(datePickerId, calendarId) {
        this.datePicker = document.getElementById(datePickerId);
        this.calendarDiv = document.getElementById(calendarId);

        //Événement
        this.datePicker.addEventListener("input", () => this.renderCalendar());

        //Affichage initial
        this.renderCalendar();
    }


    generateCalendar(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const calendar = [];

        let startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
        let week = Array(7).fill(null);

        for (let day = 1; day <= lastDay.getDate(); day++) {
            week[startDay] = day;
            startDay++;
            if (startDay > 6) {
                calendar.push(week);
                week = Array(7).fill(null);
                startDay = 0;
            }
        }

        calendar.push(week);
        return calendar;
    }

    renderCalendar() {
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth();

        if (this.datePicker.value) {
            const [y, m] = this.datePicker.value.split("-");
            year = parseInt(y);
            month = parseInt(m) - 1;
        }

        const calendar = this.generateCalendar(year, month);

        //Vide le calendrier
        this.calendarDiv.innerHTML = "";

        //Entêtes
        ["L", "Ma", "Me", "J", "V", "S", "D"].forEach((d) => {
            const div = document.createElement("div");
            div.className = Calendar.DAY_HEADER_CLASS;
            div.innerText = d;
            this.calendarDiv.appendChild(div);
        });

        //Jours
        calendar.forEach((week) => {
            week.forEach((day) => {
                const div = document.createElement("div");
                if (day) {
                    div.innerText = day;
                    div.className = Calendar.DAY_CELL_CLASS;
                }
                this.calendarDiv.appendChild(div);
            });
        });
    }
}

