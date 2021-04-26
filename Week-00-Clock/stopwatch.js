var hours = 0;
var min = 0;
var sec = 0;
var s;

function startTimer() {
    function timer() {
        if (min == 59) {
            min = 0;
            hours = hours + 1;
            if (hours < 10) {
                document.getElementById('hours').innerHTML = '0' + hours;
            }
            else {
                document.getElementById('hours').innerHTML = hours;
            }
        }
        else if (sec == 59) {
            sec = 0;
            min = min + 1;
            if (min < 10) {
                document.getElementById('minutes').innerHTML = '0' + min;
            }
            else {
                document.getElementById('minutes').innerHTML = min;
            }
        }
        else if (sec < 59) {
            sec = sec + 1;
            if (sec < 10) {
                document.getElementById('seconds').innerHTML = '0' + sec;
            }
            else {
                document.getElementById('seconds').innerHTML = sec;
            }
        }
    }
    s=setInterval(timer,1000);
}
function stopTimer() {
    clearInterval(s);
}

function resetTimer() {
    min=0;
    sec=0;
    hours=0;
    document.getElementById('seconds').innerHtml = sec;
    document.getElementById('minutes').innerHtml = min;
    document.getElementById('hours').innerHtml = hours;
}