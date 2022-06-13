// let a = 10;
// let b = 20;
// let tong = a + b;
// console.log('tong ' + a + ' + ' + b + ' = ' + tong);
// console.log(`tong ${a} + ${b} = ${tong}`);

// let colors = ['red','blue','green'];
// colors.forEach(element => {
//     console.log(element);
// });
// console.log(colors.length);



// tao 50 hinh tron 
// let colors = ['red', 'blue', 'green'];
// let colorslength = colors.length;
// for (let i = 0; i <= 50; i++) {
//     // document.writeln(`<div class="tron" style="background:${element}"></div>`);
//     document.writeln(`<div class="tron" style="background:${colors[i % colorslength]}"></div>`);
// };

//opbject
let student = {
    name : 'Nguyen Van A',
    yob : 2000,
    score: [10 ,5,7,9],
    getAge: function(){
        return 2022 - this.yob;
    },
    getScore : function() {
        let sum = 0;
        this.score.forEach(element => {
            sum += element
        });
        return sum/this.score.length;
    }
}
console.log(student.getScore());