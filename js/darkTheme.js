const themeToggle = document.querySelector('.toggle-theme');
let content = document.querySelector('.hero');

themeToggle.addEventListener('click', () => {
    if (content.classList.contains('dark')) {
        content.classList.remove('dark');
    } else {
        content.classList.add('dark');
    }
});