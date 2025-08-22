import state from './state';
import createModal from './createModal';

export default function initGame(btn, clickedLetter) {
	const wordDisplay = document.querySelector('.word-display');
	const guessCounterDiv = document.querySelector('.guesses-text b');
	const hangmanImage = document.querySelector('.hangman-box img');

	if (state.currentWord.includes(clickedLetter)) {
		[...state.currentWord].forEach((letter, index) => {
			if (letter === clickedLetter) {
				state.correctLetters.push(letter);
				wordDisplay.querySelectorAll('li')[index].innerText = letter;
				wordDisplay.querySelectorAll('li')[index].classList.add('guesseed');
			}
		});
	} else {
		state.wrongGuessCount++;
		hangmanImage.src = `/hangman-${state.wrongGuessCount}.svg`;
	}
	btn.disabled = true;
	guessCounterDiv.textContent = `${state.wrongGuessCount} / ${state.maxGuess}`;

	if (state.wrongGuessCount === state.maxGuess) return createModal(false, state.currentWord);
	if (state.correctLetters.length === state.currentWord.length) return createModal(true, state.currentWord);
}
