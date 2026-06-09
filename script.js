// Initialize Animate On Scroll
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
    });

    // Sticky Navbar logic
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-darker/80', 'backdrop-blur-lg', 'border-b', 'border-white/10', 'shadow-lg');
            navbar.classList.remove('bg-transparent', 'py-4');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('bg-darker/80', 'backdrop-blur-lg', 'border-b', 'border-white/10', 'shadow-lg', 'py-2');
            navbar.classList.add('bg-transparent', 'py-4');
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const icon = mobileBtn.querySelector('i');

    function toggleMenu() {
        mobileMenu.classList.toggle('translate-x-full');
        if (mobileMenu.classList.contains('translate-x-full')) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        }
    }

    mobileBtn.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Counter Animation for Statistics
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // Trigger counter when scrolled into view
    let counted = false;
    window.addEventListener('scroll', () => {
        const statsSection = document.querySelector('.counter').parentElement.parentElement;
        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if(sectionPos < screenPos && !counted) {
            animateCounters();
            counted = true;
        }
    });
});