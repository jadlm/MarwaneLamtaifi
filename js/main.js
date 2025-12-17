// Données pour les livres
// Données pour les critiques
const reviews = [
    {
        id: 1,
        name: "Austin Macauley Publishers",
        rating: 5,
        text: "Having read all the reports and taken note of the Editors’ opinions we can confidently state that ‘Between Fear & Courage’ was found to be a most engaging and entertaining read that will undoubtedly captivate a wide audience. that makes your work a pleasant read. The Board were keen to comment on thedegree of suspense that your writing emits and how it always keeps the readers on the edge of their seat wanting more. The thrilling plot moves along briskly,  ‘Between Fear & Courage’ is a well-written and researched crime novel worthy of attention, and we believe it would have a place in the market.",
        date: "March 15, 2024",
        source: "Professional Review"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        rating: 5,
        text: "I couldn't put this book down! The characters felt so real, and the story stayed with me long after I finished reading.",
        date: "February 28, 2025",
        source: "Reader Review"
    },
    {
        id: 3,
        name: "Book Bloggers United",
        rating: 4,
        text: "A compelling narrative with well-developed characters. The pacing keeps you engaged from start to finish.",
        date: "April 2, 2025",
        source: "Blog Review"
    }
];

// Fonction pour générer les étoiles
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating 
            ? '<i class="fas fa-star"></i>' 
            : '<i class="far fa-star"></i>';
    }
    return stars;
}

// Fonction SIMPLIFIÉE pour afficher les critiques
function renderReviews() {
    console.log("Fonction renderReviews appelée");
    
    // ESSAYEZ LES DEUX IDS POSSIBLES
    const container = document.getElementById('reviewsContainer') || 
                     document.querySelector('.reviews-container');
    
    console.log("Conteneur trouvé:", container);
    
    if (!container) {
        console.error("Aucun conteneur de critiques trouvé !");
        console.log("IDs recherchés: 'reviewsContainer' et classe '.reviews-container'");
        return;
    }
    
    console.log(`${reviews.length} critiques à afficher`);
    
    // HTML simplifié sans animations complexes
    container.innerHTML = reviews.map(review => `
        <div class="review-card" style="border: 1px solid #ddd; padding: 20px; margin: 15px; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                <div style="color: gold; font-size: 18px;">
                    ${generateStars(review.rating)}
                </div>
                <span style="background: #6c757d; color: white; padding: 4px 10px; border-radius: 12px; font-size: 12px;">
                    ${review.source}
                </span>
            </div>
            <p style="font-style: italic; color: #555; line-height: 1.6; margin-bottom: 15px;">
                "${review.text}"
            </p>
            <div style="display: flex; justify-content: space-between; border-top: 1px solid #eee; padding-top: 15px;">
                <strong style="color: #333;">${review.name}</strong>
                <span style="color: #777; font-size: 14px;">${review.date}</span>
            </div>
        </div>
    `).join('');
    
    console.log("Critiques affichées avec succès !");
}

// Initialisation DESACTIVÉE du carousel pour commencer
// Nous allons d'abord vérifier que les critiques s'affichent
const books = [
    {
        id: 1,
        title: "Between Fear and Courage",
        year: "2023",
        image: "images/book1.jpg",
        amazonLink: "https://www.amazon.com/After-You-My-Shadow-Mysterious-ebook/dp/B0DB6BBR5S?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.nQuMrDNoxNAaprp7Z3WYQDjcWsA5I4bFiGeSJzTpVekuBgOqCdRvQWs8rKVSs4ewjjlCVd0HNrvQiv7MfXNBHA.OdB9ge4Amsq1aF283BTSE_n-H30NC9wgMb4k84i9x-Q&dib_tag=AUTHOR",
        excerptLink: "excerpts.html"
    },
    {
        id: 2,
        title: "After You, My Shadow",
        year: "2025",
        image: "images/afteryou.webp",
        amazonLink: "https://www.amazon.com/After-You-My-Shadow-Mysterious-ebook/dp/B0DB6BBR5S/ref=sr_1_5?crid=2IXZO6EH8FY5E&dib=eyJ2IjoiMSJ9.ybKT6pGOM_Q124G7CHBGyENEc2_OvQTNU3oQq5T8MN6L1kurj01ywkwIw_3dDZuOHE1JT5un4O0_FZ5X15Xoow.6V0ajJj6Y3H-X_pAEyuY6EbYvepFSMDj5vY41f7SeJI&dib_tag=se&keywords=marwane+lamtaifi&qid=1765817746&sprefix=marwane+%2Caps%2C306&sr=8-5",
        excerptLink: "excerpts.html#shadow"
    },
    {
        id: 3,
        title: "Une nuit À Taghazout",
        year: "2025",
        image: "images/taghazout.webp",
        amazonLink: "https://www.amazon.com/Une-nuit-Taghazout-toujours-French/dp/B0G6D1J5Y4/ref=sr_1_1?crid=2IXZO6EH8FY5E&dib=eyJ2IjoiMSJ9.ybKT6pGOM_Q124G7CHBGyENEc2_OvQTNU3oQq5T8MN6L1kurj01ywkwIw_3dDZuOHE1JT5un4O0_FZ5X15Xoow.6V0ajJj6Y3H-X_pAEyuY6EbYvepFSMDj5vY41f7SeJI&dib_tag=se&keywords=marwane+lamtaifi&qid=1765817746&sprefix=marwane+%2Caps%2C306&sr=8-1",
        excerptLink: "excerpts.html#taghazout"
    },
    {
        id: 4,
        title: "The Whispers of Love",
        year: "2024",
        image: "images/book3.jpg",
        amazonLink: "https://www.amazon.com/Whispers-Love-Classic-Poem/dp/B0DBYG7W3Y/ref=sr_1_4?crid=2IXZO6EH8FY5E&dib=eyJ2IjoiMSJ9.ybKT6pGOM_Q124G7CHBGyENEc2_OvQTNU3oQq5T8MN6L1kurj01ywkwIw_3dDZuOHE1JT5un4O0_FZ5X15Xoow.6V0ajJj6Y3H-X_pAEyuY6EbYvepFSMDj5vY41f7SeJI&dib_tag=se&keywords=marwane+lamtaifi&qid=1765817746&sprefix=marwane+%2Caps%2C306&sr=8-4",
        excerptLink: "excerpts.html#whispers"
    },
    {
        id: 5,
        title: "Under the Fallen Moon",
        year: "2025",
        image: "images/under.jpg",
        amazonLink: "https://www.amazon.com/Under-Fallen-Moon-Written-Shadows/dp/B0G3L1MZG1?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.nQuMrDNoxNAaprp7Z3WYQDjcWsA5I4bFiGeSJzTpVekuBgOqCdRvQWs8rKVSs4ewjjlCVd0HNrvQiv7MfXNBHA.OdB9ge4Amsq1aF283BTSE_n-H30NC9wgMb4k84i9x-Q&dib_tag=AUTHOR",
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
 
 
];

// Fonctions utilitaires
function renderBooks(containerId, limit = null) {
    const container = document.getElementById(containerId);
    console.log(`Container "${containerId}" trouvé:`, container);
    
    if (!container) {
        console.error(`Container "${containerId}" non trouvé!`);
        return;
    }
    
    const booksToRender = limit ? books.slice(0, limit) : books;
    console.log(`Livres à afficher: ${booksToRender.length}`);
    
    container.innerHTML = booksToRender.map(book => `
        <div class="book-card">
            <div class="book-img">
                <img src="${book.image}" alt="${book.title}" loading="lazy">
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <div class="book-year">${book.year}</div>
                <div class="book-links">
                    <a href="${book.amazonLink}" class="book-link" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-amazon"></i> Amazon
                    </a>
                    <a href="${book.excerptLink}" class="book-link">
                        <i class="fas fa-book-open"></i> Excerpt
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    console.log(`HTML généré pour ${containerId}:`, container.innerHTML);
}

function renderBlogPosts(containerId, limit = null) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container "${containerId}" non trouvé!`);
        return;
    }
    
    const postsToRender = limit ? blogPosts.slice(0, limit) : blogPosts;
    
    container.innerHTML = postsToRender.map(post => `
        <div class="blog-card">
            <div class="blog-img">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
            </div>
            <div class="blog-content">
                <span class="blog-date">${post.date}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
              <a href="article.html" class="btn btn-primary read-more">
    Read More <i class="fas fa-arrow-right"></i>
</a>

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
            const href = this.getAttribute('href');
            
            if (href === '#' || href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
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
    const tabs = document.querySelectorAll('.book-tab');
    const excerpts = document.querySelectorAll('.book-excerpts');
    
    if (tabs.length === 0 || excerpts.length === 0) return;
    
    // Fonction pour changer d'onglet
    function switchTab(bookId) {
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
            switchTab(hash);
        } else {
            // Activer le premier onglet par défaut
            const firstTab = document.querySelector('.book-tab');
            if (firstTab) {
                const firstBookId = firstTab.getAttribute('data-book');
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

// Fonction pour initialiser la page de contact
function setupContactPage() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName')?.value;
            const email = document.getElementById('email')?.value;
            const subject = document.getElementById('subject')?.value;
            const message = document.getElementById('message')?.value;
            
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
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
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

// Initialisation générale
// Initialisation générale
document.addEventListener('DOMContentLoaded', function() {
    console.log("=== DÉBUT DE L'INITIALISATION ===");
    
    // Initialiser les composants communs
    setupMobileMenu();
    setupHeaderScroll();
    updateCopyrightYear();
    setupNewsletterForms();
    initAnimations();
    
    // DÉBUGAGE: Vérifier la page actuelle
    const currentPath = window.location.pathname;
    console.log("Chemin de la page:", currentPath);
    console.log("Hash URL:", window.location.hash);
    
    // Vérifier sur quelle page nous sommes
    if (currentPath.includes('contact.html')) {
        console.log("Page: Contact");
        setupContactPage();
        setupSmoothScroll();
    } else if (currentPath.includes('excerpts.html')) {
        console.log("Page: Excerpts");
        setupExcerptsPage();
        setupSmoothScroll();
    } else if (currentPath.includes('blog.html')) {
        console.log("Page: Blog");
        renderBlogPosts('blogPostsContainer');
    } else {
        console.log("Page: Accueil ou autre");
        
        // 1. AFFICHER LES LIVRES
        const booksContainer = document.getElementById('booksGrid');
        console.log("Conteneur booksGrid:", booksContainer);
        if (booksContainer) {
            renderBooks('booksGrid', 5);
        }
        
        // 2. AFFICHER LES ARTICLES DE BLOG
        const blogContainer = document.getElementById('blogPosts');
        console.log("Conteneur blogPosts:", blogContainer);
        if (blogContainer) {
            renderBlogPosts('blogPosts', 3);
        }
        
        // 3. CRITIQUES: TOUJOURS ESSAYER D'AFFICHER
        console.log("Tentative d'affichage des critiques...");
        
        // Vérifier si la section reviews existe
        const reviewsSection = document.getElementById('reviews');
        console.log("Section reviews trouvée:", reviewsSection);
        
        // Appeler IMMÉDIATEMENT la fonction renderReviews
        renderReviews();
        
        // 4. Initialiser le formulaire de contact
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            console.log("Formulaire de contact trouvé");
            setupContactForm();
        }
        
        setupSmoothScroll();
    }
    
    console.log("=== FIN DE L'INITIALISATION ===");
});