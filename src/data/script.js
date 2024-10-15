window.onload = function() {
    const envelope = document.getElementById('envelope-image');
    const invitationCard = document.getElementById('invitation-card');

    envelope.addEventListener('click', function() {
        envelope.classList.add('opened');
        setTimeout(() => {
            envelope.style.display = 'none'; // Oculta el sobre
            invitationCard.style.display = 'block'; // Muestra la tarjeta de invitación
        }, 1000); // Espera 1 segundo para que la animación termine
    });
};
