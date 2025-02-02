let CurrentHP = 100
let MaxHP = 100

const HealthStatDiv = document.getElementById("HPStat")
const CheckForNul = document.getElementById("Check_For_Nul")

CheckForNul.setAttribute("Nul","0")
console.log(CheckForNul.getAttribute("Nul"))

HealthStatDiv.innerText = `HP: ${CurrentHP}/${MaxHP}`;

function DecreaseHP(amount){
    CurrentHP = Math.max(0,CurrentHP - amount)
    HealthStatDiv.innerText = `HP: ${CurrentHP}/${MaxHP}`;
}

setInterval(function (){
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

},1000)