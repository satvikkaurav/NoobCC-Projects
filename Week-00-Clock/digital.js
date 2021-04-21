function clock(){
    let d=new Date();
    let hour=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    let month=d.getMonth();
    let year=d.getFullYear();
    let day=d.getDay();
    let date=d.getDate();

    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var myMonth=['January','February','March','April','May','June','July','August','September','October','November','December'];

    document.getElementsByClassName('day')[0].innerHTML=weekday[day];
    document.getElementsByClassName('date')[0].innerHTML=date +' '+ myMonth[month]+ ' ' + year;
    document.getElementsByClassName('time')[0].innerHTML=hour + ' : ' + min + ' : ' + sec;

    if(sec<10){
        document.getElementsByClassName('time')[0].innerHTML=hour + ' : ' + min + ' : ' + '0'+sec;
    }
    if(min<10){
        document.getElementsByClassName('time')[0].innerHTML=hour + ' : ' + '0' + min + ' : ' + sec;
    }
    if(hour<10){
        document.getElementsByClassName('time')[0].innerHTML='0' + hour + ' : ' + min + ' : ' + sec;
    }
    
}
setInterval(clock, 10);