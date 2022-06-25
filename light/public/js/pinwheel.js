let pinwheel=document.querySelector("#chongchong");
let start=document.querySelector("#start");
let stop=document.querySelector("#stop");

let interval;
let tocDo=50;
let dem=10;
let TimeID;


start.addEventListener('click',function(){
if(TimeID==undefined){
    TimeID=setInterval(function(){
        dem=dem+10;
        pinwheel.style.transform=`rotate(${dem}deg`;
    },tocDo);
    }
});
    stop.addEventListener('click',function(){

    clearInterval(TimeID);
    TimeID=undefined;
});