document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            if (navMenu) {
                navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (menuToggle && menuToggle.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    if (navMenu) {
                        navMenu.style.display = 'none';
                    }
                }
            }
        });
    });
    
    // Parallax effect for background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const elements = document.querySelectorAll('.bg-element');
        
        elements.forEach((el, index) => {
            const speed = 0.2 + (index * 0.1);
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.05}deg)`;
        });
    });
    
    // Lazy load images
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Add data-src attribute for lazy loading
    images.forEach(img => {
        img.dataset.src = img.src;
        img.src = '';
    });
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    document.querySelectorAll('.project-card, .service-item, .about-content').forEach(el => {
        fadeObserver.observe(el);
    });
    
    // Add CSS for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        .project-card,
        .service-item,
        .about-content {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .project-card.fade-in,
        .service-item.fade-in,
        .about-content.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .project-card:nth-child(1) { transition-delay: 0.1s; }
        .project-card:nth-child(2) { transition-delay: 0.2s; }
        .project-card:nth-child(3) { transition-delay: 0.3s; }
        
        .service-item:nth-child(1) { transition-delay: 0.1s; }
        .service-item:nth-child(2) { transition-delay: 0.2s; }
        .service-item:nth-child(3) { transition-delay: 0.3s; }
    `;
    document.head.appendChild(style);
    
    // Mouse move parallax for hero
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.addEventListener('mousemove', function(e) {
            const width = this.offsetWidth;
            const height = this.offsetHeight;
            const mouseX = e.offsetX;
            const mouseY = e.offsetY;
            
            const elements = this.querySelectorAll('.bg-element');
            
            elements.forEach((el, index) => {
                const moveX = (mouseX / width - 0.5) * (20 + index * 10);
                const moveY = (mouseY / height - 0.5) * (20 + index * 10);
                
                el.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.5}deg)`;
            });
        });
        
        // Reset on mouse leave
        hero.addEventListener('mouseleave', function() {
            const elements = this.querySelectorAll('.bg-element');
            elements.forEach(el => {
                el.style.transform = 'translate(0, 0) rotate(0deg)';
            });
        });
    }
});
