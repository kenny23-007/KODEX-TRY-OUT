// Modal functionality
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

// Show login modal
loginBtn.addEventListener('click', () => {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Show signup modal
signupBtn.addEventListener('click', () => {
    signupModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close modals
closeLogin.addEventListener('click', () => {
    loginModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

closeSignup.addEventListener('click', () => {
    signupModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Switch between modals
switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('active');
    signupModal.classList.add('active');
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.classList.remove('active');
    loginModal.classList.add('active');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    if (e.target === signupModal) {
        signupModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your login logic here
    alert('Login functionality will be implemented!');
    loginModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your signup logic here
    alert('Signup functionality will be implemented!');
    signupModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    }
});