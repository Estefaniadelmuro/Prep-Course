// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x<y){
<<<<<<< HEAD
    return y;
  } else if (x>y){
    return x;
  } else{
    return x|y;
=======
    var mayor = y,
    console.log (mayor)
  } else if (x>y){
    var mayor = x,
    console.log (mayor)
  } else {
    return x || y;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if (edad>=18){
<<<<<<< HEAD
    return "Allowed";
  } else {
    return "Not allowed";
=======
    console.log ('Allowed')
  } else {
    console.log ('Not allowed')
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status === 1){
<<<<<<< HEAD
    return 'Online';
  } else if (status === 2){
    return 'Away';
  } else{
    return 'Offline'
=======
    console.log ('El usuario se encuentra "Online"'),
  } else if (status === 2){
    console.log ('El usuario se encuentra "Away"'),
  } else {
    console.log ('El usuario se encuentra "Off line"')
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
<<<<<<< HEAD
  switch (idioma){
    case "aleman":
      return 'Guten Tag!';
      break
    case "mandarin":
      return 'Ni Hao!';
      break
    case "ingles":
      return 'Hello!';
      break
    default:
      return 'Hola!'
=======
  if (idioma === 'aleman'){
    console.log ('Guten Tag!'),
  } else if (idioma === 'mandarin'){
    console.log ('Ni Hao!'),
  } else if ( idioma === 'ingles'){
    console.log ('Hello!'),
  } else {
    console.log ('Hola!') 
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch (color){
<<<<<<< HEAD
    case "blue":
      return 'This is blue';
      break
    case "red":
      return 'This is red';
      break
    case "green":
      return 'This is green';
      break
    case "orange":
      return 'This is orange';
      break
    default:
      return 'Color not found'
  }
=======
    case blue:
      console.log('This is blue'),
      break;
    case red: 
      console.log('This is red'),
      break;
    case green: 
      console.log('This is green'),
      break;
    case orange: 
      console.log('This is orange'),
    default: 
      console.log ('Color not found')
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (numero === 10 | numero === 5){
    return true;
  } else {
    return false;
=======
  if (numero === 10 || numero === 5){
    console.log ('true'),
  } else {
    console.log('false')
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero<50 && numero>20){
<<<<<<< HEAD
    return true;
  } else {
    return false;
=======
    console.log('true'),
  } else {
    console.log ('false')
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (numero%1 === 0){
<<<<<<< HEAD
    return true;
  } else {
    return false;
=======
    console.log ('true'),
  } else {
    console.log ('false')
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
<<<<<<< HEAD
  if(numero % 15 === 0) return 'fizzbuzz';
  if(numero % 3 === 0) return 'fizz';
  if(numero % 5 === 0) return 'buzz';
  return numero;
=======
  switch (numero){
    case numero%3 === 0:
      console.log ('fizz'),
      break;
    case numero%5 === 0:
      console.log('buzz'),
      break;
    case numero%3 === 0 && numero%5 === 0:
      console.log ('fizzbuzz'),
      break;
    default:
      return numero
  }
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
<<<<<<< HEAD
  if (num1 === 0 || num2 === 0 || num3 === 0){
      return "Error";
  } else if (num1<0 | num2<0 | num3<0){
    return 'Hay negativos';
  } else if (num1>num2 && num1>num3 && num1>0){
      return 'Número 1 es mayor y positivo';
  } else if (num3>num2 && num3>num1){
      num3 = num3 + 1;
      return num3;
  } else {
      return false;
  
=======
  switch(num1,num2,num3){
    case num1>num2 && num1>num3 && num1>0:
      console.log ('Numero 1 es mayor y positivo'),
      break,
    case num1<0 || num2<0 || num3<0:
      console.log ('Hay nagativos'),
      break,
    case num3>num1 && num3>num2:
      num3 ++,
      console.log (num3),
      break,
    case num1 === 0 || num2 === 0 || num3 === 0:
      console.log ('Error'),
      break,
    default:
      return false
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
<<<<<<< HEAD
  if( numero < 2) return false;
  if(numero === 2) return true;
  for(var i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  }
  return true;
=======
  for (var i=2, i<numero, i++){
    if(numero%i === 1){
      console.log('true'),
    } else{
      console.log('false')
    }
  }
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
<<<<<<< HEAD
  if (valor === true){
    return 'Soy verdadero';
  } else {
    return 'Soy falso';
=======
  
  if(valor === true){
    console.log ('Soy verdadero'),
  } else {
    console.log('Soy falso')
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
<<<<<<< HEAD
  //Escribe tu código aquí   
  const array = [];
  for (var i = 0; i<11; i++){
    array[i] = 6*i
  }
  return array;
=======
  //Escribe tu código aquí
  let arrayTablaDel6 = []
  for (let i = 0; i < 11; i++) {
        arrayTablaDel6.push(6 * i)
  }
  return arrayTablaDel6
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
<<<<<<< HEAD
  if (numero>99 && numero<1000){
    return true;
  } else{
    return false;
=======
  if(numero>99 && numero<1000){
    return true,
  } else {
    return false
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
<<<<<<< HEAD
  var a = numero;
  var i = 0;
  do {
    i = i + 1;
    a = a + 5;
  } while (i<8);
  return a;
=======
  var a = numero,
  var i = 0,
do{
  a = a + 5,
  i++,
} while (i<8)
return a
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
