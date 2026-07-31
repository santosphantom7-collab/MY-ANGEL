const stars = document.getElementById("stars");

for(let i=0;i<250;i++){

let star=document.createElement("div");

star.classList.add("star");

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*3+"s";

star.style.opacity=Math.random();

stars.appendChild(star);

}

const message="The Girl Who Changed My Universe.";

let index=0;

function typeWriter(){

if(index<message.length){

document.getElementById("typewriter").innerHTML+=message.charAt(index);

index++;

setTimeout(typeWriter,75);

}

}

typeWriter();

document.getElementById("beginButton").addEventListener("click",()=>{

alert("Welcome, Kiki ❤️\n\nYour journey is about to begin...");

});
