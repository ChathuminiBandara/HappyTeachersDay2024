const initialGiftBox = document.getElementById("initialGiftBox");
const messageContainer = document.getElementById("messageContainer");
const celebrateBtn = document.getElementById("celebrateBtn");
const giftBoxesContainer = document.getElementById("giftBoxes");

initialGiftBox.addEventListener("click", () => {
    // Hide the initial gift box
    initialGiftBox.style.display = 'none';

    // Show the message container
    messageContainer.classList.remove("hidden");
});

celebrateBtn.addEventListener("click", () => {
    // Trigger confetti
    confetti();

    // Create and display gift boxes
    for (let i = 0; i < 5; i++) {
        const giftBox = document.createElement("div");
        giftBox.classList.add("gift-box");
        giftBox.style.left = `${Math.random() * 90}vw`; // Position the box within the viewport
        giftBox.style.top = `${Math.random() * 90}vh`;
        giftBox.style.animationDelay = `${i * 0.1}s`; // Stagger the animation
        giftBoxesContainer.appendChild(giftBox);

        // Remove gift box after animation
        setTimeout(() => {
            giftBoxesContainer.removeChild(giftBox);
        }, 1000);
    }
});
