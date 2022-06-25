const getHour = document.querySelector('.hand-hour');
const getMin = document.querySelector('.hand-min');
const getSec = document.querySelector('.hand-sec');

let clocTimeout = setTimeout(function updateClock() {
    const currentime = new Date();
    const s = currentime.getSeconds() * 6;
    const m = currentime.getMinutes() * 6+ currentime.getMinutes() * 0.5;
    const h = currentime.getHours() * 30 + currentime.getMinutes() * 0.5;
    getSec.style.transform = `rotate(${s}deg)`;
    getMin.style.transform = `rotate(${m}deg)`;
    getHour.style.transform = `rotate(${h}deg)`;
    clocTimeout = setTimeout(updateClock, 1000);
}, 1000);