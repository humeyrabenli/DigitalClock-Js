var name=prompt("Adınız nedir?");
console.log("Merhaba, " +name)

let myname=document.querySelector("#myName");
myname.innerHTML=name;


function showTime() {
    var date=new Date();
    
    var hours=date.getHours() + '';
    var minutes=date.getMinutes() + '';
    var seconds=date.getSeconds() + '';
    var day=date.getDay();

    if(hours.length<2) {
        hours='0' +hours;

    }
    if(minutes.length<2) {
        minutes='0' + minutes;
    }

    if(seconds.length<2) {
        seconds='0' + seconds;
    }

    var weekDays= ['Pazar', 'Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi']

    var clock=hours + ':' +minutes+ ':' +seconds+ ' ' +weekDays[day];

    document.getElementById('myClock').innerHTML=clock;

    
}

showTime();

setInterval(showTime,1000);
