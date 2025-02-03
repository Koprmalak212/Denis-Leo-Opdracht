let Count = 0
const Jumpscare = "Video_and_audio/Jumpscare.mp4"
const Paint_dry = "Video_and_audio/PaintDry.mp4"
const Video = document.getElementById("Video")
const VidDiv = document.getElementById("Vid")


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
        Video.src = Paint_dry
        VidDiv.style.display = "block"
        VidDiv.style.zIndex = "1"
        Video.currentTime = 0;
        Video.play()

    }
}