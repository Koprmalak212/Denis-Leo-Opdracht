// Hunger Variables
let currentHunger = 100;
let MaxHunger = 100;
let currentObesity = 0;
let MaxObesity = 100;

// Select that fucking div
const hungerStatDiv = document.getElementById("HungerStat");
const obesityStatDiv = document.getElementById("ObesityStat");

// Update hunger with magic
hungerStatDiv.innerText = `Hunger: ${currentHunger}/${MaxHunger}`;

// Create an audio object for the eating sound effect
const eatingSound = new Audio('eating_sound_effect.mp3');

// Starve the mfkr
function decreaseHunger(amount) {
    let HungerPercentage = (currentHunger / MaxHunger) * 100;
    hungerStatDiv.style.background = `linear-gradient(to right, #8B4513 ${HungerPercentage}%, #ac7a7a ${HungerPercentage}%)`;

    currentHunger = Math.max(0, currentHunger - amount);
    hungerStatDiv.innerText = `Hunger: ${currentHunger}/${MaxHunger}`;
}

// Feed the potato
function increaseHunger(amount) {
    if (CurrentHP !== 0) {
        currentHunger = Math.min(100, currentHunger + amount);
        hungerStatDiv.innerText = `Hunger: ${currentHunger}/${MaxHunger}`;
        console.log("New Hunger: " + currentHunger);

        // Play the eating sound when hunger increases
        eatingSound.play();
    }

    if (currentHunger >= 80 && CurrentHP !== 0) {
        increaseObesity(5);
    }
}

// HUNGER
setInterval(function() {
    Handler(1);
}, 200);

// Obesity
function increaseObesity(amount) {
    currentObesity = Math.min(100, currentObesity + amount);
    obesityStatDiv.innerText = `Obesity: ${currentObesity}/${MaxObesity}`;

    // make sure the div is hidden until the value is higher than 0
    if (currentObesity > 0) {
        obesityStatDiv.style.display = "flex";
    } else if (currentObesity === 0) {
        document.getElementById("ObesityStat").style.display = "none";
    }
}

function decrease_Obesity() {
    if (currentHunger < 30 && currentObesity !== 0) {
        currentObesity--;
        obesityStatDiv.innerText = `Obesity: ${currentObesity}/${MaxObesity}`;
    } else if (currentObesity === 0) {
        document.getElementById("ObesityStat").style.display = "none";
    }
}

function Handler(amount) {

    decreaseHunger(amount);
    decrease_Obesity();
}

// hide obesity
document.getElementById("ObesityStat").style.display = "none";
