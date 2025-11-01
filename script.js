// ===================================
// SMOOTH SCROLL & NAVBAR BEHAVIOR
// ===================================

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

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 15, 31, 0.95)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 225, 255, 0.2)';
    } else {
        navbar.style.background = 'rgba(10, 15, 31, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for fade-in animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    observer.observe(section);
});

// Observe service cards with staggered animation
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.classList.add(`fade-in-delay-${(index % 3) + 1}`);
    observer.observe(card);
});

// ===================================
// PARALLAX EFFECT FOR HERO SECTION
// ===================================

const heroSection = document.querySelector('.hero-section');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    if (heroSection && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
    }
});

// ===================================
// GLITCH EFFECT ON TITLE (OPTIONAL)
// ===================================

const glitchText = document.querySelector('.hero-title');
let glitchInterval;

function createGlitchEffect() {
    const originalText = glitchText.textContent;
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

    let iterations = 0;
    const maxIterations = 3;

    glitchInterval = setInterval(() => {
        glitchText.textContent = originalText
            .split('')
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('');

        iterations += 1/3;

        if (iterations >= originalText.length + maxIterations) {
            glitchText.textContent = originalText;
            clearInterval(glitchInterval);
        }
    }, 30);
}

// Trigger glitch effect on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        createGlitchEffect();
    }, 500);
});

// ===================================
// CURSOR GLOW EFFECT (OPTIONAL)
// ===================================

const cursor = document.createElement('div');
cursor.className = 'cursor-glow';
document.body.appendChild(cursor);

// Add cursor glow CSS dynamically
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .cursor-glow {
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0, 225, 255, 0.6) 0%, transparent 70%);
        pointer-events: none;
        transition: transform 0.1s ease;
        z-index: 9999;
        mix-blend-mode: screen;
        transform: translate(-50%, -50%);
    }

    @media (max-width: 768px) {
        .cursor-glow {
            display: none;
        }
    }
`;
document.head.appendChild(cursorStyle);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// ===================================
// PARTICLE BACKGROUND EFFECT
// ===================================

function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;

    document.body.prepend(particleContainer);

    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #00E1FF;
            border-radius: 50%;
            opacity: 0;
            animation: float linear infinite;
            box-shadow: 0 0 4px #00E1FF;
        }

        @keyframes float {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(var(--x-offset));
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);

    // Create particles
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.setProperty('--x-offset', (Math.random() * 200 - 100) + 'px');
            particleContainer.appendChild(particle);
        }, i * 100);
    }
}

// Initialize particles on load
window.addEventListener('load', createParticles);

// ===================================
// BUTTON HOVER SOUND EFFECT (OPTIONAL)
// ===================================

const buttons = document.querySelectorAll('.cta-button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================

function createMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');

    // Create hamburger menu button
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    menuToggle.setAttribute('aria-label', 'Toggle menu');

    // Add mobile menu styles
    const mobileMenuStyle = document.createElement('style');
    mobileMenuStyle.textContent = `
        .menu-toggle {
            display: none;
            flex-direction: column;
            gap: 5px;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 5px;
            z-index: 1001;
        }

        .menu-toggle span {
            width: 25px;
            height: 2px;
            background: var(--neon-blue);
            transition: all 0.3s ease;
            box-shadow: 0 0 5px var(--cyan-glow);
        }

        .menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(7px, 7px);
        }

        .menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }

        @media (max-width: 768px) {
            .menu-toggle {
                display: flex;
            }

            .nav-menu {
                position: fixed;
                top: 70px;
                right: -100%;
                flex-direction: column;
                background: rgba(10, 15, 31, 0.98);
                padding: 2rem;
                gap: 2rem;
                width: 100%;
                max-width: 300px;
                transition: right 0.4s ease;
                border-left: 2px solid var(--neon-blue);
                box-shadow: -5px 0 20px rgba(0, 225, 255, 0.3);
            }

            .nav-menu.active {
                right: 0;
            }
        }
    `;
    document.head.appendChild(mobileMenuStyle);

    navContainer.appendChild(menuToggle);

    // Toggle menu on click
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navContainer.contains(e.target) && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Initialize mobile menu
window.addEventListener('load', createMobileMenu);

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c🚀 Welcome to Thirdge - Building the Decentralized Future',
    'color: #00E1FF; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #00E1FF;');
console.log('%cWeb3 Innovation for the Future',
    'color: #00E1FF; font-size: 12px;');
