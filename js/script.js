// js/script.js

// 1. SWIPER HOME: Configuração do Carrossel Principal
// Só roda se existir o elemento .mySwiper na página
if (document.querySelector('.mySwiper')) {
    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        effect: "fade",
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        speed: 1200,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

// 2. SWIPER GALERIA: Carrossel de fotos (Home e Sobre)
// Só roda se existir o elemento .gallery-swiper
if (document.querySelector('.gallery-swiper')) {
    const gallerySwiper = new Swiper(".gallery-swiper", {
        effect: "fade",              // Efeito de transição suave
        fadeEffect: { crossFade: true },
        loop: true,                  // Roda infinito
        speed: 1500,                 // Velocidade da transição (1.5s)
        autoplay: {
            delay: 3500,             // Troca a cada 3.5 segundos
            disableOnInteraction: false,
        },
        allowTouchMove: false,       // Foca no visual
    });
}

// 3. SCROLL REVEAL: Animações de entrada
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1200,
    delay: 100,
    easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    reset: false
});

sr.reveal('.reveal-up');
sr.reveal('.reveal-text', { origin: 'bottom', distance: '40px', delay: 200 });
sr.reveal('.reveal-img', { origin: 'bottom', distance: '40px', delay: 400 });
sr.reveal('.reveal-left', { origin: 'left', distance: '50px' });
sr.reveal('.reveal-right', { origin: 'right', distance: '50px' });

// 4. MENU MOBILE: Abrir/Fechar
function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}

// 5. HEADER: Mudar cor ao rolar (Scrolled)
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if(header) {
        window.scrollY > 50 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
    }
});

// 6. SMOOTH SCROLL: Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Fecha menu mobile se estiver aberto
            const navMenu = document.getElementById('nav-menu');
            if(navMenu) navMenu.classList.remove('active');
        }
    });
});