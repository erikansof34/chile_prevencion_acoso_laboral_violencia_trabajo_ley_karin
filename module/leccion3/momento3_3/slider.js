export function init() {
    // Configurar actividad Lumi
    const activity = {
        title: 'Implicancias claves para la empresa y trabajadores',
        src: 'https://app.lumi.education/api/v1/run/M0eajs/embed',
        mobileHeight: '75vh',
        desktopHeight: '70vh'
    };

    // Inicializar actividad cuando se abra el modal
    document.getElementById('modalQuiz3_3')?.addEventListener('shown.bs.modal', function () {
        LumiActivities.init('modalQuiz3_3', activity);
    });

    // Expediente interactivo
    // -------------------------------
    const buttons = document.querySelectorAll('.expediente-btn');
    const contentPanels = document.querySelectorAll('.content-panel');

    function showContent(contentId) {
        // Pausar todos los audios antes de cambiar de contenido
        document.querySelectorAll('audio').forEach(audio => {
            audio.pause();
        });

        contentPanels.forEach(panel => panel.classList.remove('active'));

        const targetPanel = document.getElementById(`content-${contentId}`);
        if (targetPanel) {
            setTimeout(() => {
                targetPanel.classList.add('active');
                // Reproducir automáticamente el audio del panel activo
                const audio = targetPanel.querySelector('audio');
                if (audio) {
                    audio.play();
                }
            }, 100);
        }

        buttons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-content="${contentId}"]`)?.classList.add('active');
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            showContent(button.getAttribute('data-content'));
        });
    });

    document.querySelectorAll('audio').forEach(audio => {
        const timeDisplay = audio.parentElement.querySelector('.audio-time');

        audio.addEventListener('timeupdate', () => {
            const current = Math.floor(audio.currentTime);
            const duration = Math.floor(audio.duration) || 0;
            const formatTime = (time) => `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;

            if (timeDisplay) {
                timeDisplay.textContent = `${formatTime(current)}/${formatTime(duration)}`;
            }
        });

        audio.addEventListener('play', () => {
            document.querySelectorAll('audio').forEach(other => {
                if (other !== audio) other.pause();
            });
        });
    });

    document.querySelectorAll('.cc-btn').forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');
            this.style.background = this.classList.contains('active') ? '#059669' : '#8B5CF6';
            this.textContent = this.classList.contains('active') ? 'CC ✓' : 'CC';
        });
    });
}