document.addEventListener('DOMContentLoaded', function () {
    // Selecting necessary elements
    const body = document.body;
    const pageTitle = document.getElementById('pageTitle');
    const toggleDarkModeButton = document.getElementById('toggleDarkMode');

    // Event listener for the toggle button
    toggleDarkModeButton.addEventListener('click', function () {
        // Toggle dark mode class on the body element
        body.classList.toggle('dark-mode');

        // Check if dark mode is active
        const isDarkMode = body.classList.contains('dark-mode');

        // Update the header title based on the dark mode state
        pageTitle.textContent = isDarkMode ? 'Welcome to the Dark World!' : 'Welcome to the Captivating World!';
    });
});
