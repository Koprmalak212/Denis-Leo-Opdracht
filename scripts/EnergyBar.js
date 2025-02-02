// Hunger Variables
let currentEnergy = 100;
let maxEnergy = 100;

// Select the div
const EnergyStatDiv = document.getElementById("EnergyStat");


// Update Energy with hardcoded logic
EnergyStatDiv.innerText = `Energy: ${currentEnergy}/${maxEnergy}`;

// Decrease Energy over time
function decreaseEnergy(amount) {
    currentEnergy = Math.max(0, currentEnergy - amount);
    EnergyStatDiv.innerText = `Energy: ${currentEnergy}/${maxEnergy}`;
}

// Increase Energy
function increaseEnergy(amount) {
    currentEnergy = Math.min(100, currentEnergy + amount);
    EnergyStatDiv.innerText = `Energy: ${currentEnergy}/${maxEnergy}`;
    console.log("New Energy: " + currentEnergy);
}

// Decrease Energy at intervals
setInterval(function() {
    decreaseEnergy(1);
}, 200);
