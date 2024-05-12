const button = document.getElementById('btn');

button.addEventListener('click',manejadorClick);

function manejadorClick(event) {
    console.log('Haz dado click en el botón ');
    console.log('El evento fue activado por:')
    console.log(event.target);//elemento que activo el evento
}