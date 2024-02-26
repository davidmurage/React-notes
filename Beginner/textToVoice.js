//html
{/*<textarea></textarea>
<button>Speak</button>*/}


//js usage and implementation
button = document.querySelector("button");
text = document.querySelector("textarea");
button.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(utterance);
}); 