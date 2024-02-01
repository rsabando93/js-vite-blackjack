
/**
 * 
 * @param {Array<String>} deck arreglo de cartas(string)
 * @returns {String} retorna una carta
 */

// Esta función me permite tomar una carta
export const pedirCarta = ( deck ) => {

    // let deck = [];
    // console.log(deck);
    // if ( !deck || deck.length === 0) throw new Error ( 'deck es obligatorio como un arreglo de string' ); //valido que no sea undefined - null


    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}