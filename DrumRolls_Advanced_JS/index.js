var buttons = document.querySelectorAll(".drum");

for (var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
    }

function handleClick() {
    var audio = new Audio("./sounds/tom-1.mp3");
    return audio.play();
}