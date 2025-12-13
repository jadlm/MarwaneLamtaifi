// blog-data.js
const blogPosts = [
    {
        id: 1,
        title: "The Art of Character Development",
        date: "June 15, 2023",
        excerpt: "Exploring how to create multidimensional characters that resonate with readers and drive compelling narratives forward.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Writing Process",
        content: `
            <h2>Introduction</h2>
            <p>Full content of the article here...</p>
            <p>More paragraphs...</p>
        `
    },
    // ... autres articles
];
function setupBookTabs() {
    const tabs = document.querySelectorAll('.book-tab');
    const excerptsContainers = document.querySelectorAll('.book-excerpts');

    // Si on n'est pas sur la page excerpts, on ne fait rien
    if (tabs.length === 0) return;

    // Fonction pour changer de livre
    function switchBook(bookId) {
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
            } else {
                container.classList.remove('active');
            }
        });
    }

    // Ajouter un écouteur d'événements à chaque onglet
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const bookId = tab.getAttribute('data-book');
            switchBook(bookId);
        });
    });

    // Initialisation : on s'assure que le livre actif correspond à l'onglet actif
    // (normalement déjà le cas, mais au cas où)
    const activeTab = document.querySelector('.book-tab.active');
    if (activeTab) {
        const bookId = activeTab.getAttribute('data-book');
        switchBook(bookId);
    }
}