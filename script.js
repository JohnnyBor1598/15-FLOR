var music = document.getElementById("music");

var icon = document.getElementById("iconMusic");


function toggleMusic(){


if(music.paused){

music.play();

icon.classList.add("rotating");

}else{

music.pause();

icon.classList.remove("rotating");

}


}




/* COUNTDOWN */

let fecha = new Date("march 14, 2026 21:00:00");

setInterval(()=>{

let hoy = new Date();

let falta = fecha - hoy;

let dias = Math.floor(falta / 1000 / 60 / 60 / 24);

document.getElementById("countdown").innerHTML=

"Faltan " + dias + " días";

},1000);


function confirmarAsistencia(){

var telefono = "593969143495"; // TU NUMERO

var mensaje = "Confirmo mi asistencia a los XV de Flor Borbor";

var url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

window.open(url, "_blank");

}