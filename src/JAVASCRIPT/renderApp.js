import initGame from './initGame';

export default function renderApp() {
	const app = document.querySelector('#app');
	const ctn = document.createElement('div');
	ctn.classList.add('container');
	ctn.innerHTML = `
    <div class="hangman-box">
				<img src="/hangman-0.svg" alt="" />
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
				<div class="keyboard">
				<button class="btn" data-letter="a">a</button>
				<button class="btn" data-letter="b">b</button>
				<button class="btn" data-letter="c">c</button>
				<button class="btn" data-letter="d">d</button>
				<button class="btn" data-letter="e">e</button>
				<button class="btn" data-letter="f">f</button>
				<button class="btn" data-letter="g">g</button>
				<button class="btn" data-letter="h">h</button>
				<button class="btn" data-letter="i">i</button>
				<button class="btn" data-letter="j">j</button>
				<button class="btn" data-letter="k">k</button>
				<button class="btn" data-letter="l">l</button>
				<button class="btn" data-letter="m">m</button>
				<button class="btn" data-letter="n">n</button>
				<button class="btn" data-letter="o">o</button>
				<button class="btn" data-letter="p">p</button>
				<button class="btn" data-letter="q">q</button>
				<button class="btn" data-letter="r">r</button>
				<button class="btn" data-letter="s">s</button>
				<button class="btn" data-letter="t">t</button>
				<button class="btn" data-letter="u">u</button>
				<button class="btn" data-letter="v">v</button>
				<button class="btn" data-letter="w">w</button>
				<button class="btn" data-letter="x">x</button>
				<button class="btn" data-letter="y">y</button>
				<button class="btn" data-letter="z">z</button>
				</div>
			</div>
    `;
	app.append(ctn);

	const AllButtons = ctn.querySelectorAll('.btn');
	AllButtons.forEach(btn =>
		btn.addEventListener('click', () => {
			initGame(btn, btn.dataset.letter);
		})
	);
}
