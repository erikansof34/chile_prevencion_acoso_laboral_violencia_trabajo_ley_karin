export function init() {
    loadIframe({
        id: 'Slide3_4Web',
        src: 'https://iframe.mediadelivery.net/embed/488325/cb55224d-e3cf-4818-a330-04ca34758857?autoplay=false&loop=false&muted=false&preload=true&responsive=true',
        className: 'iframe-video-vertical-web',
        style: 'width: 20vw; height: 80vh; min-height: 300px;',
    });

    // Configurar actividad Lumi
    const activity = {
        title: 'Implicancias claves para la empresa y trabajadores',
        src: 'https://app.lumi.education/api/v1/run/dZ-O4A/embed',
        mobileHeight: '75vh',
        desktopHeight: '70vh'
    };

    // Inicializar actividad cuando se abra el modal
    document.getElementById('modalQuiz3_4')?.addEventListener('shown.bs.modal', function () {
        LumiActivities.init('modalQuiz3_4', activity);
    });
}