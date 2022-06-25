//Ham tra ve gia tri ngau nhien tu min->max
let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
const circle = document.querySelectorAll('.circle');
const scorediv = document.querySelector('#score');
//click vao bong
let score = 0;
let clickcircle = circle.forEach(e => {
    e.addEventListener('click', function () {
        score += parseInt(this.textContent);//chuyen chuoi sang so
        scorediv.textContent = score;
    });
},1000);
//Ham thay doi vi tri
let start = document.querySelector('#btn-start');
start.onclick = () => {
    let changePosition = setTimeout(function setPos() {
        circle.forEach((item) => {
            item.style.left = getRandomIntInclusive(0, 1200) + 'px';
            item.style.top = getRandomIntInclusive(0, 800) + 'px';
        });
        changePosition = setTimeout(setPos, 1500);
    }, 1500);
    // thoi gian choi game
    let game = setTimeout(function () {
        clearTimeout(changePosition);
        alert(" Time out !!! \n your score:" + score);
    }, 10000);
    changePosition();
    game();
}
