// Toggle active state for filter buttons
document.querySelectorAll('.btn-outline-secondary').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});

// Placeholder for search functionality
document.querySelector('.form-control').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    // Implement filtering logic based on `query` to filter items
    console.log("Searching for:", query);
});
