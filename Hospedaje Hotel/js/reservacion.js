function reservar() {
  const adulto = parseInt(document.querySelector('#adulto').value);
  const menor = parseInt(document.querySelector('#menor').value);
  const nombre = document.querySelector('#nombre').value;
  const correo = document.querySelector('#correo').value;
  const tipoHabitacion = document.querySelector('#tipo-habitacion').value;
  const numHabitaciones = parseInt(document.querySelector('#num-habitaciones').value);
  const precioPorHabitacion = 900; 

  if (adulto <= 0) {
    alert('Debe ingresar al menos un adulto');
    return;
  }
  if (adulto == 1 && menor > 4) {
    alert('Solo puede incluir hasta 4 menores');
    return;
  }

  if (adulto == 2 && menor > 3) {
    alert('Solo puede incluir hasta 3 menores');
    return;
  }

  if (adulto == 3 && menor > 2) {
    alert('Solo puede incluir hasta 2 menores');
    return;
  }

  if (adulto >= 4 && menor >= 0) {
    alert('No se pueden incluir menores');
    return;
  }
  const precioTotal = precioPorHabitacion * numHabitaciones * adulto;

  const reserva = {
    adulto: adulto,
    menor: menor,
    nombre: nombre,
    correo: correo,
    tipoHabitacion: tipoHabitacion,
    numHabitaciones: numHabitaciones,
    precioTotal: precioTotal,
  };


  let reservas = JSON.parse(localStorage.getItem('reservas')) || [];

  reservas.push(reserva);

  localStorage.setItem('reservas', JSON.stringify(reservas));

  window.open("reservas.html", width="800", height="500");
}

