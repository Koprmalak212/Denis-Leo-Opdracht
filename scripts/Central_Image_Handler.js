let Image = document.getElementById("Image")
const Images = ["P_Assets/Happy_Potato.png","P_Assets/Hungry_Potato.png"]


function Set_Image(){
   if (currentHunger  > 70 && currentEnergy >70 && currentFun>70) {
       Image.src =Images[0]
   }else if (currentHunger  < 70 && currentHunger > 30|| currentEnergy <70 && currentEnergy > 30||
       currentFun<70 && currentFun > 30){
       Image.src = Images[1]
   }
}

setInterval(function(){
    Set_Image()
},100)