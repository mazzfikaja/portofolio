document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('main-navbar');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
});

AOS.init({
    duration: 800, 
    once: false, 
    offset: 50,
});