var hours = 0;
var min = 0;
var sec = 0;
document.getElementById('in-hr').addEventListener("click",function(){
    sec=sec+1;
    document.getElementById('hours').innerHTML=sec;
    console.log('incresed-hrs')
})