//tutorial basico de getelemntbyID y textcontent con suman
let numero = 10;
numero += 5;

document.getElementById("resultado").textContent = numero;


//Concat confuncion de conertir en string
numero1 = "53";
numero2 = 8;
conCat = numero1.concat(numero2.toString());

document.getElementById("concat").textContent = conCat;


//concatenacion basica con ejemplo `${} los otros "" no sirven

//backtics ` se usan tambien para declarar un html a una variable

let saludo = "Hola Pedro";
let pregunta = " ¿cómo estás?";
const frase = `${saludo} ${pregunta}`;


document.getElementById("frase").textContent = frase;

//comillas doble comillas simples
nombre = "abro"
linea = "mi nombre es 'nombre' y soy genial"

document.getElementById("nombre").textContent = nombre

//operadores intermedio 
// operdarores de comparacion
let comparacion1 = 23;
let comparacion2 = 20;
//sale false ya que no son iguales
document.getElementById("Ocomparacion").textContent = (comparacion1 == comparacion2)
//sale true ya que 23 es mayor que 20 resumen no es igual
document.getElementById("Ocomparacion2").textContent = (comparacion1 != comparacion2)

//operadores de comparacion && y ||
let andcomparacion1 = 2
let andcomparacion2 = 4
//sale false si lasdos no son true 
document.getElementById("&&comparacion").textContent = (andcomparacion1 != andcomparacion2) && (andcomparacion1 < andcomparacion2)
document.getElementById("||comparacion").textContent = (andcomparacion1 == andcomparacion2) || (andcomparacion1 < andcomparacion2)

//ejercicio con valor !
{{
num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;
}
op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3)

document.getElementById("pruebacomparacion").textContent = op
}

//camel case primera minuscula la segunda con mayuscula
parseInt()


//Condicoinales  

nombre = 18

if (nombre > 2){
    document.getElementById("nombreif").textContent = "sirve"
} else if (nombre === 18){
    document.getElementById("nombreif").textContent = "error"
} else {
    document.getElementById("nombreelse").textContent = "intenta que sirva"
}

//examen uno en la prueba.html

"use strict";

const definirCompra = (n) => {
    let din = prompt(`Dinero de ${n}`);
    if (din >= 0.6 && din < 1) return (`${n}: helado de agua`);
    if (din >= 1 && din < 1.6) return (`${n}: helado de crema`);
    if (din >= 1.6 && din < 1.7) return (`${n}: helado de heladix`);
    if (din >= 1.7 && din < 1.8) return (`${n}: helado de heladovich`);
    if (din >= 1.8 && din < 2.9) return (`${n}: helado de helardo`);
    if (din >= 2.9 ) return (`${n}: helado de confetis`);
    else return (`${n}; no te alcanza para nada`);
}

console.log(definirCompra("Cofla"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Roberto"));



