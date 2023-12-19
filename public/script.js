document.addEventListener('DOMContentLoaded', function () {
    const pluginCards = document.querySelectorAll('.plugin-card');

    pluginCards.forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});
