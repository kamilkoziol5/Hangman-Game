(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(a){if(a.ep)return;a.ep=!0;const t=r(a);fetch(a.href,t)}})();const d=[{word:"gitara",hint:"Instrument muzyczny z naciagnietymi strunami."},{word:"tlen",hint:"Bezbarwny, bezwonny gaz niezbedny do zycia."},{word:"gora",hint:"Duze naturalne wzniesienie powierzchni Ziemi."},{word:"malarstwo",hint:"Sztuka tworzenia obrazow za pomoca farb."},{word:"astronomia",hint:"Nauka badajaca ciala niebieskie i zjawiska we Wszechswiecie."},{word:"czekolada",hint:"Slodki przysmak wyrabiany z ziaren kakao."},{word:"motyl",hint:"Owad o smuklym ciele i barwnych skrzydlach."},{word:"historia",hint:"Nauka badajaca dzieje i wydarzenia z przeszlosci."},{word:"pizza",hint:"Potrawa z ciasta z dodatkiem sosu, sera i innych skladnikow."},{word:"jazz",hint:"Styl muzyczny oparty na improwizacji i rytmie."},{word:"aparat",hint:"Urzadzenie do robienia zdjec lub nagrywania filmow."},{word:"diament",hint:"Cenny kamien szlachetny znany z twardosci i blasku."},{word:"przygoda",hint:"Ekscytujace lub ryzykowne doswiadczenie."},{word:"nauka",hint:"Systematyczne badanie i poznawanie swiata."},{word:"rower",hint:"Pojazd dwuokolowy napedzany sila ludzkich nog."},{word:"kawa",hint:"Popularny napoj kofeinowy z palonych ziaren kawowca."},{word:"taniec",hint:"Rytmiczne ruchy ciala wykonywane do muzyki."},{word:"galaktyka",hint:"Ogromny uklad gwiazd, pylu i gazu zwiazany grawitacja."},{word:"orkiestra",hint:"Duzy zespol muzykow grajacych na roznych instrumentach."},{word:"wulkan",hint:"Gora z kraterem, z ktorego wydobywa sie lawa i gazy."},{word:"powiesc",hint:"Dluzszy utwor literacki z rozbudowana fabula i postaciami."},{word:"rzezba",hint:"Trojwymiarowe dzielo sztuki wykonane z roznych materialow."},{word:"symfonia",hint:"Rozbudowany utwor muzyczny na orkestre."},{word:"architektura",hint:"Sztuka i nauka projektowania oraz budowania obiektow."},{word:"balet",hint:"Klasyczna forma tanca pelna precyzji i gracji."},{word:"astronauta",hint:"Osoba wyszkolona do podrozy i pracy w kosmosie."},{word:"wodospad",hint:"Strumien wody spadajacy z duzej wysokosci."},{word:"technologia",hint:"Zastosowanie wiedzy naukowej w praktyce."},{word:"tecz",hint:"Zjawisko optyczne powstale w wyniku zalamania swiatla w kroplach wody."},{word:"wszechswiat",hint:"Calosc istniejacej materii, przestrzeni i czasu."},{word:"fortepian",hint:"Instrument muzyczny z klawiszami i strunami uderzanymi mloteczkami."},{word:"wakacje",hint:"Czas przeznaczony na odpoczynek i relaks."},{word:"teatr",hint:"Miejsce wystawiania sztuk i widowisk."},{word:"telefon",hint:"Urzadzenie sluzace do komunikacji na odleglosc."},{word:"jezyk",hint:"System komunikacji za pomoca slow, gestow i gramatyki."},{word:"pustynia",hint:"Suchy obszar o niewielkich opadach i skapej roslinnosci."},{word:"slonecznik",hint:"Wysoka roslina o duzym, zoltym kwiatostanie."},{word:"fantasy",hint:"Gatunek literacki i filmowy pelen magii i zjawisk nadprzyrodzonych."},{word:"teleskop",hint:"Przyrzad optyczny do obserwacji odleglych obiektow."},{word:"bryza",hint:"Lagodny, delikatny wiatr."},{word:"oaza",hint:"Zyzny obszar z woda na pustyni."},{word:"fotografia",hint:"Sztuka i technika utrwalania obrazow swiatlem."},{word:"safari",hint:"Podroz w celu obserwacji dzikich zwierzat w naturalnym srodowisku."},{word:"planeta",hint:"Cialo niebieskie krazace wokol gwiazdy."},{word:"rzeka",hint:"Duzy naturalny ciek wodny plynacy do morza, jeziora lub innej rzeki."},{word:"tropikalny",hint:"Zwiazany z obszarem miedzy zwrotnikami."},{word:"tajemniczy",hint:"Trudny do zrozumienia, zagadkowy."},{word:"zagadkowy",hint:"Budzący zdumienie, trudny do wyjasnienia."},{word:"paradoks",hint:"Sprzeczne lub nielogiczne stwierdzenie."},{word:"lamiglowka",hint:"Gra lub zadanie wymagajace pomyslowosci."},{word:"szept",hint:"Mowienie bardzo cicho, polglosem."},{word:"cien",hint:"Obszar zaciemniony powstajacy przez zasloniecie swiatla."},{word:"sekret",hint:"Cos ukrytego, nieznanego dla innych."},{word:"komputer",hint:"Urzadzenie elektroniczne do przetwarzania informacji."},{word:"internet",hint:"Globalna siec laczaca miliony komputerow."},{word:"programista",hint:"Osoba tworzaca oprogramowanie komputerowe."},{word:"klawiatura",hint:"Urzadzenie do wprowadzania tekstu."},{word:"mysz",hint:"Urzadzenie wskazujace uzywane z komputerem."},{word:"robot",hint:"Maszyna wykonujaca zadania automatycznie."},{word:"samolot",hint:"Pojazd latajacy ciezszy od powietrza."},{word:"statek",hint:"Duzy pojazd plywajacy po wodzie."},{word:"most",hint:"Budowla laczaca dwa brzegi."},{word:"miasto",hint:"Duze skupisko ludzi i budynkow."},{word:"dom",hint:"Miejsce zamieszkania ludzi."},{word:"biblioteka",hint:"Miejsce przechowywania i wypozyczania ksiazek."},{word:"szkola",hint:"Instytucja do nauki dzieci i mlodziezy."},{word:"muzeum",hint:"Miejsce gromadzenia i prezentowania eksponatow."},{word:"kometa",hint:"Cialo niebieskie zlozone z lodu i pylu."},{word:"gwiazda",hint:"Obiekt swiecacy w kosmosie, np. Slonce."},{word:"rakieta",hint:"Pojazd do lotow kosmicznych."},{word:"deszcz",hint:"Opad atmosferyczny w postaci kropel wody."},{word:"wiatr",hint:"Ruch powietrza w atmosferze."},{word:"ogien",hint:"Proces spalania wydzielajacy cieplo i swiatlo."},{word:"ciekawosc",hint:"Silna chec dowiedzenia sie czegos nowego."},{word:"mgla",hint:"Zawiesina kropli wody ograniczajaca widocznosc."},{word:"harmonia",hint:"Stan rownowagi i spokoju."},{word:"przyjazn",hint:"Silna wiez oparta na zaufaniu i sympatii."},{word:"odwaga",hint:"Zdolnosc do stawienia czola trudnosciom i strachowi."},{word:"ksiezyc",hint:"Naturalny satelita Ziemi swiecacy odbitym swiatlem slonecznym."}],o={currentWord:null,wrongGuessCount:0,maxGuess:6,correctLetters:[]};function l(){const n=document.querySelector(".game-modal");o.correctLetters=[],o.wrongGuessCount=0;const e=document.querySelector(".word-display");e&&o.currentWord&&(e.innerHTML=o.currentWord.split("").map(()=>'<li class="letter"></li>').join("")),document.querySelectorAll(".keyboard .btn").forEach(t=>t.disabled=!1);const i=document.querySelector(".guesses-text b");i&&(i.textContent=`0 / ${o.maxGuess}`);const a=document.querySelector(".hangman-box img");a&&(a.src="hangman-0.svg"),n&&n.remove()}function u(){const{word:n,hint:e}=d[Math.floor(Math.random()*d.length)];o.currentWord=n;const r=document.querySelector(".hint-text b");r.innerText=e,l()}function c(n,e){const r=n?"Odgadłeś słowo:":"Właściwa odpowiedź to:",i=n?"Gratulację!":"Przegrałeś!",a=n?"victory.gif":"lost.gif",t=document.createElement("div");t.classList.add("game-modal"),t.style.opacity="0",t.style.transform="scale(0)",t.style.transition="all 0.5s ease",t.innerHTML=`
    <div class="content">
				<img src="${a}" alt="" />
				<h4>${i}</h4>
				<p>${r} <b>${e}</b></p>
				<button class="play-again">Zagraj Ponownie</button>
			</div>
    `,document.body.append(t),requestAnimationFrame(()=>{t.style.opacity="1",t.style.transform="scale(1)"}),t.querySelector(".play-again").addEventListener("click",()=>{l(),u()})}function w(n,e){const r=document.querySelector(".word-display"),i=document.querySelector(".guesses-text b"),a=document.querySelector(".hangman-box img");if(o.currentWord.includes(e)?[...o.currentWord].forEach((t,s)=>{t===e&&(o.correctLetters.push(t),r.querySelectorAll("li")[s].innerText=t,r.querySelectorAll("li")[s].classList.add("guesseed"))}):(o.wrongGuessCount++,a.src=`/hangman-${o.wrongGuessCount}.svg`),n.disabled=!0,i.textContent=`${o.wrongGuessCount} / ${o.maxGuess}`,o.wrongGuessCount===o.maxGuess)return c(!1,o.currentWord);if(o.correctLetters.length===o.currentWord.length)return c(!0,o.currentWord)}function z(){const n=document.querySelector("#app"),e=document.createElement("div");e.classList.add("container"),e.innerHTML=`
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
    `,n.append(e),e.querySelectorAll(".btn").forEach(i=>i.addEventListener("click",()=>{w(i,i.dataset.letter)}))}z();u();
