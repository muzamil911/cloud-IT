const monthYear = document.getElementById("monthYear");
const calendarBody = document.getElementById("calendarBody");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let date = new Date();

function renderCalendar() {
    calendarBody.innerHTML = "";
    const year = date.getFullYear();
    const month = date.getMonth();

    monthYear.innerText = date.toLocaleString('default', { month: 'long', year: 'numeric' });

    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    let day = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");
            if (i === 0 && j < firstDay) {
                cell.classList.add("empty");
            } else if (day > lastDay) {
                break;
            } else {
                cell.innerText = day;
                if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                    cell.classList.add("today");
                }
                day++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

prevBtn.onclick = () => { date.setMonth(date.getMonth() - 1); renderCalendar(); };
nextBtn.onclick = () => { date.setMonth(date.getMonth() + 1); renderCalendar(); };

renderCalendar();