$(document).ready(function() {
    // Agregar smooth scroll a todos los enlaces
    $("a").on('click', function(event) {
        // Asegurarse de que this.hash tenga un valor antes de anular el comportamiento predeterminado
        if (this.hash !== "") {
            // Prevenir comportamiento predeterminado del enlace
            event.preventDefault();

            // Guardar el valor del hash
            var hash = this.hash;

            // Usar jQuery's animate() para hacer scroll suavemente a la sección correspondiente
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Añadir hash (#) a la URL cuando se haya terminado de hacer scroll (comportamiento de ventana.location)
                window.location.hash = hash;
            });
        } // Fin if
    });
});
