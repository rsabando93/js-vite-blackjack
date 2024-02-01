
/**
 * 
 * @param {String} carta // la carta obtenida de pedir carta
 * @returns {HTMLImageElement} // Imagen de retorno
 */

export const crearCartaHtml =  ( carta ) => {

    if( !carta ) throw new Error ( 'La carta es un argumento obligatorio' );

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
} 