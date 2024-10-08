document.addEventListener("DOMContentLoaded", function () {
    // Alle Timeline-Container-Elemente sammeln
    const containers = document.querySelectorAll('.timeline-container');
    
    // Erstelle den IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Wenn das Element in den Viewport kommt, füge die "show"-Klasse hinzu
                entry.target.classList.add('show');
            } else {
                // Wenn das Element den Viewport verlässt, entferne die "show"-Klasse
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0}); // 0% des Elements müssen sichtbar sein, bevor es erscheint

    // Jedes Container-Element dem Observer hinzufügen
    containers.forEach(container => {
        observer.observe(container);
    });
});



// Neue Funktion hier einfügen!!

// Funktion, die auf das Scrollen reagiert
window.addEventListener('scroll', function() {
    const scrollAmount = window.scrollY; // Die aktuelle Scroll-Höhe
    const portfolio = document.getElementById('portfolio'); // Zugriff auf das PORTFOLIO-Element
    const name = document.getElementById('name'); // Zugriff auf das DOMINIQUE GAVIN-Element

    // Definieren Sie den Verschiebungsfaktor (je höher der Wert, desto schneller die Trennung)
    const shiftFactor = scrollAmount * 0.2;

    // Setze die Transform-Eigenschaft, um die Titel auseinander zu ziehen
    portfolio.style.transform = `translateX(${-shiftFactor}px)`; // Portfolio nach links
    name.style.transform = `translateX(${shiftFactor}px)`; // Dominique Gavin nach rechts
});
