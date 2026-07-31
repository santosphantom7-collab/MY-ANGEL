/* ==========================================
   FOR KIKI ❤️
   script.js
========================================== */

const starsContainer = document.getElementById("stars");
const shootingContainer = document.getElementById("shooting-stars");

/* --------------------------
   Loading Screen
-------------------------- */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loading-screen");

        if (loading) {
            loading.classList.add("hide");
        }

    }, 1800);

});

/* --------------------------
   Typewriter
-------------------------- */

const title =
"The Girl Who Changed My Universe.";

const titleElement =
document.getElementById("typewriter");

let letter = 0;

function typeWriter(){

    if(letter < title.length){

        titleElement.innerHTML +=
        title.charAt(letter);

        letter++;

        setTimeout(typeWriter,75);

    }

}

typeWriter();

/* --------------------------
   Stars
-------------------------- */

for(let i=0;i<300;i++){

    const star =
    document.createElement("div");

    star.classList.add("star");

    if(Math.random()>.8){

        star.classList.add("big");

    }

    if(Math.random()>.9){

        star.classList.add("small");

    }

    star.style.left =
    Math.random()*100+"%";

    star.style.top =
    Math.random()*100+"%";

    star.style.animationDelay =
    Math.random()*5+"s";

    starsContainer.appendChild(star);

}

/* --------------------------
   Shooting Stars
-------------------------- */

function shootingStar(){

    const star =
    document.createElement("div");

    star.className="shooting-star";

    star.style.top =
    Math.random()*40+"%";

    star.style.left =
    (70+Math.random()*25)+"%";

    shootingContainer.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },4000);

}

setInterval(shootingStar,3500);

/* --------------------------
   Begin Button
-------------------------- */

const begin =
document.getElementById("beginJourney");

if(begin){

begin.addEventListener("click",()=>{

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

});

}

/* --------------------------
   Heart Button
-------------------------- */

const heart =
document.getElementById("heartButton");

if(heart){

heart.addEventListener("click",()=>{

heart.innerHTML="💖";

heart.style.transform="scale(1.25)";

setTimeout(()=>{

heart.style.transform="scale(1)";

},300);

createHearts();

});

}

/* --------------------------
   Floating Hearts
-------------------------- */

function createHearts(){

for(let i=0;i<25;i++){

const heart =
document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=
(Math.random()*100)+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=
(18+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

document.body.appendChild(heart);

let y=0;

const rise=setInterval(()=>{

y+=4;

heart.style.bottom=
(-30+y)+"px";

heart.style.opacity=
1-(y/700);

if(y>700){

clearInterval(rise);

heart.remove();

}

},16);

}

}

/* --------------------------
   Fade Elements on Scroll
-------------------------- */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

document.querySelectorAll(

".story-card,.reason-card,.photo,.poem-box,.envelope"

).forEach(el=>{

el.style.opacity=0;

el.style.transform="translateY(60px)";

el.style.transition="1s";

observer.observe(el);

});
