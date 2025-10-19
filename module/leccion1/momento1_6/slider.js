export function init() {
  loadIframe({
    id: 'Slide1_6Web',
    src: 'https://iframe.mediadelivery.net/embed/424470/ab772b78-9c1f-485e-a4ff-32ff28b67713?autoplay=false&loop=false&muted=false&preload=true&responsive=true',
    className: 'iframe-video-vertical-web',
    style: 'width: 20vw; height: 80vh; min-height: 300px;',
  });
  console.log('Inicializando contenido de momento2_10...');

  const items_cmp_estrategias = [
    {
      texto: "<p class='mb-0'><span class='sf-text-purple sf-txt-800'>1. Responsabilidad de la empresa:</span> Toda organización debe contar con un protocolo claro que prevenga el acoso y la violencia en el trabajo.<br><strong>Tip adicional animado: </strong>Debe estar incluido en el Reglamento Interno.</p>",
      imagen: "responsabilidad_empresa.webp"
    },
    {
      texto: "<p class='mb-0'><span class='sf-text-purple sf-txt-800'>2. Rol activo del trabajador:</span> Cada trabajador tiene el deber de actuar ante una situación de acoso, incluso si no es la víctima.<br><strong>Pop-up final: </strong>Ser testigo también implica responsabilidad.</p>",
      imagen: "rol_activo_trabajador.webp"
    },
    {
      texto: "<p class='mb-0'><span class='sf-text-purple sf-txt-800'>3. Formación continua:</span> Las empresas deben garantizar formación regular en prevención, género y mecanismos de denuncia.<br><strong>Pop-up animado: </strong>La educación previene el acoso.</p>",
      imagen: "formacion_continua.webp"
    }
  ];

  // Referencias a los elementos del DOM
  const lista_cmp = document.getElementById("cmp_list");
  const contenido_cmp = document.getElementById("contenido_cmp");

  // Función para inicializar la funcionalidad de tabs
  function inicializarTabs() {
    // Generar los elementos li dinámicamente (ya están en el HTML, solo agregamos funcionalidad)
    const items_li = lista_cmp.querySelectorAll("li");

    items_li.forEach((li, index) => {
      li.addEventListener("click", () => mostrarItem_cmp(index));
    });

    // Mostrar el primer elemento por defecto
    mostrarItem_cmp(0);
  }

  // Función para mostrar un elemento específico
  function mostrarItem_cmp(index) {
    // Remover la clase activa de todos los elementos
    document.querySelectorAll("#cmp_list li").forEach(li =>
      li.classList.remove("cmp_active")
    );

    // Agregar la clase activa al elemento seleccionado
    lista_cmp.children[index].classList.add("cmp_active");

    const delayClass = index === 0 ? " animate__delay-1s" : "";

    contenido_cmp.innerHTML = `
        <img src="./momento1_6/img/${items_cmp_estrategias[index].imagen}" 
            class="cmp_img animate__animated animate__zoomIn${delayClass}" 
            alt="Imagen grande ${index + 1}">
        <div class="cmp_desp">${items_cmp_estrategias[index].texto}</div>
      `;
    // Actualizar el contenido con la imagen y texto correspondiente
  }

  // Inicializar cuando el DOM esté listo
  inicializarTabs();

  // Configurar actividad Lumi
  const activity = {
    title: 'Implicancias claves para la empresa y trabajadores',
    src: 'https://app.lumi.education/api/v1/run/QbHArV/embed',
    mobileHeight: '75vh',
    desktopHeight: '70vh'
  };

  // Inicializar actividad cuando se abra el modal
  document.getElementById('modalQuiz')?.addEventListener('shown.bs.modal', function () {
    LumiActivities.init('modalQuiz', activity);
  });
}

