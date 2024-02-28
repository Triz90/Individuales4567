$(document).ready(function() {
	mostrarFecha();
	newyear_countdown();
});

function mostrarFecha() {
const now = new Date();
	switch(now.getDay()) {
		case 0:
			var day_name = "Domingo";
			break;
		case 1:
			var day_name = "Lunes";
			break;
		case 2:
			var day_name = "Martes";
			break;
		case 3:
			var day_name = "Miercoles";
			break;
		case 4:
			var day_name = "Jueves";
			break;
		case 5:
			var day_name = "Viernes";
			break;
		case 6:
			var day_name = "Sabado";
			break;
		default:
			var day_name = "<Error checking day!>";
			break;
	}
	switch(now.getMonth()) {
		case 0:
			var month_name = "Enero";
			break;
		case 1:
			var month_name = "Febrero";
			break;
		case 2:
			var month_name = "Marzo";
			break;
		case 3:
			var month_name = "Abril";
			break;
		case 4:
			var month_name = "Mayo";
			break;
		case 5:
			var month_name = "Junio";
			break;
		case 6:
			var month_name = "Julio";
			break;
		case 7:
			var month_name = "Agosto";
			break;
		case 8:
			var month_name = "Septiembre";
			break;
		case 9:
			var month_name = "Octubre";
			break;
		case 10:
			var month_name = "Noviembre";
			break;
		case 11:
			var month_name = "Diciembre";
			break;
		default:
			var month_name = "<Error checking month!>";
			break;
	}
	alert("Hoy es " + day_name + " " + now.getDate() + " de " + month_name + " de " + now.getFullYear() + ", y son las " + now.getHours() + " horas, " + now.getMinutes() + " minutos con " + now.getSeconds() + " segundos");
};

function newyear_countdown() {
		const days=document.querySelector("#days_to_newyear");
		const hours=document.querySelector("#hours_to_newyear");
		const minutes=document.querySelector("#minutes_to_newyear");
		const seconds=document.querySelector("#seconds_to_newyear");

		const currentYear=new Date().getFullYear();
		const newYear=new Date(currentYear+1,1,1,0,0,0);

		function UpdateTime(){
			const currentDate=new Date();
			const diff=newYear-currentDate;
			const d=Math.floor(diff/1000/60/60/24);
			const h=Math.floor((diff/1000/60/60)%24);
			const m=Math.floor((diff/1000/60)%60);
			const s=Math.floor((diff/1000)%60);

			days.innerHTML=d<10?"0"+d:d;
			hours.innerHTML=h<10?"0"+h:h;
			minutes.innerHTML=m<10?"0"+m:m;
			seconds.innerHTML=s<10?"0"+s:s;
		}
		setInterval(UpdateTime,1000);
};
