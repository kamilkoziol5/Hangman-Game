export default function renderApp() {
	const app = document.querySelector('#app');
	const ctn = document.createElement('div');
	ctn.classList.add('container');
	ctn.innerHTML = `
    <div class="hangman-box">
				<img src="hangman-0.svg" alt="" />
				<h1>Hangman</h1>
			</div>
			<div class="game-box">
				<ul class="word-display"></ul>
				<h4 class="hint-text">
					Wskazówka:
					<b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
				</h4>
				<h4 class="guesses-text">
					Błedy:
					<b>0 / 6</b>
				</h4>
				<div class="keyboard"></div>
			</div>
    `;

	app.append(ctn);
}
