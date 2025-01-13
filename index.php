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
    <div class="Button1" id="RestButton">Rest</div>
</div>

<div class="gamecontainer">

    <!--    Main Text-->
    <h1>Keep Potato-Head Alive!🥔</h1>

    <!--    Tamagotchi Image-->
    <div class="ImgContainer">
        <img src="assets/potatohead.png" alt="">
    </div>

    <!--Stat divs-->
    <div class="Stats">
        <div class="HPStat">
            HP: 100/100
        </div>
        <div class="HungerStat" id="HungerStat">
            Hunger: 100/100
        </div>
        <div class="OBStat" id="ObesityStat">
            Obesity: 0/100
        </div>
        <div class="ERStat">
            Energy: 100/100
        </div>
        <div class="FunStat" id="FunStat">
            Fun: 100/100
        </div>
        <div class="BrainRot" id="BrainRot">
            BrainRot: 100/100
        </div>
    </div>

</div>

<div class="messageBox">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
        <!-- Main bubble -->
        <path d="M10 10 h260 a20 20 0 0 1 20 20 v40 a20 20 0 0 1 -20 20 h-160 l-30 20 v-20 h-70 a20 20 0 0 1 -20 -20 v-40 a20 20 0 0 1 20 -20 z"
              fill="#d1f1ff" stroke="#a7e0ff" stroke-width="2"/>
        <!-- Text inside the bubble -->
        <text  id="message"  x="20" y="55" font-size="24" font-family="Arial, sans-serif" fill="#000">

        </text>
    </svg>

</div>

<div class="Buttons">
    <div class="Button1" id="PlayButton">Play</div>
    <div class="Button1" id="KillButton">Kill ;)</div>
</div>

<script src="scripts/Hunger.js"></script>
<script src="scripts/message.js"></script>

<script>

</script>

</body>


</html>