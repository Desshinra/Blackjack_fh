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
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas')
const divCartasComputadora = document.querySelector('#computadora-cartas')
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



const valorCarta = (carta) => {

    
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
    
}

//Turno de la computadora

const turnoComputadora = (puntosMinimos) => {
    do {
        const carta = pedirCarta();
            
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerHTML = `${puntosComputadora}`
    
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta')
        divCartasComputadora.append(imgCarta);
            
        if (puntosMinimos > 21) {
            break;
        };
            
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
    
    if (puntosComputadora === puntosMinimos) {
        alert('Nadie gana');
    } else if (puntosMinimos > 21) {
        alert('Computadora gana')
    } else if (puntosComputadora > 21) {
        alert('Jugador gana');
    } else {
        alert('Computadora gana')
    }
        
    }, 10);
};

//Eventos

btnNuevo.addEventListener('click', () => {
    location.reload();
});

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
        alert('HAs perdido')
        btnPedir.disabled = true
        btnDetener.disabled = true;        
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        alert('21, ¡¡¡increiblee!!!');
        btnPedir.disabled = true
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    }
});

btnDetener.addEventListener('click', () => {
    btnDetener.disabled = true;
    btnPedir.disabled = true;

    turnoComputadora(puntosJugador);
})