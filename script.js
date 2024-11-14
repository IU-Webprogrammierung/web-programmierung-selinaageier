console.log('JavaScript-Datei wurde geladen');

// Maus
document.addEventListener("mousemove", function(event) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';
});

// Hamburger-Menü
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Navigation
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event wurde ausgelöst');
    const nav = document.querySelector('nav');
    if (!nav) {
        console.error('Das <nav>-Element wurde nicht gefunden!');
        return;
    }

    const links = document.querySelectorAll('nav a');
    console.log('Gefundene Links:', links);
    const currentPath = window.location.pathname.replace(/\/+$/, '');

    links.forEach(link => {
        const linkHref = '/' + link.getAttribute('href').replace(/^\/+/, '').replace(/\/+$/, '');
        console.log('Link Href:', linkHref);
        if (currentPath.includes(linkHref)) {
            link.classList.add('active');
        }
    });
});
