export function init() {
    // Configurar actividad Lumi
    const activity = {
        title: 'Implicancias claves para la empresa y trabajadores',
        src: 'https://app.lumi.education/api/v1/run/m3Kmot/embed',
        mobileHeight: '75vh',
        desktopHeight: '70vh'
    };

    // Inicializar actividad cuando se abra el modal
    document.getElementById('modalQuiz2_2')?.addEventListener('shown.bs.modal', function () {
        LumiActivities.init('modalQuiz2_2', activity);
    });
}