window.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    stylePlaying(e.keyCode);
    playAudio(e.keyCode);
});
window.addEventListener('keyup', function(e) {
    styleUp(e.keyCode);
});

const audioList = document.getElementsByTagName('audio');
console.log(audioList);


// function to play audio
// needs to be able to play 1+ audios at the same time
function playAudio (keycode) {
    const audioClip = document.querySelector(`audio[data-key="${keycode}"]`)
    audioClip.load();
    audioClip.play();
}

// function to change the style of the pressed key
function stylePlaying (keycode) {
    const button = document.querySelector(`div[data-key="${keycode}"]`);
    button.classList.add("playing");
}
function styleUp (keycode) {
    const button = document.querySelector(`div[data-key="${keycode}"]`);
    button.classList.remove("playing");
}
