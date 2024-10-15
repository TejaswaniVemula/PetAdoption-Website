document.addEventListener("DOMContentLoaded", function() {
    // Get all filter buttons
    const filterButtons = document.querySelectorAll(".filter-buttons button");

    // Get all pet cards
    const petCards = document.querySelectorAll(".pet-card");

    // Add event listener to each button
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Loop through all pet cards
            petCards.forEach(card => {
                // Check the data-category of each pet card
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block"; // Show the pet card if it matches the filter
                } else {
                    card.style.display = "none"; // Hide the pet card if it doesn't match
                }
            });
        });
    });
});
