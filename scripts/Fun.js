// Hunger Variables
let currentFun = 100;
let MaxFun = 100;
let currentBrainrot = 0;
let maxBrainrot = 100;



// Select that fucking div
const FunStatDiv = document.getElementById("FunStat")
const BrainRotDiv = document.getElementById("BrainRot")
// Update hunger with magic
FunStatDiv.innerText = `Hunger: ${currentFun}/${MaxFun}`;

// Make them watch paint dry in real time
function decreaseFun(amount) {
    currentFun = Math.max (0, currentFun - amount);
    FunStatDiv.innerText = `Fun: ${currentFun}/${MaxFun}`;
}

// Feed the potato
function increaseFun(amount) {
    currentFun = Math.min(100, currentFun + amount);
    FunStatDiv.innerText = `Fun: ${currentFun}/${MaxFun}`;
    console.log("New Fun: " + currentFun);
    if (Cu >= 80) {
        increaseBrainRot    (5);
    }
}

// HUNGER
setInterval(function() {
    decreaseFun(1);
}, 200);

// Obesity

function increaseBrainRot(amount) {
    currentBrainrot = Math.min(100, currentObesity + amount);
    BrainRotDiv.innerText = `BrainRot: ${  currentBrainrot}/${maxBrainrot}`;

    // make sure the div is hidden until the value is higher then 0
    if (currentBrainrot > 0) {
        BrainRot.style.display = "flex";
    }
}

// hide obesity
document.getElementById("BrainRot").style.display = "none";

