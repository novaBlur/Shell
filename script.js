  // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('nav');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Animate service cards on scroll
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

       
// Animate promo cards
document.querySelectorAll('.promo-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(card);
});
        // Smooth parallax on hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroPattern = document.querySelector('.hero-pattern');
            if (heroPattern) {
                heroPattern.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0001})`;
            }
        });

        // Add subtle 3D tilt effect to cards
        document.querySelectorAll('.service-card, .promo-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });

        // Enhanced particle system with more customization
function createAdvancedParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    // Color options in Shell theme
    const colors = [
        'rgba(255, 215, 0, 0.6)',    // Mustard yellow
        'rgba(221, 29, 33, 0.5)',    // Shell red
        'rgba(255, 255, 255, 0.3)',  // White
        'rgba(255, 165, 0, 0.4)'     // Orange
    ];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 15 + 5;
        const left = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 20 + Math.random() * 15;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.background = color;
        
        // Random blur for some particles
        if (Math.random() > 0.7) {
            particle.style.filter = 'blur(2px)';
        }
        
        particlesContainer.appendChild(particle);
    }
}

// Call this instead of createParticles for the enhanced version
document.addEventListener('DOMContentLoaded', createAdvancedParticles);
