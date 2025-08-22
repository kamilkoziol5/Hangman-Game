import initGame from './initGame';

export default function createKeyboard() {
	const keyboard = document.querySelector('.keyboard');

	for (let i = 97; i <= 122; i++) {
		const button = document.createElement('button');
		button.classList.add('btn');
		button.innerText = String.fromCharCode(i);
		keyboard.append(button);
		button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)));
	}
}
