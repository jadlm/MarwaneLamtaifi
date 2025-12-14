// Données pour les livres
const books = [
    {
        id: 1,
        title: "Between Fear and Courage",
        year: "2023",
        image: "images/book1.jpg",
        amazonLink: "https://www.amazon.com/dp/8863400273",
        excerptLink: "excerpts.html"
    },
    {
        id: 2,
        title: "After You, My Shadow",
        year: "2023",
        image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        amazonLink: "https://www.amazon.com/dp/B0DDY48Q7B",
        excerptLink: "excerpts.html#shadow"
    },
    {
        id: 3,
        title: "Une nuit À Taghazout",
        year: "2023",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        amazonLink: "https://www.amazon.com/dp/B0DDY48Q7B",
        excerptLink: "excerpts.html#taghazout"
    },
    {
        id: 4,
        title: "The Whispers of Love",
        year: "2023",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        amazonLink: "https://www.amazon.com/dp/B0DDY48Q7B",
        excerptLink: "excerpts.html#whispers"
    },
    {
        id: 5,
        title: "Under the Fallen Moon",
        year: "2023",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        amazonLink: "https://www.amazon.com/dp/B0DDY48Q7B",
        excerptLink: "excerpts.html#moon"
    }
];

// Données pour les articles de blog
const blogPosts = [
    {
        id: 1,
        title: "The Art of Character Development",
        date: "June 15, 2023",
        excerpt: "Exploring how to create multidimensional characters that resonate with readers and drive compelling narratives forward.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Writing Process",
        link: "blog-post.html?id=1"
    },
    {
        id: 2,
        title: "Finding Inspiration in Everyday Life",
        date: "May 3, 2023",
        excerpt: "How ordinary moments can transform into extraordinary stories with the right perspective and attention to detail.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Creative Inspiration",
        link: "blog-post.html?id=2"
    },
    {
        id: 3,
        title: "The Writer's Routine: Myths and Realities",
        date: "April 18, 2023",
        excerpt: "Debunking common misconceptions about how writers work and finding a routine that fosters creativity and productivity.",
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Writing Process",
        link: "blog-post.html?id=3"
    }
];

// Fonctions utilitaires
function renderBooks(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const booksToRender = limit ? books.slice(0, limit) : books;
    
    container.innerHTML = booksToRender.map(book => `
        <div class="book-card">
            <div class="book-img">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <div class="book-year">${book.year}</div>
                <div class="book-links">
                    <a href="${book.amazonLink}" class="book-link" target="_blank"><i class="fab fa-amazon"></i> Amazon</a>
                    <a href="${book.excerptLink}" class="book-link"><i class="fas fa-book-open"></i> Excerpt</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderBlogPosts(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const postsToRender = limit ? blogPosts.slice(0, limit) : blogPosts;
    
    container.innerHTML = postsToRender.map(post => `
        <div class="blog-card">
            <div class="blog-img">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="blog-content">
                <span class="blog-date">${post.date}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.link}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (!mobileMenuBtn || !navLinks) return;
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Fermer le menu mobile en cliquant sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

function setupHeaderScroll() {
    const header = document.getElementById('header');
    
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name')?.value;
        const email = document.getElementById('email')?.value;
        const subject = document.getElementById('subject')?.value;
        const message = document.getElementById('message')?.value;
        
        // Validation simple
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        alert(`Thank you, ${name}! Your message has been sent. Elena will respond to you at ${email} as soon as possible.`);
        contactForm.reset();
    });
}

function setupNewsletterForms() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert(`Thank you for subscribing with ${emailInput.value}! You'll receive updates soon.`);
                emailInput.value = '';
            }
        });
    });
}

function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('#currentYear');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
}

function initAnimations() {
    // Animation pour les cartes
    const animateCards = document.querySelectorAll('.book-card, .blog-card, .achievement, .excerpt-item');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animateCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
}

// Fonction pour gérer les onglets des extraits
function setupExcerptsPage() {
    console.log("Initialisation de la page excerpts...");
    
    const tabs = document.querySelectorAll('.book-tab');
    const excerpts = document.querySelectorAll('.book-excerpts');
    
    console.log(`Nombre d'onglets trouvés: ${tabs.length}`);
    console.log(`Nombre de sections trouvées: ${excerpts.length}`);
    
    if (tabs.length === 0 || excerpts.length === 0) return;
    
    // Fonction pour changer d'onglet
    function switchTab(bookId) {
        console.log(`Changement vers le livre: ${bookId}`);
        
        // Désactiver tous les onglets et sections
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        
        excerpts.forEach(excerpt => {
            excerpt.classList.remove('active');
        });
        
        // Activer l'onglet cliqué
        const activeTab = document.querySelector(`.book-tab[data-book="${bookId}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
        // Afficher la section correspondante
        const activeExcerpt = document.getElementById(`${bookId}-excerpts`);
        if (activeExcerpt) {
            activeExcerpt.classList.add('active');
        }
    }
    
    // Ajouter un écouteur d'événement à chaque onglet
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const bookId = this.getAttribute('data-book');
            console.log(`Clic sur l'onglet: ${bookId}`);
            switchTab(bookId);
            
            // Mettre à jour l'URL sans recharger la page
            history.pushState({ bookId }, '', `#${bookId}`);
        });
    });
    
    // Vérifier si une ancre est présente dans l'URL au chargement
    function checkInitialBook() {
        const hash = window.location.hash.substring(1);
        const validBookIds = ['fear', 'shadow', 'taghazout', 'whispers', 'moon'];
        
        if (hash && validBookIds.includes(hash)) {
            console.log(`Chargement initial depuis l'URL: ${hash}`);
            switchTab(hash);
        } else {
            // Activer le premier onglet par défaut
            const firstTab = document.querySelector('.book-tab');
            if (firstTab) {
                const firstBookId = firstTab.getAttribute('data-book');
                console.log(`Livre par défaut: ${firstBookId}`);
                switchTab(firstBookId);
            }
        }
    }
    
    // Gérer les changements d'URL (navigation avant/arrière)
    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.bookId) {
            switchTab(event.state.bookId);
        }
    });
    
    // Initialiser au chargement
    checkInitialBook();
}

// Initialisation générale
// Initialisation générale
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM chargé - Initialisation...");
    
    // Initialiser les composants communs
    setupMobileMenu();
    setupHeaderScroll();
    updateCopyrightYear();
    setupNewsletterForms();
    initAnimations();
    
    // Vérifier sur quelle page nous sommes
    const currentPath = window.location.pathname;
    console.log(`Page actuelle: ${currentPath}`);
    
    if (currentPath.includes('contact.html')) {
        console.log("Initialisation de la page contact...");
        setupContactPage();
        setupSmoothScroll();
    } else if (currentPath.includes('excerpts.html') || window.location.hash) {
        console.log("Initialisation de la page excerpts...");
        setupExcerptsPage();
        setupSmoothScroll();
    } else if (currentPath.includes('blog.html')) {
        console.log("Initialisation de la page blog...");
        renderBlogPosts('blogPostsContainer');
    } else if (currentPath.includes('index.html') || currentPath === '/' || currentPath.endsWith('/')) {
        console.log("Initialisation de la page d'accueil...");
        renderBooks('booksGrid', 5);
        renderBlogPosts('blogPosts', 3);
        setupContactForm();
        setupSmoothScroll();
    }
});
// Fonction pour initialiser la page de contact
function setupContactPage() {
    console.log("Initialisation de la page contact...");
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const firstName = document.getElementById('firstName').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validation simple
            if (!firstName || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simuler l'envoi du message
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulation d'envoi (à remplacer par un vrai envoi backend)
            setTimeout(() => {
                alert(`Thank you, ${firstName}! Your message has been sent successfully. I'll respond to you at ${email} within 2-3 business days.`);
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Gestion des FAQ (accordéon)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
        });
    });
}