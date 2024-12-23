// ANIMATION 1 - die den Titel auf der Titelseit auseinander zieht
window.addEventListener('scroll', function() {
    const scrollAmount = window.scrollY; 
    const portfolio = document.getElementById('portfolio'); 
    const name = document.getElementById('name'); 

   
    const shiftFactor = scrollAmount * 0.2;

    
    portfolio.style.transform = `translateX(${-shiftFactor}px)`; //links
    name.style.transform = `translateX(${shiftFactor}px)`; //rechts
});



//ANIMATION 2 - die macht, dass das Titelbild verschwindet sobald man beim "A little about me ankommt"
document.addEventListener("DOMContentLoaded", function () {
   
    const containers = document.querySelectorAll('.timeline-container');
    
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0 }); 

   
    containers.forEach(container => {
        observer.observe(container);
    });

  
    const titleImageContainer = document.querySelector('.container');

    const titleImageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio <= 0.15) { 
                entry.target.style.opacity = '0'; 
                entry.target.style.transition = 'opacity 0.5s ease'; 
            } else {
                entry.target.style.opacity = '1'; 
                entry.target.style.transition = 'opacity 0.5s ease'; 
            }
        });
    }, { threshold: [0.15] }); 

  
    titleImageObserver.observe(titleImageContainer);
});



//ANIMATION 3 - für das Erscheinen der einzelnen Container beim Scrollen der Timeline
document.addEventListener("DOMContentLoaded", function () {
   
    const containers = document.querySelectorAll('.timeline-container');
    
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.classList.add('show');
            } else {
                
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0}); // 0% des Elements müssen sichtbar sein, bevor es erscheint

  
    containers.forEach(container => {
        observer.observe(container);
    });
});



//ANIMATION 4 - Random Facts abut me
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
    }, 100); 

    // Entferne die Animation nach einer bestimmten Zeit
    setTimeout(() => {
        factText.classList.remove('slide-in');
        factText.classList.add('slide-out');
    }, 4000); // 4 Sekunden Ansicht
}

// Führt die Anzeige alle 5 Sekunden aus
setInterval(showNextFact, 5000);


//ANIMATION 5 - Wechsel auf Darkmode - ToggleButton
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



//ANIMATION 6 - E-Mail zusenden (EmailJS)
emailjs.init("jiQVv7gsTCgnFNRJb"); 

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

     // Eingabefelder auslesen
     const nameInput = document.getElementById("name");
     const emailInput = document.getElementById("email");
     const messageInput = document.getElementById("message");
 
     const name = nameInput.value;
     const email = emailInput.value;
     const message = messageInput.value;

    emailjs.send("service_by6qoms", "template_54lxrnq", {
        from_name: name,
        from_email: email,
        message: message,
    }).then(
        function (response) {
            alert("Nachricht erfolgreich gesendet!");

            // Eingabefelder leeren
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";

        },
        function (error) {
            alert("Fehler beim Senden der Nachricht: " + error.text);
        }
    );
});



//Animation 7 - Spotify -> Code wurde nach dem Erhalt des Tokens wieder entfernt

