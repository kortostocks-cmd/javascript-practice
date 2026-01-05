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

//







