export function init() {
    loadIframe({
        id: 'Slide1_2Web',
        src: 'https://iframe.mediadelivery.net/embed/488325/cb55224d-e3cf-4818-a330-04ca34758857?autoplay=false&loop=false&muted=false&preload=true&responsive=true',
        className: 'iframe-video-horizontal-web',
        style: 'width: 37vw; height: 52vh; min-height: 300px;',
    });
    
    // Funcionalidad para mostrar descripciones al hacer clic
    document.querySelectorAll('.flow-step').forEach(step => {
        step.addEventListener('click', function() {
            const stepNumber = this.dataset.step;
            const description = document.getElementById(`desc-${stepNumber}`);
            
            // Ocultar todas las descripciones
            document.querySelectorAll('.step-description').forEach(desc => {
                desc.classList.remove('show');
            });
            
            // Mostrar la descripción correspondiente
            description.classList.add('show');
        });
    });
}