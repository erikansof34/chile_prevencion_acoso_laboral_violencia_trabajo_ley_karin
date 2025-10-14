export function init() {
  let cardActual = 0;
  const totalCards = 3;

  // Hacer la función navegarCard disponible globalmente para los onclick
  window.navegarCard = function (direccion) {
    // Ocultar la card actual
    const cards = document.querySelectorAll('.card-educativa');
    cards[cardActual].style.display = 'none';

    // Cambiar a la siguiente/anterior card
    cardActual += direccion;

    // Verificar límites
    if (cardActual < 0) {
      cardActual = 0;
    } else if (cardActual >= totalCards) {
      cardActual = totalCards - 1;
    }

    // Mostrar la nueva card
    cards[cardActual].style.display = 'flex';

    // Actualizar textos de botones
    actualizarBotones();
  }

  function actualizarBotones() {
    const botonesAnterior = document.querySelectorAll('.btn-anterior');
    const botonesSiguiente = document.querySelectorAll('.btn-siguiente');

    // Actualizar botón anterior
    botonesAnterior.forEach(boton => {
      boton.style.visibility = cardActual === 0 ? 'hidden' : 'visible';
    });

    // Actualizar botón siguiente
    botonesSiguiente.forEach(boton => {
      if (cardActual === totalCards - 1) {
        boton.textContent = 'Finalizar';
      } else {
        boton.textContent = 'Siguiente →';
      }
    });
  }

  // Inicializar: mostrar solo la primera card
  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card-educativa');
    cards.forEach((card, index) => {
      if (index !== 0) {
        card.style.display = 'none';
      }
    });

    // Configurar estado inicial de los botones
    actualizarBotones();
  });
}