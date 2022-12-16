const keyMap = {
    65: "sounds/clap.wav",
    83: "sounds/hihat.wav",
};

document.addEventListener("keypress",(event) => {
    const keycode = event.keyCode.toString();
    console.log(keycode);
    audioLocation = keyMap[event.keyCode.toString()];
    var audio = new Audio(audioLocation);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    var element = document.getElementById(keycode);
    element.classList.add("playing");

    setTimeout(revertBack, 500);
    function revertBack() {
        element.classList.remove("playing");
    };
    
})