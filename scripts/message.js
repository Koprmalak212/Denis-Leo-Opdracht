// variable
let currentMessage = ""

// select text
const message = document.getElementById("message");


// message function

function sendMessage(){;
    // what does it say
    currentMessage = "test";

    // update message
    message.innerHTML = currentMessage;

    // console log
    console.log("Message sent: " + currentMessage);
}

// voorbeeld
currentMessage = "Hmmmm...";
message.innerHTML = currentMessage;
console.log("Message sent: " + currentMessage);
// ^^ starting message
setTimeout(() => {
    currentMessage = "I seem to hunger...";
    message.innerHTML = currentMessage;
    console.log("Message sent: " + currentMessage);
}, 2000); //^^ Wait 2 second then change text

setTimeout(() => {
    currentMessage = "Feed me Farther!";
    message.innerHTML = currentMessage;
    console.log("Message sent: " + currentMessage);
}, 5000); // Wait 3 seconds more and change text again

