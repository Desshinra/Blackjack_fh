/*
* 2C = two of clubs
* 2D = two of diamonds
* 2H = two of hearts
* 2S = two of swords

*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');

const divCartasJugador = document.querySelector('#jugador-cartas')
const puntosHTML = document.querySelectorAll('small');

//Esta función crea una nueva baraja
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo)
        }
    }

    deck = _.shuffle(deck)
    console.log(deck);
    return deck;

    
};
crearDeck();

//Esta función me permite tomar una carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }

    const carta = deck.pop();
    // const carta = deck[0];
    // deck.splice(0, 1);

    return `${carta}`;
}

const valorCarta = ( carta ) => {
    
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
    
}

//Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);

    console.log(puntosJugador);
    puntosHTML[0].innerHTML = `${puntosJugador}`

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta')

    divCartasJugador.append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('Perdiste');
        btnPedir.disabled = true
    } else if (puntosJugador === 21) {
        console.log('21, ¡¡¡increiblee!!!');
        btnPedir.disabled = true
    }
});
