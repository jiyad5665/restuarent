let right=document.getElementById("right")
function showtime(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var session='AM';
    let text;
    if(h==0 ){
        h=12;
    }
    if(h>12){
        h=h-12;
        session='PM';
    }
    if(h>18){
    text="Restuarent is closed"
    document.getElementById("para1").style.color="red"

   document.getElementById("para1").innerText=text;
    }
    else{
        text="Restuarent is open";
        document.getElementById("para1").style.color="green"
        document.getElementById("para1").innerText=text;
    }
    h=(h<10)?"0"+h:h;
    m=(h<10)?"0"+m:m;
    s=(h<10)?"0"+s:s;
var time;
  let hour=document.getElementById("hour")
  let minute=document.getElementById("minute")  
  let second=document.getElementById("second")
  hour.innerText=h;
  minute.innerText=m;
  second.innerText=s; 
  document.getElementById("text").innerText=session
 
  console.log(time)
  setTimeout(showtime,1000) 
}
showtime();