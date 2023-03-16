
const reserva = JSON.parse(localStorage.getItem('reservas')).pop();
document.getElementById('adulto').textContent = reserva.adulto;
document.getElementById('menor').textContent = reserva.menor;
document.getElementById('nombre').textContent = reserva.nombre;
document.getElementById('correo').textContent = reserva.correo;
document.getElementById('tipo-habitacion').textContent = reserva.tipoHabitacion;
document.getElementById('precio').textContent = "$"+reserva.precioTotal;
document.getElementById('num-habitaciones').textContent = reserva.numHabitaciones;
