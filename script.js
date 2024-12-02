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

