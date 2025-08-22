import wordList from '../../DATA/word-list.json';
import state from './state';
import resetGame from './resetGame';

export default function getRandomWord() {
	const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];

	state.currentWord = word;
	
	const title = document.querySelector('.hint-text b');
	title.innerText = hint;

	resetGame();
}
