function date()
{
    let time = new Date;
    let hour, min;
   
    hour = time.getHours();
    min = time.getMinutes();
    console.log(hour);
    document.getElementById('hour').innerText=hour <= 9 ? "0" + hour : hour;
    document.getElementById('min').innerText=min <= 9 ? "0" + min : min;
    document.getElementById('sec').innerHTML=time.getSeconds() <= 9 ? "0" + time.getSeconds() : time.getSeconds();
        

    let t = setTimeout(function(){ date() }, 1000);
}