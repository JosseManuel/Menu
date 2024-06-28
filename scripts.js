document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const content = document.querySelector('.content');
    
    menuToggle.addEventListener('click', () => {
        document.body.classList.toggle('menu-open');
        content.classList.toggle('menu-blur');
    });
});
