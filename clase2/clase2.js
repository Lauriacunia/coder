/**Tip: antes de codear cualquier cosa, 
 * consoleo algo simple para ver que funciona el link html-> script
 */

/**  */
console.log('Hola desde mi archivo JS');

/** 1-Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, 
 * si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”. 
 * Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.
 * 2- Definir una función anónima que haga lo mismo que la del punto 1, 
 * e invocarla inmediatamente, pasando una lista con 3 números como argumento.
 * 3- Definir la función crearMultiplicador  que reciba un número y
 * devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos.
 * Luego, a partir de la función definida, crear dos funciones duplicar y triplicar,
 * y probarlas con diferentes valores. */

  /** 1 */
  function mostrarLista (lista) {
    lista.length > 0 ? console.log(`Esta es la lista: ${lista}`) : console.log('Lista vacía');
    // otra opción sería:
    // if (lista.length > 0) {
    //   console.log(lista);
    // } else {
    //   console.log('lista vacía');
    // }
  }
  
  //mostrarLista(['uno', 'dos', 'tres']);
  //mostrarLista([]);
  
  (function () {
    console.log('soy una función IIFE')
  })()

  /** 2 */
 // Definir una función anónima que haga lo mismo que la del punto 1, 
 //* e invocarla inmediatamente, pasando una lista con 3 números como argumento.
 let lista = [1, 2, 3];
  (function (lista) {
    lista.length > 0 ? console.log(`Esta es la lista: ${lista}`) : console.log('Lista vacía');
  }
  )(lista);

  /*3- Definir la función crearMultiplicador  que reciba un número y
 * devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos.
 * Luego, a partir de la función definida, crear dos funciones duplicar y triplicar,
 * y probarlas con diferentes valores. */

  function crearMultiplicador (numero) {
    return function (numero2) {
      return numero * numero2;
    }
  }

  let duplicar = crearMultiplicador(2);
  let triplicar = crearMultiplicador(3);

  console.log(duplicar(5));
  console.log(triplicar(5));