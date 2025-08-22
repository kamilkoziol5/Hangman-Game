import state from './state';

export default function resetGame() {
	const modal = document.querySelector('.game-modal');

	state.correctLetters = [];
	state.wrongGuessCount = 0;

	const wordDisplay = document.querySelector('.word-display');
	if (wordDisplay && state.currentWord) {
		wordDisplay.innerHTML = state.currentWord
			.split('')
			.map(() => `<li class="letter"></li>`)
			.join('');
	}


	const letterButtons = document.querySelectorAll('.keyboard .btn');
	letterButtons.forEach(btn => (btn.disabled = false));


	const guessCounterDiv = document.querySelector('.guesses-text b');
	if (guessCounterDiv) guessCounterDiv.textContent = `0 / ${state.maxGuess}`;

	const hangmanImage = document.querySelector('.hangman-box img');
	if (hangmanImage) hangmanImage.src = `hangman-0.svg`;

	if (modal) modal.remove();
}
