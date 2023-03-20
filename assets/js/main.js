/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

// Creo una variabile dove salvo il container delle 100 celle (container-grid)

let numbCasel = 0;
function getRandomNumber(min, max) {
    const randNumb = Math.floor(Math.random() * (max - min + 1)) + min

    return randNumb;
}

function generateBombs(totalBombs, nMax) {
    const bombs = [];
    while (bombs.length < totalBombs) {
        const randomNumber = getRandomNumber(1, nMax);
        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber);
        }
    }
    return bombs;
}

function gameOver(bombs, i, punteggio, thisCell, totalBombs, nMax, numbCasel) {

    const messageElement = document.createElement('h3');
    messageElement.className = 'message';

    const includesBombs = bombs.includes(i)

    if (includesBombs) {
        console.log('Hai perso', punteggio);
        thisCell.classList.add('bomb')
    } else if (numbCasel == nMax - totalBombs) {
        console.log('Hai vinto');
        container.innerHTML('Hai vinto')
    }

}


const container = document.querySelector(".container");
const playButton = document.querySelector('.play')
playButton.addEventListener('click', function () {
    container.innerHTML = ""

    // Preparazione di Bombe e tentativi
    /*   let attempts = 0; */

    const diffucultyEl = document.querySelector('.diffuculty')
    console.log(diffucultyEl);
    let nMax = diffucultyEl.value;

    const totalBombs = 16;
    const bombs = generateBombs(totalBombs, nMax)
    // creo un ciclo che sta per 100)
    for (let i = 1; i <= nMax; i++) {
        const cell = `<div class="cell" style="width: calc(100% / ${Math.sqrt(nMax)}"><p class="m-0">${i}</p></div>`;

        container.innerHTML += cell;
        const maxAttempts = nMax - totalBombs;
    }

    console.log(generateBombs(totalBombs, nMax));

    // seleziono una cella che ha classe cell e active

    const cellEl = document.querySelectorAll(".cell")

    // aggiungo eventlisner per la classe active ciclando per la lunghezza dell'array cellEl


    for (let i = 0; i < cellEl.length; i++) {
        const thisCell = cellEl[i];
        console.log(thisCell)
        thisCell.addEventListener("click", function () {
            thisCell.classList.add("bg_blue")
            // this.classList.add("active")
            console.log("Changed the color")

            const messageElement = document.createElement('h3');
            messageElement.className = 'message';

            const includesBombs = bombs.includes(i)
            numbCasel = numbCasel+1;
            punteggio = numbCasel
            console.log("il numero delle caselle e", numbCasel)
            if (includesBombs) {
                alert(`Hai perso, ${punteggio}`);
                thisCell.classList.add('bomb');
                location.reload()
            } else if (numbCasel == nMax - totalBombs) {
                console.log('Hai vinto');
                container.innerHTML('Hai vinto')
            }
        })
    }
    
})
// creo un max numero di celle



