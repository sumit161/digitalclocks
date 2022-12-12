cl=console.log;
request=document.getElementById("digitalclock");

function digiclock(){
let date=new Date();
let hr=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();
let milli=date.getMilliseconds();
let session="AM";
if(hr>=12){session="PM"};
if(hr>=13){hr=hr-12};
if(hr<10){hr="0"+hr};
if(min<10){min="0"+min};
if(sec<10){sec="0"+sec};
if(milli<10){milli="000"+milli}
else if(milli<100){milli="00"+milli}
else if(milli<1000){milli="0"+milli}
result=`${hr}:${min}:${sec}:${milli} ${session}`
request.innerHTML=result;
setTimeout(digiclock,100)
}
digiclock()
