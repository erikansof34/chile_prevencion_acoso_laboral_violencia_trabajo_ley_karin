// JavaScript
export function init() {
    loadIframe({
        id: 'Slide1_5Web',
        src: 'https://iframe.mediadelivery.net/embed/488325/cb55224d-e3cf-4818-a330-04ca34758857?autoplay=false&loop=false&muted=false&preload=true&responsive=true',
        className: 'iframe-video-vertical-web',
        style: 'width: 20vw; height: 80vh; min-height: 300px;',
    });


    const circles = document.querySelectorAll('.step-circle');
    const contents = document.querySelectorAll('.step-content');

    function activateStep(targetStep) {
        const targetContent = document.getElementById(`content-${targetStep}`);
        
        // Remover active de todos los círculos y contenidos
        circles.forEach(c => c.classList.remove('active'));
        contents.forEach(content => {
            content.classList.remove('active');
            content.classList.add('collapsed');
        });

        // Activar el paso seleccionado
        circles.forEach(c => {
            if (c.getAttribute('data-target') === targetStep) {
                c.classList.add('active');
            }
        });
        targetContent.classList.remove('collapsed');
        targetContent.classList.add('active');

        // Pausar todos los audios
        const audios = document.querySelectorAll('audio');
        audios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    }

    // Event listeners para círculos
    circles.forEach(circle => {
        circle.addEventListener('click', function () {
            const targetStep = this.getAttribute('data-target');
            activateStep(targetStep);
        });
    });

    // Event listeners para tarjetas
    contents.forEach(content => {
        content.addEventListener('click', function () {
            const targetStep = this.id.split('-')[1];
            activateStep(targetStep);
        });
    });

    // Accesibilidad con teclado
    circles.forEach(circle => {
        circle.setAttribute('tabindex', '0');
        circle.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}