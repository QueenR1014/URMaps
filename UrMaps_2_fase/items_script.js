'use strict'

console.log('items scrip loaded');

//animacion de los desplegables 
document.querySelectorAll('.Button .btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento de clic a todos los botones con la clase "Button_config"
    document.querySelectorAll('.Button_config').forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Obtener el desplegable correspondiente a este botón
            var dropdownContent = this.nextElementSibling;
            
            // Toggle la clase "active" para mostrar u ocultar el desplegable
            dropdownContent.classList.toggle('active');
            
            // Evitar que el evento se propague hacia arriba y active el evento de cierre en el documento
            event.stopPropagation();
        });
    });
    
    // Agregar evento de clic al documento para cerrar los desplegables si se hace clic fuera de ellos
    document.addEventListener('click', function(event) {
        // Obtener todos los desplegables
        var dropdowns = document.querySelectorAll('.dropdown-content');
        
        // Ocultar todos los desplegables
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('active');
        });
    });
});
