// Données pour les livres
const books = [
    {
        id: 1,
        title: "Whispers of the Midnight Sun",
        year: "2023",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        amazonLink: "#",
        excerptLink: "excerpts.html"
    },
    {
        id: 2,
        title: "The Silent Harbor",
        year: "2021",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        amazonLink: "#",
        excerptLink: "excerpts.html"
    },
    {
        id: 3,
        title: "Echoes of a Distant Summer",
        year: "2019",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        amazonLink: "#",
        excerptLink: "excerpts.html"
    },
    {
        id: 4,
        title: "The Secret Garden of Now",
        year: "2017",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        amazonLink: "#",
        excerptLink: "excerpts.html"
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
        link: "#"
    },
    {
        id: 2,
        title: "Finding Inspiration in Everyday Life",
        date: "May 3, 2023",
        excerpt: "How ordinary moments can transform into extraordinary stories with the right perspective and attention to detail.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Creative Inspiration",
        link: "#"
    },
    {
        id: 3,
        title: "The Writer's Routine: Myths and Realities",
        date: "April 18, 2023",
        excerpt: "Debunking common misconceptions about how writers work and finding a routine that fosters creativity and productivity.",
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Writing Process",
        link: "#"
    },
    {
        id: 4,
        title: "Overcoming Writer's Block",
        date: "March 22, 2023",
        excerpt: "Practical strategies for breaking through creative barriers and rediscovering your writing flow.",
        image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Writing Tips",
        link: "#"
    },
    {
        id: 5,
        title: "The Importance of Reading as a Writer",
        date: "February 14, 2023",
        excerpt: "How reading widely across genres can enhance your own writing and expand your creative horizons.",
        image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Writing Tips",
        link: "#"
    },
    {
        id: 6,
        title: "Building Fictional Worlds",
        date: "January 8, 2023",
        excerpt: "Creating immersive settings that feel authentic and serve the narrative without overwhelming the reader.",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Writing Process",
        link: "#"
    }
];

// Données pour les critiques
const reviews = [
    {
        id: 1,
        text: "Montague's prose is nothing short of breathtaking. She paints with words, creating landscapes so vivid you can feel the Arctic chill and smell the salt air of her coastal towns.",
        reviewer: "James Patterson",
        publication: "The New York Times Book Review",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 2,
        text: "A masterclass in character development. Montague's protagonists stay with you long after you've turned the final page, their journeys becoming part of your own.",
        reviewer: "Margaret Atwood",
        publication: "Literary Review Quarterly",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
        id: 3,
        text: "Elena Montague has solidified her position as one of the most important literary voices of our generation. Each novel is a gift to readers who cherish thoughtful, beautifully crafted fiction.",
        reviewer: "Colm Tóibín",
        publication: "The Guardian Books",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
];

// Données pour les extraits
const bookExcerpts = {
    whispers: [
        {
            chapter: "Chapter 1: The Arrival",
            content: "The plane descended through a veil of clouds, revealing a landscape so alien it took Elara's breath away. Below, the Arctic tundra stretched in every direction, a vast canvas of white and gray punctuated by dark patches of stubborn vegetation. The midnight sun hung low on the horizon, casting long, distorted shadows that seemed to reach for the aircraft as it made its final approach.",
            pages: "Pages 15-17"
        },
        {
            chapter: "Chapter 3: Arctic Silence",
            content: "The midnight sun hung low on the horizon, a reluctant sentinel against the encroaching darkness. In this land where day and night danced their eternal ballet, time seemed to stretch and bend, much like the shadows that elongated across the tundra.",
            pages: "Pages 45-47"
        },
        {
            chapter: "Chapter 5: First Light",
            content: "When the first true darkness finally fell, it wasn't the absence of light that startled Elara, but the sudden appearance of stars. Thousands of them, more than she had ever seen, emerged from behind a curtain she hadn't realized was there.",
            pages: "Pages 89-92"
        }
    ],
    harbor: [
        {
            chapter: "Chapter 2: Morning Fog",
            content: "The harbor slept under a blanket of fog, its usual bustle muted to a series of soft echoes. Ships lay anchored like slumbering giants, their masts piercing the gray morning sky.",
            pages: "Pages 34-36"
        },
        {
            chapter: "Chapter 7: Reflections",
            content: "He walked the weathered planks of the dock, each step a meditation. The salt air filled his lungs, and with each exhale, he released the doubts that had anchored him to a past he could no longer change.",
            pages: "Pages 122-125"
        }
    ],
    echoes: [
        {
            chapter: "Prologue: Summer 1972",
            content: "That summer smelled of cut grass and possibilities. The air hummed with cicadas, and time moved with the languid pace of honey dripping from a spoon.",
            pages: "Pages 3-5"
        }
    ],
    garden: [
        {
            chapter: "Chapter 4: The Hidden Door",
            content: "The ivy-covered wall looked impenetrable, but when Clara pushed at just the right spot, a section swung inward without a sound, revealing a world she had only glimpsed in dreams.",
            pages: "Pages 67-70"
        }
    ]
};

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
                    <a href="${book.amazonLink}" class="book-link"><i class="fab fa-amazon"></i> Amazon</a>
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

function renderReviews(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-text">
                ${review.text}
            </div>
            <div class="reviewer">
                <div class="reviewer-img">
                    <img src="${review.image}" alt="${review.reviewer}">
                </div>
                <div class="reviewer-info">
                    <h4>${review.reviewer}</h4>
                    <p>${review.publication}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderExcerpts() {
    const tabs = document.querySelectorAll('.book-tab');
    const excerptsContainer = document.querySelector('.excerpts-container');
    
    if (!tabs.length || !excerptsContainer) return;
    
    // Gestion des onglets
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const bookId = this.getAttribute('data-book');
            
            // Mettre à jour l'onglet actif
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Mettre à jour le contenu des extraits
            const bookExcerptsContainer = excerptsContainer.querySelector(`#${bookId}-excerpts`);
            if (bookExcerptsContainer) {
                document.querySelectorAll('.book-excerpts').forEach(ex => ex.classList.remove('active'));
                bookExcerptsContainer.classList.add('active');
            }
        });
    });
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
    const animateCards = document.querySelectorAll('.book-card, .blog-card, .review-card, .achievement, .excerpt-item');
    
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

// Initialisation générale
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les composants communs
    setupMobileMenu();
    setupHeaderScroll();
    setupSmoothScroll();
    updateCopyrightYear();
    setupNewsletterForms();
    initAnimations();
    
    // Rendre les livres sur la page d'accueil
    renderBooks('booksGrid', 3);
    
    // Rendre les articles de blog sur la page d'accueil
    const blogPreviewContainer = document.getElementById('blogPostsContainer');
    if (blogPreviewContainer) {
        // Page de blog complète
        renderBlogPosts('blogPostsContainer');
    } else {
        // Aperçu sur la page d'accueil
        renderBlogPosts('blogPosts', 3);
    }
    
    // Rendre les critiques
    renderReviews('reviewsContainer');
    
    // Initialiser les extraits (si sur la page excerpts)
    renderExcerpts();
    
    // Initialiser le formulaire de contact
    setupContactForm();
});
// Dans la fonction renderBlogPosts
container.innerHTML = postsToRender.map(post => `
    <div class="blog-card">
        <div class="blog-img">
            <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="blog-content">
            <span class="blog-date">${post.date}</span>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <a href="blog-post.html?id=${post.id}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
`).join('');
// Fonction pour gérer la navigation entre les livres
// Gestion des onglets des livres pour la page excerpts.html
function setupBookTabs() {
    const tabs = document.querySelectorAll('.book-tab');
    const excerptsContainers = document.querySelectorAll('.book-excerpts');
    
    // Si on n'est pas sur la page excerpts, on ne fait rien
    if (tabs.length === 0 || excerptsContainers.length === 0) return;
    
    // Fonction pour changer de livre
    function switchBook(bookId) {
        console.log(`Chargement du livre: ${bookId}`);
        
        // Mettre à jour les onglets
        tabs.forEach(tab => {
            if (tab.getAttribute('data-book') === bookId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        // Mettre à jour les conteneurs d'extraits
        excerptsContainers.forEach(container => {
            if (container.id === `${bookId}-excerpts`) {
                container.classList.add('active');
                container.style.display = 'block';
                
                // Animation de fondu
                container.style.animation = 'fadeIn 0.5s ease';
            } else {
                container.classList.remove('active');
                container.style.display = 'none';
            }
        });
        
        // Faire défiler vers le haut de la section si sur mobile
        if (window.innerWidth < 768) {
            setTimeout(() => {
                document.querySelector('.excerpts-page-section').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
    
    // Ajouter un écouteur d'événements à chaque onglet
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const bookId = this.getAttribute('data-book');
            switchBook(bookId);
            
            // Mettre à jour l'URL sans recharger la page
            history.pushState(null, null, `#${bookId}`);
        });
    });
    
    // Vérifier si une ancre est présente dans l'URL au chargement
    function checkInitialBook() {
        const hash = window.location.hash.substring(1); // Retirer le #
        const validBookIds = ['fear', 'shadow', 'taghazout', 'whispers', 'moon'];
        
        if (hash && validBookIds.includes(hash)) {
            // Si l'URL contient une ancre valide, charger ce livre
            switchBook(hash);
        } else {
            // Sinon, charger le livre actif par défaut
            const activeTab = document.querySelector('.book-tab.active');
            if (activeTab) {
                const initialBookId = activeTab.getAttribute('data-book');
                switchBook(initialBookId);
            }
        }
    }
    
    // Gérer les changements d'URL (navigation avant/arrière)
    window.addEventListener('popstate', checkInitialBook);
    
    // Initialiser au chargement
    checkInitialBook();
}

// Initialisation de la page excerpts
function initExcerptsPage() {
    setupBookTabs();
    
    // Ajouter l'animation aux éléments d'extraits
    const excerptItems = document.querySelectorAll('.excerpt-item');
    excerptItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Modifiez la fonction d'initialisation principale dans main.js :
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les composants communs
    setupMobileMenu();
    setupHeaderScroll();
    setupSmoothScroll();
    updateCopyrightYear();
    setupNewsletterForms();
    initAnimations();
    
    // Initialiser la page spécifique
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('excerpts.html')) {
        initExcerptsPage();
    } else if (currentPage.includes('index.html') || currentPage === '/') {
        // Rendre les livres sur la page d'accueil
        renderBooks('booksGrid', 3);
        
        // Rendre les articles de blog sur la page d'accueil
        const blogPreviewContainer = document.getElementById('blogPostsContainer');
        if (blogPreviewContainer) {
            // Page de blog complète
            renderBlogPosts('blogPostsContainer');
        } else {
            // Aperçu sur la page d'accueil
            renderBlogPosts('blogPosts', 3);
        }
        
        // Rendre les critiques
        renderReviews('reviewsContainer');
        
        // Initialiser le formulaire de contact
        setupContactForm();
    } else if (currentPage.includes('blog.html')) {
        // Initialiser la page blog
        renderBlogPosts('blogPostsContainer');
    }
});
// Dans votre fichier main.js

function setupExcerptsPage() {
    // Sélectionner tous les onglets et toutes les sections d'extraits
    const tabs = document.querySelectorAll('.book-tab');
    const excerpts = document.querySelectorAll('.book-excerpts');

    // Si on n'est pas sur la page des extraits, ne rien faire
    if (tabs.length === 0 || excerpts.length === 0) return;

    // Fonction pour changer d'onglet
    function switchTab(bookId) {
        // Désactiver tous les onglets et sections
        tabs.forEach(tab => tab.classList.remove('active'));
        excerpts.forEach(excerpt => excerpt.classList.remove('active'));

        // Activer l'onglet cliqué
        const activeTab = document.querySelector(`.book-tab[data-book="${bookId}"]`);
        if (activeTab) activeTab.classList.add('active');

        // Afficher la section correspondante
        const activeExcerpt = document.getElementById(`${bookId}-excerpts`);
        if (activeExcerpt) activeExcerpt.classList.add('active');
    }

    // Ajouter un écouteur d'événement à chaque onglet
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const bookId = this.getAttribute('data-book');
            switchTab(bookId);
        });
    });

    // Activer le premier onglet par défaut
    if (tabs.length > 0) {
        const firstTab = tabs[0];
        const firstBookId = firstTab.getAttribute('data-book');
        switchTab(firstBookId);
    }
}

// Dans la fonction d'initialisation principale, appeler setupExcerptsPage si on est sur la page d'extraits
document.addEventListener('DOMContentLoaded', function() {
    // ... autres initialisations ...

    // Initialisation de la page d'extraits
    setupExcerptsPage();

    // ... autres initialisations ...
});