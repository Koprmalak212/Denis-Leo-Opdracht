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
        <div class="FunStat">
            Fun: 100/100
        </div>
    </div>

</div>

<div class="Buttons">
    <div class="Button1" id="PlayButton">Play</div>
    <div class="Button1" id="KillButton">Kill ;)</div>
</div>

<script src="scripts/Hunger.js"></script>

<script>

</script>

</body>


</html>