/* ===========================================
   Gabriel Junco - Portfolio Scripts v2
   Enhanced interactivity
   =========================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Mobile Navigation Toggle ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            const isOpen = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isOpen);
        });
        
        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu on outside click
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
    
    // --- Navbar scroll effect ---
    const nav = document.getElementById('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // --- Smooth Scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navHeight = nav.offsetHeight;
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
    updateActiveLink();
    
    // --- Back to Top Button ---
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // --- Typing Effect ---
    const typingText = document.getElementById('typingText');
    const phrases = [
        'Building efficient solutions with C++',
        'Connecting hardware to databases',
        'Crafting clean, maintainable code',
        'Solving problems one algorithm at a time',
        'Bilingual developer 🇲🇽 🇺🇸'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;
    
    function typeEffect() {
        if (!typingText) return;
        
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before new phrase
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    typeEffect();
    
    // --- Skill Filter ---
    const skillFilters = document.querySelectorAll('.skill-filter');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillFilters.forEach(function(filter) {
        filter.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active state
            skillFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter categories
            skillCategories.forEach(function(category) {
                if (filterValue === 'all' || category.getAttribute('data-category') === filterValue) {
                    category.classList.remove('hidden');
                    category.classList.add('animate');
                } else {
                    category.classList.add('hidden');
                }
            });
        });
    });
    
    // --- Project Filter ---
    const projectFilters = document.querySelectorAll('.project-filter');
    const projectCards = document.querySelectorAll('.project-card');
    
    projectFilters.forEach(function(filter) {
        filter.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            
            // Update active state
            projectFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(function(card) {
                const tags = card.getAttribute('data-tags');
                if (filterValue === 'all' || tags.includes(filterValue)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
    
    // --- Animate skill bars on scroll ---
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                skillObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillCategories.forEach(function(category) {
        skillObserver.observe(category);
    });
    
    // --- Fade in elements on scroll ---
    const fadeElements = document.querySelectorAll('.value-item, .process-item, .interest-card, .edu-card');
    
    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(function(el) {
        el.classList.add('fade-in');
        fadeObserver.observe(el);
    });
    
    // --- Download Resume Tracking ---
    document.querySelectorAll('a[download]').forEach(function(downloadLink) {
        downloadLink.addEventListener('click', function() {
            console.log('Resume downloaded');
            // Add analytics tracking here if needed
        });
    });
    
    // --- Keyboard navigation for project cards ---
    projectCards.forEach(function(card) {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const link = card.querySelector('.project-link');
                if (link) link.click();
            }
        });
    });
    
});

/* ===========================================
   Social/Contact Data (JSON)
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
