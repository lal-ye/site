import './style.css'
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Theme toggle (dark/light mode)
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Apply saved theme on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.documentElement.classList.add('light-mode');
        }
        themeToggle.textContent = savedTheme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';

        // Toggle theme on button click
        themeToggle.addEventListener('click', () => {
            const isLightMode = document.documentElement.classList.toggle('light-mode');
            localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
            themeToggle.textContent = isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode';
        });
    }

    // Back-to-top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
