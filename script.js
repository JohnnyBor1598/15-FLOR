const music = document.getElementById("music");
const icon = document.getElementById("iconMusic");

let isPlaying = false;

function toggleMusic(){

if(isPlaying){

music.pause();

icon.classList.remove("rotating");

}else{

music.play();

icon.classList.add("rotating");

}

isPlaying = !isPlaying;

}



//////////////////////////////////////////////////
// CONTADOR REGRESIVO
//////////////////////////////////////////////////

const fechaEvento = new Date("Mar 14, 2026 21:00:00").getTime();

const intervalo = setInterval(function(){

const ahora = new Date().getTime();

const diferencia = fechaEvento - ahora;

const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

document.getElementById("dias").innerHTML = dias;
document.getElementById("horas").innerHTML = horas;
document.getElementById("minutos").innerHTML = minutos;
document.getElementById("segundos").innerHTML = segundos;

},1000);



//////////////////////////////////////////////////
// CONFIRMAR ASISTENCIA
//////////////////////////////////////////////////

function confirmarAsistencia(){

window.open("https://wa.me/593961335980?text=Confirmo mi asistencia a los XV de Flor Maria Borbor Yagual");

}



//////////////////////////////////////////////////
// GUARDAR FECHA EN CALENDARIO
//////////////////////////////////////////////////

function guardarFecha(){

const url = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=XV+Flor+Maria+Borbor+Yagual&dates=20260315T020000Z/20260315T050000Z&details=Te+esperamos&location=Sala+Julipos";

window.open(url);

}



window.addEventListener("scroll", function(){

document.querySelectorAll(".card").forEach(function(card){

let position = card.getBoundingClientRect().top;

let screen = window.innerHeight;

if(position < screen - 100){

card.classList.add("visible");

}

});

});
