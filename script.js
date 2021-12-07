const time = () => {
const week = ['Воскресенье', "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

let Data = new Date();
let Year = Data.getFullYear();
let Month = Data.getMonth();
let Month1 = Data.getMonth() + 1;
let Day = Data.getDate();
let hour = Data.getHours();
let minute = Data.getMinutes();
let second = Data.getSeconds();

function declOfNum(n, textForms) {  
    n = Math.abs(n) % 100; 
    let n1 = n % 10;
    if (n > 10 && n < 20) { return textForms[2]; }
    if (n1 > 1 && n1 < 5) { return textForms[1]; }
    if (n1 == 1) { return textForms[0]; }
    return textForms[2];
}

function addZero(x) {
    //x = (x < 10) ? '0' + x : x;
    if (x < 10) {
        return '0' + x;
    } else {
        return x;
    }
}


const textTime = 'Сегодня ' + week[Data.getDay()] + ", " + Day + " " + month[Month] + " " + Year + " года" + ',' + 
" " + hour + declOfNum(hour, [" час ", " часа ", " часов "]) + minute + declOfNum(minute, [" минута ", " минуты ", " минут "]) +
second + declOfNum(second, [" секунда ", " секунды ", " секунд "]);

const timer = addZero(Day) + "." + addZero(Month1) + "." + Year + " - " + addZero(hour) + ':' + addZero(minute) + ':' + addZero(second);

document.querySelector(".text-time").textContent = textTime;
document.querySelector(".time").textContent = timer;

};




setInterval(time, 1000);