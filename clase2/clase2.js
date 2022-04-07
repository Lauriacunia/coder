/**Tip: antes de codear cualquier cosa, 
 * consoleo algo simple para ver que funciona el link html-> script
 */

console.log('Hola desde mi archivo JS');

function mostrarLista () {
    console.log('Mostrar Lista')
  }
  
  mostrarLista();
  
  (function () {
    console.log('soy una función IIFE')
  })()