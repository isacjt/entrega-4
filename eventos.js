document.querySelectorAll('.contact-form, .schedule, .tasks, .hobbies, #links, #about-me').forEach(element => {
    element.addEventListener('click', function() {
        alert('Estás en la sección: ' + (this.id || this.className));
    });
});