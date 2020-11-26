let doc = document;

let day = new Date();

let weekday=new Array(7);
    weekday[0]="sun";
    weekday[1]="mon";
    weekday[2]="tue";
    weekday[3]="wed";
    weekday[4]="thu";
    weekday[5]="fri";
    weekday[6]="sat";


let months=new Array(11);
    months[0]="Jan";
    months[1]="Feb";
    months[2]="Mar";
    months[3]="Apr";
    months[4]="May";
    months[5]="Jun";
    months[6]="Jul";
    months[7]="Aug";
    months[8]="Sep";
    months[9]="Oct";
    months[10]="Nov";
    months[11]="Dec";


doc.querySelector(".element_date_week_day").innerText = weekday[day.getDay()];
doc.querySelector(".element_date_month").innerText = months[day.getMonth()];
doc.querySelector(".element_date_day_num").innerText = day.getDate();
let currentDate = () => {
    let date = new Date();
    let hours = ((date.getHours() < 10) ? '0' : '') + date.getHours();
    let minutes = ((date.getMinutes() < 10) ? '0' : '') + date.getMinutes();
    let seconds = ((date.getSeconds() < 10) ? '0' : '') + date.getSeconds();

    doc.querySelector(".element_hour").innerText = hours;
    doc.querySelector(".element_min").innerText = minutes;
    doc.querySelector(".element_date_seconds").innerText = seconds;
}

setInterval(currentDate, 1000);