console.log('JavaScript-Datei wurde geladen');

// Maus
document.addEventListener("mousemove", function(event) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';
});

// Hamburger-Menü
window.onload = function() {
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
        });
    } else {
        console.error('Element .menu-toggle wurde nicht gefunden!');
    }
};

// Navigation

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event wurde ausgelöst!');

    const nav = document.querySelector('nav');
    if (!nav) {
        console.error('Das <nav>-Element wurde nicht gefunden!');
        return;
    }

    const links = document.querySelectorAll('nav a');
    console.log('Gefundene Links:', links);

    const currentPath = window.location.pathname.replace(/\/+$/, '');
    console.log('Aktueller Pfad:', currentPath);

    links.forEach(link => {
        let linkHref = link.getAttribute('href').replace(/^\/+/, '');
        linkHref = `/${linkHref}`;
        
        console.log('Link Href:', linkHref);

        if (currentPath === linkHref) {
            console.log(`Aktiv: ${linkHref}`);
            link.classList.add('active');
        }
    });
});
