/*
* 2C = two of clubs
* 2D = two of diamonds
* 2H = two of hearts
* 2S = two of swords

*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

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
    
    // for (let i = 2; i <= 10; i++) {
    //     deck.push(i + 'C');
    // };
    // for (let i = 2; i <= 10; i++) {
    //     deck.push(i + 'D');
    // };
    // for (let i = 2; i <= 10; i++) {
    //     deck.push(i + 'H');
    // };
    // for (let i = 2; i <= 10; i++) {
    //     deck.push(i + 'S');
    // };

    // console.log(deck);
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

    const card = deck.pop();
    // const card = deck[0];
    // deck.splice(0, 1);


    console.log(deck)
    console.log(card)

    return `${card}`;
}

pedirCarta();

const valorCarta = ( carta ) => {
    
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;



    // let puntos = 0;
    // console.log({ valor });
    
    // if ( isNaN(valor)) {
        
    //     puntos = (valor === 'A') ? 11 : 10;

    // } else {
    //     puntos = valor * 1;
    // }

    // console.log(puntos )

}

valorCarta('JD');