console.log("Hello world!");

// 1. MENÚ DE NAVEGACIÓN
$(function () {
    "use strict";

    // Abrir menú
    $("#menu-toggle").on("click", function () {
        $("#menu").removeClass("translate-end").addClass("translate-start");
    });

    // Cerrar menú
    $("#close, #menu a").on("click", function () {
        $("#menu").removeClass("translate-start").addClass("translate-end");
    });

    // Desplazamiento suave o navegación a otro HTML
    $("#menu a").on("click", function (event) {
        var target = $(this).attr("href"); // Obtén el destino del enlace
        
        // Verificar si el enlace es a una sección interna
        if (target.startsWith("#")) { 
            event.preventDefault(); // Previene el comportamiento predeterminado
            $("html, body").animate(
                {
                    scrollTop: $(target).offset().top, // Calcula la posición de la sección
                },
                200 // Duración de la animación en milisegundos
            );
        }
        // Verificar si el enlace es a otro archivo HTML
        else if (target && target !== "#") {
            // Permitir la navegación a otro archivo HTML sin prevenir el comportamiento predeterminado
            window.location.href = target;
        }
    });
});


// 2. BOTÓN PARA VOLVER ARRIBA
$(function () {
    let $backToTopButton = $("#btn-back-to-top"); // Cambiado para mayor claridad

    // Mostrar el botón cuando se hace scroll hacia abajo
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 20) {
            $backToTopButton.fadeIn(); // Mostrar con animación suave
        } else {
            $backToTopButton.fadeOut(); // Ocultar con animación suave
        }
    });

    // Acción para llevar al inicio de la página
    $backToTopButton.on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});

// 3. MODAL DE COMPRA - PRODUCTOS Y MERCH
$(function () {
    // Capturar clic en botones "Comprar" en las tarjetas de productos
    $(".btn-primary.btn-product-buy").on("click", function () {
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
  
      // Mostrar el modal de producto
      $("#productModal").modal("show");
    });
  
    // Al dar clic en "Pagar" dentro del modal de checkout
    $("#checkoutModal #payButton").on("click", function (event) {
      // Prevenir el envío del formulario (opcional si es un formulario)
      event.preventDefault();
  
      // Cerrar el modal de la pasarela de compra
      $("#checkoutModal").modal("hide");
    });
  });

// 4. SUSCRIPCIÓN A LA NEWSLETTER
$(function () {
    $('#newsletterForm').on('submit', function (event) {
        event.preventDefault();
        const emailInput = $('#email-newsletter'); // Selector único para formulario de newsletter
        const emailValue = emailInput.val();

        // Verificar si el email es válido
        if (emailInput[0].checkValidity()) {
            // Mostrar el email en el contenido de la ventana
            $('#user-email').text(emailValue);

            // Abrir la modal confirmando la suscripción
            $('#newsletterModal').modal('show'); // Usar modal específico para newsletter
        } else {
            alert('Por favor, introduce una dirección de correo válida.');
        }
    });
});

  