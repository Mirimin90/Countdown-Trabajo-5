
/*
Cree la función JavaScript mostrarFecha(), la que debe desplegar la fecha y hora
actuales en formato “Hoy es [DIA SEMANA] [DIA] de [MES] de [AÑO], y son las [HORA]
horas, [MINUTOS] minutos con [SEGUNDOS] segundos”. El campo [DIA SEMANA] debe
ser de texto correspondiente al día de la semana.
*/


const date = new Date();
const weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var diaSemana = weekday[date.getDay()];
var dia = [date.getDate()];
var mes = month[date.getMonth()];
var año = date.getFullYear();
var hora = date.getHours();
var min = date.getMinutes();
var seg = date.getSeconds();


alert("Hoy es " + diaSemana +
    " " + dia +
    " de " + mes +
    " de " + año +
    " y son las " + hora +
    " horas, " + min +
    " minutos con " + seg +
    " segundos")


// codigo contador


var deadline = new Date(año, 11, 31, 23, 59, 59).getTime()
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    var dia = Math.floor(t / (1000 * 60 * 60 * 24));
    var min = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seg = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("tiemporestante").innerHTML = dia + " días "
        + min + " minutos " + seg + " segundos ";
}, 1000);


