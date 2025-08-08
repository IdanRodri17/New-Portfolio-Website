// Menu Toggle Function
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Dark Mode Toggle
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update all theme buttons
    const themeButtons = document.querySelectorAll('.theme-toggle');
    themeButtons.forEach(button => {
        button.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    });
    
    // Immediately update navbar background for current scroll position
    updateNavbarBackground();
}

// Load saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeButtons = document.querySelectorAll('.theme-toggle');
    themeButtons.forEach(button => {
        button.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
    });
}

// Scroll Animations
function handleScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Function to update navbar background based on current theme and scroll position
function updateNavbarBackground() {
    const navbar = document.querySelector('nav');
    const currentScrollY = window.scrollY;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (currentScrollY > 100) {
        navbar.style.background = isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.background = isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.9)';
    }
}

// Simplified navbar scroll effect - no hide/show animation
function initNavbarScrollEffect() {
    window.addEventListener('scroll', updateNavbarBackground);
    // Initial call to set correct background on page load
    updateNavbarBackground();
}

// Static description - no animation needed

// Scroll Progress Indicator
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Particle system removed to prevent nav interference

// Enhanced Skills Hover Effect
function initSkillsInteraction() {
    document.querySelectorAll('.article-container article').forEach(article => {
        article.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-5px)';
        });
        
        article.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
}

// Intersection Observer for better performance
function initAdvancedAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // Observe project cards
    document.querySelectorAll('.color-container').forEach((card, index) => {
        card.style.transform = 'translateY(50px) scale(0.9)';
        card.style.opacity = '0';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    handleScrollAnimations();
    initSmoothScrolling();
    initNavbarScrollEffect();
    initScrollProgress();
    initSkillsInteraction();
    initAdvancedAnimations();
    
    // Add animation classes to elements and make them visible immediately
    document.querySelectorAll('.details-container').forEach((el, index) => {
        el.classList.add('fade-in', 'visible');
        el.style.animationDelay = `${index * 0.2}s`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.display = 'flex';
    });
    
    // Ensure all skill cards are visible
    document.querySelectorAll('.skill-card').forEach((el, index) => {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
        el.style.display = 'flex';
    });
    
    document.querySelectorAll('.color-container').forEach((el, index) => {
        el.classList.add('slide-in-left', 'visible');
        el.style.animationDelay = `${index * 0.3}s`;
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
    });
});