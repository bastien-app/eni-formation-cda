export class Calendar{

    constructor(idInput, idDiv){
        this.idInput = document.getElementById(idInput);
        this.idDiv = document.getElementById(idDiv);
        this.userDate = new Date()
        this.renderCalendar()
        document.addEventListener("change", (event) => {
            this.userDate = new Date(this.idInput.value);
            this.renderCalendar()
        })

    }

    generateCalendar(year, month){
        let date = new Date(year, month+1);
        date.setDate(0);
        let nbJours = date.getDate();
        date.setDate(1);
        date.setMonth(month);
        let calendrier = [];

        let firstDay = (date.getDay() + 6) % 7;

        let i = 1;
        let jours = 0;
        let semaine = [];

        for(jours; jours < firstDay; jours ++){
            semaine[jours] = "";

        }

        while(i <= nbJours){
                if(jours === 7){
                    calendrier.push(semaine);
                    jours = 0;
                    semaine = [];
                }
                semaine[jours] = i;


                i++;
                jours++;
            }


        if(jours <= 7) {
            for (jours; jours < 7; jours ++){
                semaine[jours] = "";

            }
            calendrier.push(semaine);
        }
        return calendrier;

    }

    renderCalendar(){
        let calendrier = this.generateCalendar(this.userDate.getFullYear(), this.userDate.getMonth());

        let html = `
                <div id="calendar" class="day-header">L</div>
                <div id="calendar" class="day-header">Ma</div>
                <div id="calendar" class="day-header">Me</div>
                <div id="calendar" class="day-header">J</div>
                <div id="calendar" class="day-header">V</div>
                <div id="calendar" class="day-header">S</div>
                <div id="calendar" class="day-header">D</div>
            `;



        for(let i = 0; i < calendrier.length; i++){

            for(let j = 0; j < 7; j++){
                if(calendrier[i][j] === ""){
                    html += `<div id="calendar" class="empty-cell" >${calendrier[i][j]}</div>`
                }
                else{
                    html += `<div id="calendar" class="day-cell" >${calendrier[i][j]}</div>`
                }
            }

        }


        this.idDiv.innerHTML = html;
    }


}






