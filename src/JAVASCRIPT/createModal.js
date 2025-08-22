import resetGame from './resetGame';
import getRandomWord from './getRandomWord';

export default function createModal(isVictory, title) {
	const modalText = isVictory ? `Odgadłeś słowo:` : `Właściwa odpowiedź to:`;
	const h4Info = isVictory ? `Gratulację!` : `Przegrałeś!`;
	const imgSrc = isVictory ? `victory.gif` : `lost.gif`;
	const popup = document.createElement('div');
	popup.classList.add('game-modal');

	popup.style.opacity = '0';
	popup.style.transform = 'scale(0)';
	popup.style.transition = 'all 0.5s ease';

	popup.innerHTML = `
    <div class="content">
				<img src="${imgSrc}" alt="" />
				<h4>${h4Info}</h4>
				<p>${modalText} <b>${title}</b></p>
				<button class="play-again">Zagraj Ponownie</button>
			</div>
    `;

	document.body.append(popup);

	requestAnimationFrame(() => {
		popup.style.opacity = '1';
		popup.style.transform = 'scale(1)';
	});

	const btn = popup.querySelector('.play-again');
	btn.addEventListener('click', () => {
		resetGame();
		getRandomWord();
	});
}
