// No cambies los nombres de las funciones.

const { addLeadingDotSlashArray } = require("@11ty/eleventy/src/TemplatePath");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
<<<<<<< HEAD
  return array [0]
=======
  return array [0];
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
<<<<<<< HEAD
  return array[array.length -1]
=======
  return array [array.length -1];
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
<<<<<<< HEAD
  return array.length
=======
  return array.length;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
<<<<<<< HEAD
  for(var i = 0; i<array.length; i++){
    array[i] = array [i] + 1;
  }
  return array
=======
  var array [1,2,3,4,5];
  for (var i = 0; i<array.length; i++){
    console.log(array[i] + 1)
  }
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
<<<<<<< HEAD
  array.push(elemento);
=======
  array.push (elemento);
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
<<<<<<< HEAD
  array.unshift(elemento);
=======
  array.unshift (elemento);
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
<<<<<<< HEAD
   return palabras.join (' ');
=======
  return palabras.join(' ');
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
<<<<<<< HEAD
  for (var i = 0; i< array.length; i++){
    if (array[i] === elemento){
      return true;
    } 
    }return false;
  }
=======
  if (array.indexOf (elemento) !== -1){
    console.log ('false'),
  } else {
    console.log ('true')
  }
}
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
<<<<<<< HEAD
  for (var i= 0; i<numeros.length; i++){
    suma = suma + numeros[i];
  } return suma;
=======
  for (var i = 0; i<numeros.length; i++){
    suma = suma + numeros[i];
  }
  return suma
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
<<<<<<< HEAD
  for (var i = 0; i<resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
  }
  return suma/resultadosTest.length
=======
  var promedio = 0;
  for (var i = 0; i<resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
    promedio = suma / resultadosTest.length
  }
  return promedio
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = numeros[0];
  for (var i = 1; i<numeros.length; i++){
<<<<<<< HEAD
    if (numeros[i]>mayor){
      mayor = numeros[i]
    }
=======
    while (numeros.length !== undefined){
      numeros[i] = mayor;
    }
    if (numeros[i]> mayor){
      mayor = numeros[i];
    } 
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
  return mayor
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
<<<<<<< HEAD
  if(arguments.length < 1) return 0;
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;
=======
  var multiplicado = 1
  if (arguments.length >= 1){
  for (var i = 0; i<arguments.length ; i++){
    multiplicado = multiplicado*arguments[i],
    console.log (multiplicado)
  }} else {
    return 0
  }
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
<<<<<<< HEAD
  var contador = 0;
  for (var i = 0; i<arreglo.length; i++){
    if(arreglo[i]>18){
      contador++;
      
  }
} return contador
=======
  
  if (arreglo.length>18){
    return arreglo.length
  }
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
<<<<<<< HEAD
  if(numeroDeDia === 2| numeroDeDia === 3|numeroDeDia === 4|numeroDeDia === 5|numeroDeDia === 6){
      return 'Es dia Laboral'}
    else{
      return 'Es fin de semana'
    }
=======
  
  var domingo = 1, lunes = 2, martes = 3, miercoles = 4, jueves = 5, viernes = 6, sabado = 7
  if (numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 || numeroDeDia === 5 || numeroDeDia === 6){
    console.log ('Es dia laboral')
  } else if (numeroDeDia === 1|| numeroDeDia === 7){
    console.log('Es fin de semana')
  } else {
    return undefined
  }
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
<<<<<<< HEAD
  var num = n.toString()
  if(num.charAt(0)=== '9'){
    return true;
  } else{
    return false;
=======
  
  var num = n.toString()
  if (n.charAt(0) === 9){
    console.log (true),
  } else {
    return false
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
<<<<<<< HEAD
  var igual = arreglo[0];
  for (var i= 1; i<arreglo.length; i++){
    if(arreglo[i]=== igual){
      return true
    } else{
      return false
    }
  }
} 

=======
  
  primero = arreglo[0]
  for (var i = 1; i<arreglo.length; i++){
    if (arreglo[i] === primero)
    return true
  } else {
    return false
  } 
}
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
<<<<<<< HEAD
  const nuevoArray = [];
  for (var i = 0; i<array.length; i++){
    if(array[i] === 'Enero'|| array[i] === 'Marzo'|| array[i] === 'Noviembre'){
      nuevoArray.push (array[i]);
    }
  }
  if (nuevoArray.length<3){
    return 'No se encontraron los meses pedidos'
  } else{
    return nuevoArray;
=======
  var nuevoArray [];
  for (var i = 0; i<array.length; i++){
    if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
      nuevoArray.push (array[i]) 
      return nuevoArray
    }
  } else if (nuevoArray.length<3){
    console.log ('No se encontraron los meses pedidos')
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
<<<<<<< HEAD
  const nuevoArray = [];
  for(var i = 0; i<array.length; i++){
    if(array[i]>100){
      nuevoArray.push (array[i]);
    }
  } return nuevoArray;
=======
  var nuevoArray[];
  for (var i = 0; i<array.length; i++){
    if (array[i]>100){
        nuevoArray.push (array[i])
        return nuevoArray
    }
  }
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
<<<<<<< HEAD
  const array = [];
  var a = numero;
  for(var i = 0; i<10; i++){
    a = a + 2;
    if(a === i){
      break
    } else{
    array.push(a);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
}
=======
  var array [];
  var suma = numero
  for (var i = 0; i<10; i++){
    suma = suma + 2
    if (suma === i){
      console.log('Se interrumpio la ejecución'),
      break
    } else {
    array.push(suma)
    return array
  }
    
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
<<<<<<< HEAD
  const array= [];
  var suma = numero;
  for (var i = 1; i<11; i++){
    if (i === 5){
      continue;
    }
    suma = suma + 2;
    array.push(suma);
  }
  return array

=======
  var array [];
  var suma = numero
  for (var i = 0; i<10; i++){
    if (i !== 5){
      suma = suma + 2
      array.push (suma)
    } else {
      continue
    }
    return array
}
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
