import _ from 'underscore';

/**FORMA DE DOCUMENTAR TU CODIGO CON LA SYNTAXIS DE JSDOC
 * Este codigo permite mostrar que tipo de datos esta usando crearDeck cuando es llamada - pasar el cursor sobre crearDeck en el index.js para visualizarlo
 * @param {Array<String>} tiposDeCartas ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCartas, tiposEspeciales) => { //export permite exportar la funcion para poder usarla en otro archivo

    if ( !tiposDeCartas || tiposDeCartas.length === 0) throw new Error ( 'tiposDeCartas es obligatorio como un arreglo de string' ); //valido que no sea undefined - null
    // if ( tiposDeCartas.length > 0) throw new Error ( 'tiposDeCartas tiene que ser un arreglo de String' ); //valido que tiposDeCartas sea un arreglo
    if ( !tiposEspeciales || tiposEspeciales.length === 0) throw new Error ( 'tiposEspeciales es obligatorio como un arreglo de string' ); //valido que no sea undefined - null


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // deck = shuffle.shuffle( deck );
    // console.log( deck );
    return deck;
}

// export default crearDeck; //otra forma de exportar una funcion