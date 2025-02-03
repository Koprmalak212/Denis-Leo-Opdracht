// Initialize current and maximum HP values
let CurrentHP = 100;
let MaxHP = 100;

// Load the health decrease sound effect
let healthSound = new Audio("health_decrease_sound.mp3");
healthSound.preload = "auto"; // Preload for better performance

// Get references to the HTML elements for displaying health stats and checking for null values
const HealthStatDiv = document.getElementById("HPStat");
const CheckForNul = document.getElementById("Check_For_Nul");

// Set an attribute "Nul" to "0" on the CheckForNul element and log its value to the console
CheckForNul.setAttribute("Nul", "0");
console.log(CheckForNul.getAttribute("Nul"));

// Update the health stat display with the current HP values
HealthStatDiv.innerText = `HP: ${CurrentHP}/${MaxHP}`;

/**
 * Decreases the current HP by a specified amount and updates the health stat display.
 * Also updates the background gradient of the health stat display based on the remaining HP percentage.
 * Plays a sound effect when HP decreases.
 * @param {number} amount - The amount by which to decrease the current HP.
 */
function DecreaseHP(amount) {
    if (CurrentHP > 0) {
        // Play sound effect
        healthSound.currentTime = 0; // Restart the sound to prevent delay
        healthSound.play();
    }

    // Calculate the current HP percentage
    let hpPercentage = (CurrentHP / MaxHP) * 100;

    // Decrease the current HP, ensuring it doesn't go below 0
    CurrentHP = Math.max(0, CurrentHP - amount);

    // Update the health stat display with the new HP values
    HealthStatDiv.innerText = `HP: ${CurrentHP}/${MaxHP}`;

    // Update the background gradient to reflect the current HP percentage
    HealthStatDiv.style.background = `linear-gradient(to right, #f196a4 ${hpPercentage}%, #ac7a7a ${hpPercentage}%)`;
}

// Set an interval to periodically check and decrease HP based on other conditions
setInterval(function () {
    // Check various conditions and decrease HP accordingly
    if (currentEnergy === 0 && currentHunger === 0 && currentFun === 0) {
        DecreaseHP(5);
    } else if (currentEnergy === 0 && currentHunger === 0) {
        DecreaseHP(3);
    } else if (currentEnergy === 0 && currentFun === 0) {
        DecreaseHP(3);
    } else if (currentHunger === 0 && currentFun === 0) {
        DecreaseHP(3);
    } else if (currentEnergy === 0 || currentHunger === 0 || currentFun === 0) {
        DecreaseHP(1);
    }
}, 1000); // The interval is set to 1000 milliseconds (1 second)
