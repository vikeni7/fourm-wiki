document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        themeToggleButton.textContent = 'Switch to Light Mode';
    } else {
        body.classList.add('light-mode');
        header.classList.add('light-mode');
        themeToggleButton.textContent = 'Switch to Dark Mode';
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            header.classList.remove('light-mode');
            header.classList.add('dark-mode');
            themeToggleButton.textContent = 'Switch to Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            header.classList.remove('dark-mode');
            header.classList.add('light-mode');
            themeToggleButton.textContent = 'Switch to Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    });
});
