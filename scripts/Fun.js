// Hunger Variables
let currentFun = 100;
let MaxFun = 100;
let currentBrainrot = 0;
let maxBrainrot = 100;



// Select that fucking div
const FunStatDiv = document.getElementById("FunStat")
const BrainRotDiv = document.getElementById("BrainRot")
// Update Fun with hardcoded logic
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
    if (currentFun >= 80) {
        increaseBrainRot(5);
    }
}

// No more fun
setInterval(function() {
    decreaseFun(1);
}, 200);

// Brainrot addiction

function increaseBrainRot(amount) {
    currentBrainrot = Math.min(100, currentBrainrot + amount);
    BrainRotDiv.innerText = `BrainRot: ${  currentBrainrot}/${maxBrainrot}`;
    ShutDownImminent()
    // make sure the div is hidden until the value is higher then 0
    if (currentBrainrot > 0) {
        BrainRotDiv.style.display = "flex";
    }
}

// hide obesity
document.getElementById("BrainRot").style.display = "none";


function ShutDownImminent() {
    if (currentBrainrot === 100) {
        alert("BRAINROT LEVELS DETECTED, NOW COMMENCING SHUTDOWN")
    }
}

function whileFun(){
    while (currentFun !== 0){

    }
}