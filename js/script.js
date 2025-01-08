console.log("Hello world!");

$(document).ready(function () {
    "use strict";

    // Abrir menú
    $("#menu-toggle").click(function () {
        $("#menu").removeClass("translate-end").addClass("translate-start");
    });

    // Cerrar menú
    $("#close, #menu a").click(function () {
        $("#menu").removeClass("translate-start").addClass("translate-end");
    });

    // Desplazamiento suave
    $("#menu a").click(function (event) {
        var target = $(this).attr("href"); // Obtén el destino del enlace
        if (target.startsWith("#")) { // Asegúrate de que es un anclaje interno
            event.preventDefault(); // Previene el comportamiento predeterminado
            $("html, body").animate(
                {
                    scrollTop: $(target).offset().top, // Calcula la posición de la sección
                },
                200 // Duración de la animación en milisegundos
            );
        }
    });
});


// BOTÓN PARA VOLVER ARRIBA

let $myButton = $("#btn-back-to-top");
    // Que aparezca el botón para volver arriba cuando se hace scroll hacia abajo. 

    $(window).on("scroll", function () {
    if ($(window).scrollTop() > 20) {
        $myButton.show();
    } else {
        $myButton.hide();
    }});

    $myButton.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

// MODAL DE COMPRA - PRODUCTOS Y MERCH 
$(document).ready(function () {
    // Capturar clic en botones "Comprar"
    $(".btn-primary").on("click", function () {
      const $card = $(this).closest(".card");
      const title = $card.find("h3").text();
      const price = $card.find("h5").text();
      const description = $card.find(".card-text").text();
      const image = $card.find(".card-img-top").attr("src");

      // Configurar contenido del modal
      $("#modalTitle").text(title);
      $("#modalPrice").text(price);
      $("#modalDescription").text(description);
      $("#modalImage").attr("src", image);

      // Mostrar el modal
      $("#productModal").modal("show");
    });
  });
// SUSCRIPCIÓN A LA NEWSLETTER
$('#newsletterForm').on('submit', function(event) {
    event.preventDefault();
    const emailInput = $('#email-newsletter');
    const emailValue = emailInput.val();

    // Verificar si el email es válido
    if (emailInput[0].checkValidity()) {
        // Mostrar el email en el contenido de la ventana
        $('#user-email').text(emailValue);

        // Abrir la modal confirmando la suscripción
        $('#exampleModal').modal('show');
    } else {
        alert('Please enter a valid email address.');
    }
});


  