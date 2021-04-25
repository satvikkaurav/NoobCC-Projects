var hours = 0;
var min = 0;
var sec = 0;
//Increase
document.getElementById('in-hr').addEventListener("click",function(){
    
    hours=hours+1;
    if (hours < 10) {
        document.getElementById('hours').innerHTML = '0' + hours;
    }
    else {
        document.getElementById('hours').innerHTML = hours;
    }
    console.log('incresed-hrs')
})
document.getElementById('in-min').addEventListener("click",function(){
    if(min<59){
    min=min+1;}
    if (min < 10) {
        document.getElementById('minutes').innerHTML = '0' + min;
    }
    else {
        document.getElementById('minutes').innerHTML = min;
    }
    console.log('incresed-min')
})
document.getElementById('in-sec').addEventListener("click",function(){
    if(sec<59){
    sec=sec+1;}
    document.getElementById('seconds').innerHTML=sec;
    console.log('incresed-sec')
})
//Decrease
if(min>=0&&sec>=0&&hours>=0){
document.getElementById('dec-hr').addEventListener("click",function(){
    hours=hours-1;
    if (hours < 10) {
        document.getElementById('hours').innerHTML = '0' + hours;
    }
    else {
        document.getElementById('hours').innerHTML = hours;
    }
    console.log('decreased-hrs')
})
document.getElementById('dec-min').addEventListener("click",function(){
    min=min-1;
    if (min < 10) {
        document.getElementById('minutes').innerHTML = '0' + min;
    }
    else {
        document.getElementById('minutes').innerHTML = min;
    }
    console.log('incresed-min')
})
document.getElementById('dec-sec').addEventListener("click",function(){
    sec=sec-1;
    document.getElementById('seconds').innerHTML=sec;
    console.log('incresed-sec')
})
}


function startTimer() {
    function timer() {
        if (min == 60) {
            min = 0;
            hours = hours - 1;
            if (hours < 10) {
                document.getElementById('hours').innerHTML = '0' + hours;
            }
            else {
                document.getElementById('hours').innerHTML = hours;
            }
        }
        else if (sec == 60) {
            sec = 0;
            min = min - 1;
            if (min < 10) {
                document.getElementById('minutes').innerHTML = '0' + min;
            }
            else {
                document.getElementById('minutes').innerHTML = min;
            }
        }
        else if (sec < 60 && sec >0) {
            sec = sec - 1;
            if (sec < 10) {
                document.getElementById('seconds').innerHTML = '0' + sec;
            }
            else {
                document.getElementById('seconds').innerHTML = sec;
            }
        }
    }
    s=setInterval(timer,1000);
    while(min==0&&sec==0&&hours==0){
        clearInterval(s);
    }
}
function stopTimer() {
    clearInterval(s);
}