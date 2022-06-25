     //Ham tao 100 hinh tron
     let createCircle = () => {
        for (let i = 0; i < 50; i++) {
            document.body.insertAdjacentHTML('afterbegin', '<div class="circle"></div>');
        }
    }
    createCircle();
    const circle = document.querySelectorAll('.circle');
    let color = ['red', 'green', 'blue'];
     //Ham tra ve gia tri ngau nhien tu min->max
     let getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
    //Ham doi mau
    let changeColor = () => {
        circle.forEach((item) => {
            item.classList.add(color[getRandomIntInclusive(0,2)]);
            item.classList.remove(color[getRandomIntInclusive(0,2)]);
        })
    }
    changeColor();
    setInterval(changeColor,500);