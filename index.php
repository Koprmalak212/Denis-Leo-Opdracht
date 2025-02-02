<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tamagotchi</title>
    <link rel="stylesheet" href="main.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
<div class="Buttons">
    <div class="Button1" id="FeedButton" onclick="increaseHunger(10)">Feed</div>
    <div class="Button1" id="RestButton" onclick="increaseEnergy(10)">Rest</div>
</div>

<!-- This checks to see how many stats are at 0 -->
<div class="gamecontainer" id="Check_For_Nul">

    <!--    Main Text-->
    <h1>Keep Potato-Head Alive!🥔</h1>

    <!--    Tamagotchi Image-->
    <div class="ImgContainer" >
        <img src="P_Assets/Happy_Potato.png" alt="" id="Image">
    </div>

    <!--Stat divs-->
    <div class="Stats">
        <div class="HPStat" id="HPStat">
            HP: 100/100
        </div>
        <div class="HungerStat" id="HungerStat">
            Hunger: 100/100
        </div>
        <div class="OBStat" id="ObesityStat">
            Obesity: 0/100
        </div>
        <div class="ERStat" id="EnergyStat">
            Energy: 100/100
        </div>
        <div class="FunStat" id="FunStat">
            Fun: 100/100
        </div>
        <div class="BrainRot" id="BrainRot">
            BrainRot: 0/100
        </div>
    </div>

</div>

<div class="Buttons">
    <div class="Button1" id="PlayButton" onclick="increaseFun(10)" >Play</div>
    <div class="Button1" id="KillButton" onclick="Alert()">Kill ;</div>

</div>

<div class="messageBox">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
        <!-- Main bubble -->
        <path d="M10 10 h260 a20 20 0 0 1 20 20 v40 a20 20 0 0 1 -20 20 h-160 l-30 20 v-20 h-70 a20 20 0 0 1 -20 -20 v-40 a20 20 0 0 1 20 -20 z"
              fill="#d1f1ff" stroke="#a7e0ff" stroke-width="2"/>
        <!-- Text inside the bubble -->
        <text id="message" x="20" y="60" font-size="24" font-family="Arial, sans-serif" fill="#000">
            Hello, this is a test!
        </text>
    </svg>

</div>

<script src="scripts/Hunger.js"></script>
<script src="scripts/Fun.js" ></script>
<script src="scripts/message.js"></script>
<script src="scripts/EnergyBar.js"></script>
<script src="scripts/Central_Image_Handler.js"></script>
<script src="scripts/Health_Decrease.js"></script>
<script src="scripts/Kill.js"></script>
<script>

</script>

</body>


</html>