var productos = document.querySelectorAll('.img');
var imagenAmpliada = document.querySelector('.imagen-ampliada');

productos.forEach(function(producto) {
  producto.addEventListener('click', function() {
    var nuevaUrl = this.getAttribute('data-imagen-ampliada');
    imagenAmpliada.setAttribute('src', nuevaUrl);
  });
});