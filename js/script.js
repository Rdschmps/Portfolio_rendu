document.addEventListener('DOMContentLoaded', function() {
    // Texte à afficher avec l'effet de machine à écrire
    var text = "Étudiant en informatique";

    // Récupérer l'élément où le texte sera affiché
    var typingText = document.querySelector('.typing-text');

    // Vitesse de frappe (en millisecondes)
    var speed = 100;

    // Fonction pour afficher le texte lettre par lettre avec un délai
    function typeWriter() {
        for (let i = 0; i < text.length; i++) {
            setTimeout(function() {
                typingText.textContent += text[i];
            }, speed * i);
        }

        // Fonction pour effacer le texte après un délai
        setTimeout(eraseText, speed * text.length + 1000);
    }

    // Fonction pour effacer le texte lettre par lettre avec un délai
    function eraseText() {
        var length = typingText.textContent.length;
        for (let i = 0; i < length; i++) {
            setTimeout(function() {
                typingText.textContent = typingText.textContent.slice(0, -1);
            }, speed * i);
        }

        // Répéter l'effet de machine à écrire après un délai
        setTimeout(typeWriter, speed * length + 1000);
    }

    // Démarrer l'effet de machine à écrire
    typeWriter();

    // Gestion du menu burger
    var menuToggle = document.querySelector('.menu-toggle');
    var mobileMenu = document.querySelector('.header-right-mobile');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const offsetPosition = targetElement.offsetTop - headerHeight - 90; // Ajuster le -10 pour un meilleur positionnement

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Fonction pour basculer l'affichage des détails
// Function to toggle the display of details sections
function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.classList.contains('show')) {
        details.classList.remove('show');
    } else {
        details.classList.add('show');
    }
}




document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentIndex = 0;

    const moveToSlide = (index) => {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${slideWidth * index}px)`;
    };

    const nextSlide = () => {
        if (currentIndex >= slides.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        moveToSlide(currentIndex);
    };

    const prevSlide = () => {
        if (currentIndex <= 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex--;
        }
        moveToSlide(currentIndex);
    };

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Make the carousel responsive by recalculating the slide width
    window.addEventListener('resize', () => {
        moveToSlide(currentIndex);
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.header-right-mobile');
    
    // Activer/Désactiver le menu burger
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('open');  // Changer l'apparence du bouton burger
        mobileMenu.classList.toggle('active'); // Afficher/masquer le menu mobile
    });
    
    // Cacher le menu mobile lors du clic sur un lien
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('open');
            mobileMenu.classList.remove('active');
        });
    });
});








