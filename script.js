// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.from('.animated-text', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: 'power3.out'
});

gsap.from('.tech-stack i', {
    duration: 0.5,
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    delay: 1,
    ease: 'back.out(1.7)'
});

// Section animations
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// Skill cards animation
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out'
    });
});

// Project cards animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Floating elements animation
const elements = document.querySelectorAll('.element');
elements.forEach((element, index) => {
    gsap.to(element, {
        y: 'random(-50, 50)',
        x: 'random(-50, 50)',
        rotation: 'random(-180, 180)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.5
    });
});

// Tech stack icons hover effect
const techIcons = document.querySelectorAll('.tech-stack i');
techIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            scale: 1.2,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Stats Counter Animation
const stats = document.querySelectorAll('.stat-number');
const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const updateCount = () => {
            if (count < target) {
                count += increment;
                stat.textContent = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCount();
    });
};

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress-bar');
const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = `${progress}%`;
    });
};

// Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');
const animateTimeline = () => {
    timelineItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top center',
                toggleActions: 'play none none reverse'
            },
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });
};

// Tech Grid Animation
const techCells = document.querySelectorAll('.tech-cell');
techCells.forEach((cell, index) => {
    gsap.to(cell, {
        scale: 'random(0.8, 1.2)',
        opacity: 'random(0.1, 0.3)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.1
    });
});

// Initialize animations when elements are in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('stats-container')) {
                animateStats();
            } else if (entry.target.classList.contains('skills-container')) {
                animateProgressBars();
            } else if (entry.target.classList.contains('timeline')) {
                animateTimeline();
            }
        }
    });
}, { threshold: 0.5 });

// Observe elements
document.querySelectorAll('.stats-container, .skills-container, .timeline').forEach(el => {
    observer.observe(el);
});