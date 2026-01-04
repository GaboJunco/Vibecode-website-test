/* ===========================================
   Gabriel Junco - Portfolio Scripts
   Minimal JS for interactivity
   =========================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Navigation Toggle ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Update ARIA for accessibility
            const isOpen = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
        
        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // --- Smooth Scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // --- Active nav link on scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    function updateActiveLink() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 80;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Run on load
    
    // --- Download Resume Tracking (placeholder for analytics) ---
    document.querySelectorAll('a[download]').forEach(function(downloadLink) {
        downloadLink.addEventListener('click', function() {
            // INSTRUCTION: Add your analytics tracking here if needed
            console.log('Resume downloaded');
        });
    });
    
});

/* ===========================================
   Social/Contact Data (JSON)
   Use this for dynamic rendering if needed
   =========================================== */
const contactData = [
    {
        "platform": "Email",
        "icon": "✉️",
        "url": "mailto:gabriel.junco@example.com",
        "label": "gabriel.junco@example.com"
    },
    {
        "platform": "GitHub",
        "icon": "💻",
        "url": "https://github.com/gabrieljunco",
        "label": "GitHub"
    },
    {
        "platform": "LinkedIn",
        "icon": "💼",
        "url": "https://linkedin.com/in/gabrieljunco",
        "label": "LinkedIn"
    }
];

// Export for use if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { contactData };
}
