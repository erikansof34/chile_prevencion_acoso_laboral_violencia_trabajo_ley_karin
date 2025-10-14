export function init() {
  // Obtener elementos
  const botones = document.querySelectorAll('.btn-interactivo');
  const secciones = document.querySelectorAll('.contenido-seccion');
  
  // Activar primer botón por defecto
  botones[0].classList.add('active');

  // Agregar event listeners a cada botón
  botones.forEach(boton => {
    boton.addEventListener('click', function() {
      const contentType = this.getAttribute('data-content');
      
      // Remover clase active de todos los botones
      botones.forEach(btn => btn.classList.remove('active'));
      
      // Activar botón actual
      this.classList.add('active');
      
      // Cambiar contenido con animación
      cambiarContenido(contentType);
    });
  });

  function cambiarContenido(tipo) {
    // Ocultar todas las secciones
    secciones.forEach(seccion => {
      seccion.classList.remove('active');
    });

    // Mostrar la sección correspondiente con animación
    setTimeout(() => {
      const seccionActiva = document.querySelector(`[data-section="${tipo}"]`);
      if (seccionActiva) {
        seccionActiva.classList.add('active');
        
        // Aplicar animaciones específicas según el tipo
        if (tipo === 'senales') {
          animarSenales();
        } else if (tipo === 'cultura') {
          animarCultura();
        } else if (tipo === 'factores') {
          animarFactores();
        }
      }
    }, 150);
  }

  function animarSenales() {
    const senalItems = document.querySelectorAll('.senal-item');
    senalItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        item.classList.add('animate-fade-up');
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
        item.style.transition = 'all 0.5s ease';
      }, index * 150);
    });
  }

  function animarCultura() {
    const fraseCards = document.querySelectorAll('.frase-card');
    const banner = document.querySelector('.cultura-banner');
    
    // Animar banner
    if (banner) {
      banner.style.opacity = '0';
      banner.style.transform = 'translateY(-20px)';
      setTimeout(() => {
        banner.style.opacity = '1';
        banner.style.transform = 'translateY(0)';
        banner.style.transition = 'all 0.5s ease';
      }, 100);
    }
    
    // Animar tarjetas
    fraseCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateX(30px)';
      
      setTimeout(() => {
        card.classList.add('animate-slide-left');
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
      }, 300 + (index * 200));
    });
  }

  function animarFactores() {
    // Animar items de factores
    const factorItems = document.querySelectorAll('.factor-item');
    factorItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        item.classList.add('animate-fade-up');
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
        item.style.transition = 'all 0.5s ease';
      }, index * 200);
    });
  }

  // Efectos hover para items de factores
  document.addEventListener('mouseenter', function(e) {
    if (e.target.closest('.factor-item')) {
      e.target.closest('.factor-item').style.transform = 'translateY(-5px) scale(1.05)';
    }
  }, true);

  document.addEventListener('mouseleave', function(e) {
    if (e.target.closest('.factor-item')) {
      e.target.closest('.factor-item').style.transform = 'translateY(0) scale(1)';
    }
  }, true);

  // Inicializar animaciones de la primera sección
  setTimeout(() => {
    animarFactores();
  }, 500);
}
