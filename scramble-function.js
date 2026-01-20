const firstAmendment = "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.";

// Function to scramble the words in the text
function scrambleWords(text) {
    // Split the text into words
    const words = text.split(' ');
    
    // Fisher-Yates shuffle algorithm
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [words[i], words[j]] = [words[j], words[i]];
    }
    
    // Join the scrambled words back together
    return words.join(' ');
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const scrambledDiv = document.getElementById('scrambled');
    
    // Function to update the scrambled text
    function updateScrambledText() {
        const scrambled = scrambleWords(firstAmendment);
        scrambledDiv.textContent = scrambled;
        
        // Add animation class
        scrambledDiv.style.animation = 'none';
        setTimeout(() => {
            scrambledDiv.style.animation = '';
        }, 10);
    }
    
    // Scramble once on page load
    updateScrambledText();
    
    // Scramble every 30 seconds (30000 milliseconds)
    setInterval(updateScrambledText, 30000);
});
