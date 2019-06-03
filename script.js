window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function from running al together
    audio.currentTime = 0;//restart the sound from the beginning
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;//skip it if its not a transform
this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



