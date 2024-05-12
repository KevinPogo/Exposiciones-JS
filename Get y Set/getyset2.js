// Cambiar dinámicamente el color de fondo al hacer clic en un botón
var miDiv = document.getElementById('container');
var cambiarColorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', function() {
  container.setAttribute('style', 'width: 200px; height: 200px; background-color: #FF0000;');
});
