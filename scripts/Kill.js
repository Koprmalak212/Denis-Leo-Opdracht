let Count = 0
const Jumpscare = "Video_and_audio/Jumpscare.mp4"
const Paint_dry = "Video_and_audio/PaintDry.mp4"
let Video1 = document.getElementById("Video")
let VidDiv1 = document.getElementById("Vid")
Video1.src = Paint_dry
Video1.load()

function Alert(){
    if (CurrentHP ===0){

    }
    if (Count ===0){
        Count++
    alert("Why would you try killing the potato, you heartless bastard?")}
    else if (Count===1){
        Count++
        alert("Again, really?")
        alert("Do you have no soul? Do you really want those french fries?")
    }else if (Count===2){
        Count++
        alert("I'm warning you, you better stop, or else you wont like what's going to happen")
    }else if (Count===3){
        alert('I warned you...')
        alert("You are now being sentenced with watching paint dry.")

        VidDiv1.style.display = "block"
        VidDiv1.style.zIndex = "1"
        Video1.currentTime = 0;
        Video1.play()

    }
}