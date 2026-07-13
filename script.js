const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");
const message = document.getElementById("message");


// باز کردن کارت + پخش آهنگ

openBtn.addEventListener("click",()=>{


    // پخش موسیقی
    music.play();


    // نمایش پیام
    message.style.display="block";


    // تغییر متن دکمه
    openBtn.innerHTML="🎉 کارت باز شد";


    // آتش بازی
    firework();


    // ساخت قلب ها
    createHearts();


});



// آتش بازی

function firework(){

confetti({

particleCount:200,

spread:120,

origin:{
y:.6
}

});


setTimeout(()=>{

confetti({

particleCount:150,

spread:100,

origin:{
x:.2,
y:.5
}

});


confetti({

particleCount:150,

spread:100,

origin:{
x:.8,
y:.5
}

});


},700);


}




// ساخت قلب های شناور

function createHearts(){


setInterval(()=>{


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"vw";


heart.style.animationDuration=(Math.random()*5+5)+"s";


heart.style.fontSize=(Math.random()*20+15)+"px";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},9000);



},500);


}




// شمارش معکوس تولد

function countdown(){


// تاریخ تولد 25 تیر
// توجه: ماه های جاوااسکریپت از صفر شروع می‌شوند
// تیر تقریباً July است

let birthday=new Date();

birthday.setMonth(6);
birthday.setDate(16);
birthday.setHours(0);
birthday.setMinutes(0);
birthday.setSeconds(0);



let now=new Date();


let diff=birthday-now;



if(diff<0){

birthday.setFullYear(
birthday.getFullYear()+1
);

diff=birthday-now;

}



let days=Math.floor(
diff/(1000*60*60*24)
);


let hours=Math.floor(
(diff/(1000*60*60))%24
);


let minutes=Math.floor(
(diff/(1000*60))%60
);


let seconds=Math.floor(
(diff/1000)%60
);



document.getElementById("days").innerHTML=
String(days).padStart(2,"0");


document.getElementById("hours").innerHTML=
String(hours).padStart(2,"0");


document.getElementById("minutes").innerHTML=
String(minutes).padStart(2,"0");


document.getElementById("seconds").innerHTML=
String(seconds).padStart(2,"0");

}



setInterval(countdown,1000);

countdown();




// حرکت نور با موس

document.addEventListener("mousemove",(e)=>{


document.body.style.backgroundPosition =

`${e.clientX/50}px ${e.clientY/50}px`;

});