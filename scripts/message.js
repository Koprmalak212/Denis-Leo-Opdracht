// Variable to store the current message
let currentMessage = "";

// Select the message element
const messageElement = document.getElementById("message");

// Function to update the message
function updateMessage(newMessage) {
    // Update the current message
    currentMessage = newMessage;

    // Update the message element's content
    messageElement.innerHTML = currentMessage;

    // Log the message to the console
    console.log("Message sent: " + currentMessage);
}

// Example usage
setInterval(function(){
    HandlerForText()
},1000)


function HandlerForText() {
    let priorityMessage = "";

    // Check conditions in priority order
    if (CurrentHP === 0 ){
     priorityMessage = "You let me die, you monster *dead*"
    }
    else  if (CurrentHP < 70) {
        priorityMessage = "I'm feeling weak... My HP is low!";
    } else if (currentHunger < 30) {
        priorityMessage = "I'm starving... Need food!";
    } else if (currentFun < 30) {
        priorityMessage = "I'm bored... Let's play!";
    } else if (currentEnergy < 0) {
        priorityMessage = "I'm exhausted... Need rest!";
    }

    // Update the message if a priority message was set
    if (priorityMessage) {
        updateMessage(priorityMessage);
    }
}

