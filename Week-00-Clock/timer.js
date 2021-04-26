var min = 10;
var sec = 0;

let time=10*60;

function startTimer() {
  timer();
  setInterval(timer, 1000);
}
function timer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (time >= 0) {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    time--;
  }
}

//Increase

// function increase() {
//   document.getElementById("in-min").addEventListener("click", function () {
//     min = min + 1;
//     document.getElementById("minutes").innerHTML = min;
//     console.log("incresed-min");
//   });
//   document.getElementById("in-sec").addEventListener("click", function () {
//     if (sec < 59) {
//       sec = sec + 1;
//     }
//     document.getElementById("seconds").innerHTML = sec;
//     console.log("incresed-sec");
//   });
// }
// //Decrease

// function decrease() {
//   document.getElementById("dec-min").addEventListener("click", function () {
//     if (min > 0) {
//       min = min - 1;
//       document.getElementById("minutes").innerHTML = min;
//       console.log("decreased-min");
//     }
//   });
//   document.getElementById("dec-sec").addEventListener("click", function () {
//     if (sec > 0) {
//       sec = sec - 1;
//       document.getElementById("seconds").innerHTML = sec;
//       console.log("incresed-sec");
//     }
//   });
// }
