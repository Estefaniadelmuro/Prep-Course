// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
<<<<<<< HEAD
const nuevaString = 'Estefi';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 16;

// Crea una variable booleana:
const nuevoBool = 16>9;
=======
const nuevaString = "Estefi";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1401;

// Crea una variable booleana:
const nuevoBool = 16<20;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
<<<<<<< HEAD
=======
  
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x + y;
=======
  var resultado = x+y;
  return resultado;
  
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x - y;
=======
  var resultado = x-y;
  return resultado;
  
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x*y;
=======
  var multiplicado = x*y;
  return multiplicado;
  
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  return x/y;
=======
  var producto = x/y;
  return producto;
  
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (x === y){
    return true;
  } else {
    return false;
  }
=======
  if (x===y){
    console.log ('true');
  } else {
    console.log ('false');
  }
  
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  const igual = (str1.length === str2.length)
  return igual;
=======
  if ((str1.length)===(str2.length)){
    console.log ('true');
  } else {
    console.log ('false');
  }
  
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num<90){
<<<<<<< HEAD
    return true;
  } else {
    return false;
=======
    console.log ('true');
  } else {
    console.log ('false');
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num>50){
<<<<<<< HEAD
    return true;
  } else{
    return false;
=======
    console.log('true');
  } else {
    console.log('false');
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
<<<<<<< HEAD
  const resto = x%y;
=======
  var resto = x%y;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  return resto;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if(num%2 === 0){
    return true;
  } else {
    return false;
=======
  if (num%2===0){
    console.log ('true');
  } else{
    console.log ('false');
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if(num%2 === 1){
    return true; 
  } else {
    return false;
=======
  if (num%2!==0){
    console.log ('true');
  } else {
    console.log ('false');
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
<<<<<<< HEAD
  return Math.pow (num,2)
=======
  var resultado = Math.pow (num,2);
  return resultado;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
<<<<<<< HEAD
  return Math.pow (num,3)
=======
  var resultado = Math.pow(num,3);
  return resultado;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
<<<<<<< HEAD
  return Math.pow (num, exponent)   
=======
  var resultado = Math.pow (num,exponent);
  return resultado;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
<<<<<<< HEAD
  const mayor = Math.round(num);
  return mayor;
=======
  var redondeo = Math.round(num);
  return redondeo;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
<<<<<<< HEAD
  const mayor = Math.ceil (num);
  return mayor;
=======
  var redondeo = Math.ceil(num);
  return redondeo;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
<<<<<<< HEAD
  return Math.random();
=======
  var numero = Math.random();
  return numero;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero>0){
<<<<<<< HEAD
    return 'Es positivo';
  } else if (numero === 0){
    return false;
  } else {
    return 'Es negativo';
=======
    console.log ('Es positivo');
  } else if (numero<0){
    console.log('Es negativo');
  } else {
    console.log('false');
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
  }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
<<<<<<< HEAD
  const nuevaString = str + '!';
  return nuevaString;
=======
  var signo = (str + '!');
  return signo;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
<<<<<<< HEAD
  const id = nombre + ' ' + apellido;
  return id;
=======
  var combinacion = (nombre + ' ' + apellido);
  return combinacion;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
<<<<<<< HEAD
  return 'Hola ' + nombre + '!'; 
=======
  console.log('Hola '+ nombre + '!');
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
<<<<<<< HEAD
  return alto*ancho;
=======
  var area = alto*ancho;
  return area;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
<<<<<<< HEAD
  return lado*4;
=======
  var perimetro = lado*4;
  return perimetro;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
<<<<<<< HEAD
  return (base*altura)/2;
=======
var area = (base*altura)/2;
return area;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
<<<<<<< HEAD
  return euro*1.20
=======
  var cambioDolar = euro*1.20;
  return cambioDolar;
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
<<<<<<< HEAD
  if (letra.length === 1){
    if (letra === 'a' | letra === 'e' | letra === 'i' | letra === 'o' | letra === 'u'){
      return "Es vocal";
    } else {
       return "Dato incorrecto";
    }
  } else{
     return 'Dato incorrecto'
  }
=======
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    console.log ('Es vocal');
  } else if (letra.length !== 1) {
    console.log('Dato incorrecto');
    } else {
      console.log('Dato incorrecto');
    }
>>>>>>> 2c65c1376cedf0131aaa93c5667f233759a6a22a
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
