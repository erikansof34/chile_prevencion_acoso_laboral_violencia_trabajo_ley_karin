export function init() {
    let currentUnlockedStep = 1;
    let completedSteps = new Set();

    const protocolSteps = document.querySelectorAll('.protocol-step');

    // Inicializar el estado de los pasos
    initializeSteps();

    protocolSteps.forEach(step => {
        step.addEventListener('click', function () {
            const stepNumber = parseInt(this.dataset.step);

            // Verificar si el paso está bloqueado
            if (this.classList.contains('locked')) {
                showRestrictionModal(stepNumber);
                return;
            }

            // Si el paso está desbloqueado, activarlo
            if (this.classList.contains('unlocked')) {
                activateStep(this, stepNumber);
            }
        });
    });

    // Agregar evento para cerrar modal al hacer clic fuera
    document.getElementById('restrictionModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeRestrictionModal();
        }
    });

    function initializeSteps() {
        protocolSteps.forEach((step, index) => {
            const stepNumber = index + 1;

            if (stepNumber === 1) {
                // El primer paso siempre está desbloqueado
                step.classList.add('unlocked');
                step.classList.remove('locked');
                const lockIcon = step.querySelector('.lock-icon');
                if (lockIcon) lockIcon.remove();
            } else {
                // Los demás pasos están bloqueados inicialmente
                step.classList.add('locked');
                step.classList.remove('unlocked');
            }
        });
    }

    function activateStep(step, stepNumber) {
        const allSteps = document.querySelectorAll('.protocol-step');

        // Remover active de todos los pasos
        allSteps.forEach(s => s.classList.remove('active'));

        // Activar el paso seleccionado
        step.classList.add('active');

        // Marcar como completado
        completedSteps.add(stepNumber);
        step.classList.add('completed');

        // Desbloquear el siguiente paso si existe
        const nextStep = stepNumber + 1;
        const nextStepElement = document.querySelector(`[data-step="${nextStep}"]`);

        if (nextStepElement && nextStepElement.classList.contains('locked')) {
            unlockStep(nextStepElement, nextStep);
        }
    }

    function unlockStep(step, stepNumber) {
        step.classList.remove('locked');
        step.classList.add('unlocked');

        // Remover el icono de candado con animación
        const lockIcon = step.querySelector('.lock-icon');
        if (lockIcon) {
            lockIcon.style.transform = 'translate(-50%, -50%) scale(0)';
            setTimeout(() => {
                lockIcon.remove();
            }, 300);
        }

        // Actualizar el step desbloqueado actual
        currentUnlockedStep = Math.max(currentUnlockedStep, stepNumber);

        // Animación de desbloqueo
        step.style.transform = 'scale(1.05)';
        setTimeout(() => {
            step.style.transform = '';
        }, 200);
    }

    function showRestrictionModal(attemptedStep) {
        const modal = document.getElementById('restrictionModal');
        const message = modal.querySelector('.modal-message');

        // Personalizar el mensaje según el paso
        const previousStep = attemptedStep - 1;
        message.textContent = `Debes completar el paso ${previousStep} antes de acceder al paso ${attemptedStep}. ¡Sigue el orden para una mejor comprensión!`;

        modal.classList.remove('hidden');
        modal.classList.add('show');

        // Auto-cerrar después de 3 segundos
        setTimeout(() => {
            closeRestrictionModal();
        }, 3000);
    }

    function closeRestrictionModal() {
        const modal = document.getElementById('restrictionModal');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    // Hacer la función global para el botón del modal
    window.closeRestrictionModal = closeRestrictionModal;
}