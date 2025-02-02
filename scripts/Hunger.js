// Hunger Variables
let currentHunger = 100;
let MaxHunger = 100;
let currentObesity = 0;
let MaxObesity = 100;


// Select that fucking div
const hungerStatDiv = document.getElementById("HungerStat")
const obesityStatDiv = document.getElementById("ObesityStat")

// Update hunger with magic
hungerStatDiv.innerText = `Hunger: ${currentHunger}/${MaxHunger}`;

// Starve the mfkr
function decreaseHunger(amount) {
    currentHunger = Math.max (0, currentHunger - amount);
    hungerStatDiv.innerText = `Hunger: ${currentHunger}/${MaxHunger}`;

}

// Feed the potato
function increaseHunger(amount) {
    currentHunger = Math.min(100, currentHunger + amount);
    hungerStatDiv.innerText = `Hunger: ${currentHunger}/${MaxHunger}`;
    console.log("New Hunger: " + currentHunger);
    if (currentHunger >= 80) {
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

    // make sure the div is hidden until the value is higher then 0
    if (currentObesity > 0) {
        obesityStatDiv.style.display = "flex";
    }else if(currentObesity === 0){
        document.getElementById("ObesityStat").style.display = "none";

    }
}

function decrease_Obesity() {
    if (currentHunger < 30 && currentObesity !== 0) {
        currentObesity--
        obesityStatDiv.innerText = `Obesity: ${currentObesity}/${MaxObesity}`;

    } else if (currentObesity === 0) {
        document.getElementById("ObesityStat").style.display = "none";
    }
}

function Handler(amount){
    decreaseHunger(amount)
    decrease_Obesity()
}



// hide obesity
document.getElementById("ObesityStat").style.display = "none";

