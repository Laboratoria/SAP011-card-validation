const textContainer = document.getElementById('text');
const phrases = [
    "-Seu cartão foi negado.",
    "É, vamos precisar te levar de volta para a terra.",
    "Porém você não poderá pagar essa passagem pelo visto né",
    "Bem, verei com o meu comandante o que podemos fazer..."
];

let currentPhraseIndex = 0;

function showPhraseIndex(){
    if (currentPhraseIndex >= phrases.length){
        return;
    }

    textContainer.textContent = phrases[currrentPhraseIndex];
    currentPhraseIndex++;

    setTimeout(showPrhaseIndex,3000);
}

showNextPhrase();

const backgroundVideo = document.getElementById('background-video');
const repeatButton = document.getElementById('repeat-button');
const muteButton = document.getElementById('mute-button');

function repeatVideo(){
    backgroundVideo.currentTime = 0;
}

function toggleMute(){
    backgroundVideo.muted = !backgroundVideo.muted
}