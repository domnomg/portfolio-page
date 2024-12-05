// ANIMATION, die den Titel auf der Titelseit auseinander zieht
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



//ANIMATION, die macht, dass das Titelbild verschwindet sobald man beim "A little about me ankommt"
document.addEventListener("DOMContentLoaded", function () {
    // Alle Timeline-Container-Elemente sammeln
    const containers = document.querySelectorAll('.timeline-container');
    
    // Erstelle den IntersectionObserver für die Timeline
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0 }); // 0% des Elements müssen sichtbar sein, bevor es erscheint

    // Jedes Container-Element dem Observer hinzufügen
    containers.forEach(container => {
        observer.observe(container);
    });

    // Neuen Observer für das Titelbild erstellen
    const titleImageContainer = document.querySelector('.container');

    const titleImageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio <= 0.15) { // Wenn nur noch 15 % sichtbar sind
                entry.target.style.opacity = '0'; // Verblassen (ausblenden)
                entry.target.style.transition = 'opacity 0.5s ease'; // Schnelles, aber weiches Ausblenden
            } else {
                entry.target.style.opacity = '1'; // Sichtbar machen, wenn mehr als 15 % sichtbar sind
                entry.target.style.transition = 'opacity 0.5s ease'; // Schnelles, aber weiches Einblenden
            }
        });
    }, { threshold: [0.15] }); // Überwacht, wenn 15 % oder weniger sichtbar sind

    // Titelbild dem Observer hinzufügen
    titleImageObserver.observe(titleImageContainer);
});




//ANIMATION für das Erscheinen der einzelnen Container beim Scrollen der Timeline
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


//Random Facts abut me
const facts = [
    "I'm more afraid of jellyfish than sharks",
    "My favourite food is sushi",
    "I favour cats over dogs",
    "My dream is to obtain a private pilot's licence (PPL)",
];

let currentFactIndex = 0;

function showNextFact() {
    const factText = document.getElementById("factText");
    factText.classList.remove('slide-in', 'slide-out'); // Entferne vorherige Animationen

    // Setzt den neuen Fakttext
    factText.innerText = facts[currentFactIndex];
    currentFactIndex = (currentFactIndex + 1) % facts.length;

    // Füge die Animationen hinzu
    setTimeout(() => {
        factText.classList.add('slide-in');
    }, 100); // Kurze Verzögerung vor dem Einblenden

    // Entferne die Animation nach einer bestimmten Zeit
    setTimeout(() => {
        factText.classList.remove('slide-in');
        factText.classList.add('slide-out');
    }, 4000); // 4 Sekunden bis zur Ausblendung
}

// Führt die Anzeige alle 5 Sekunden aus
setInterval(showNextFact, 5000);

// Startet die Anzeige mit dem ersten Fakt
//showNextFact();
 

//ToggleButton
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("colorModeToggle");

    toggleButton.addEventListener("change", function () {
        if (toggleButton.checked) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }
    });

    document.body.classList.add("light-mode");
});


//E-Mail zusenden
emailjs.init("jiQVv7gsTCgnFNRJb"); 

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Verhindert das Standardformular-Verhalten

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailjs.send("service_by6qoms", "template_54lxrnq", {
        from_name: name,
        from_email: email,
        message: message,
    }).then(
        function (response) {
            alert("Nachricht erfolgreich gesendet!");
        },
        function (error) {
            alert("Fehler beim Senden der Nachricht: " + error.text);
        }
    );
});

//Neue Funktion hier einfügen#############################