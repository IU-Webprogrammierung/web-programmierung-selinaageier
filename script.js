document.addEventListener("mousemove", function(event) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';
});
