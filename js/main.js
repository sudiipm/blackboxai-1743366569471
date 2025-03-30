// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    const loginForm = document.getElementById('loginForm');

    // Function to open modal
    const openModal = () => {
        loginModal.classList.remove('hidden');
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    // Function to close modal
    const closeModalFunc = () => {
        loginModal.classList.add('hidden');
        loginModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Event listeners for modal
    loginBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalFunc);

    // Close modal when clicking outside
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            closeModalFunc();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !loginModal.classList.contains('hidden')) {
            closeModalFunc();
        }
    });

    // Handle form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic form validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would typically make an API call to handle authentication
        console.log('Login attempted with:', { email });
        
        // For demo purposes, we'll just close the modal
        closeModalFunc();
        loginForm.reset();
    });

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Add mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Error handling
    window.addEventListener('error', (e) => {
        console.error('An error occurred:', e.message);
    });
});