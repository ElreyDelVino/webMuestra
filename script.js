const botonAbrir = document.getElementById('boton-reserva');
const ventanaModal = document.getElementById('ventana-reserva');
const botonCerrar = document.getElementById('cerrar-modal');
const formulario = document.getElementById('formulario-reserva');

botonAbrir.addEventListener('click', function() {
    ventanaModal.style.display = 'flex';
});

botonCerrar.addEventListener('click', function(){
    ventanaModal.style.display = 'none';
});

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const nombreUsuario = document.getElementById('nombre').value;
    const horaReserva = document.getElementById('hora').value;

    if(horaReserva < "08:00" || horaReserva > "23:00"){
        alert("Lo sentimos, nuestro horario de reservas es de 08:00 a 23:00");
        return;
    }

    alert(nombreUsuario + ' Tu mesa ha sido reservada para las ' + horaReserva );
    ventanaModal.style.display = 'none';

    formulario.reset();
});