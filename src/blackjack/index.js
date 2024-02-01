// import { shuffle } from 'underscore'; // importo la funcion 'shuffle' del modulo underscore y  para utilizarla la llamamos con el nombre 'shuffle'
import _ from 'underscore'; //importo todas las funciones del modulo underscore y lo renombro como '_' para poder usarlo de esa manera
// import { crearDeck as crearNuevoDeck} from "./usecases/crear-deck.js"; //Importo el modulo crearDeck y lo renombro como crearNuevoDeck

//FORMA TRADICIONAL DE IMPORTAR
// import { crearDeck } from './usecases/crear-deck.js'; //Importo el modulo crearDeck
// // import exportacionPorDefectoNuevoDeck from "./usecases/crear-deck.js"; //Importo el modulo crearDeck de forma default
// import { pedirCarta } from './usecases/pedir-carta.js';
// import { valorCarta } from './usecases/valor-carta.js';

import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHtml } from "./usecases/index.js"; //METODO 'Archivo de Barril'PARA IMPORTAR - REDUCE CODIGO

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

deck = crearDeck( tipos, especiales ); //modulo que crea un deck y lo guarda en la varieble deck para poder ser usada en este archivo






// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHtml( carta );
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck( tipos, especiales );

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});

