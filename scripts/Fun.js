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
    let FunPercentage = (currentFun / MaxFun) * 100;
    FunStatDiv.style.background = `linear-gradient(to right, #4169E1
     ${FunPercentage}%, #ac7a7a ${FunPercentage}%)`;


    currentFun = Math.max (0, currentFun - amount);
    FunStatDiv.innerText = `Fun: ${currentFun}/${MaxFun}`;
}

// Feed the potato
function increaseFun(amount) {
    if (CurrentHP !== 0 ){
    currentFun = Math.min(100, currentFun + amount);
    FunStatDiv.innerText = `Fun: ${currentFun}/${MaxFun}`;
    console.log("New Fun: " + currentFun);}
      if (currentFun >= 80) {
        increaseBrainRot(5);
    }
}

// No more fun
setInterval(function() {
    decreaseFun(1)
    decrease_BrainRot();
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

function decrease_BrainRot() {
    if (currentFun < 30 && currentBrainrot !== 0) {
        currentBrainrot--
        BrainRotDiv.innerText = `BrainRot: ${currentBrainrot}/${maxBrainrot}`;

    } else if (currentBrainrot === 0) {
        document.getElementById("BrainRot").style.display = "none";
    }
}




