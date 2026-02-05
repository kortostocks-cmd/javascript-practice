
//Arrays nivel 2
frutas = ["banana","manzana","mango"];
document.getElementById("Arrays").textContent =`mis frutas: ${frutas[2]}`;

//Arrays asociativos
let pc1 = {
    nombre: "KortoPC",
    procesador: "Intel Core 17",
    ram: "16GB",
    espacio: "1TB"
};

let pc2 = ["DaltoPC","Intel Core 17","16GB", "1/2TB"];


let nombre = pc1["nombre"]
let procesador = pc1["procesador"]
let ram = pc1["ram"]
let espacio = pc1["espacio"]

contenedorArray = document.getElementById("ArraysASO")
    contenedorArray.innerHTML +=`el nombre de mi PC es: ${nombre}<br>
    mi procesador es: ${procesador} <br>
    el nombre de mi RAm es: ${ram} <br>
    tengo de espacio : ${espacio} para usar`;


    let numero = 0;
    if (numero < 10 ){
        numero++;
        numero++;
        numero++;//aumenta uno
        document.getElementById("Bucles").textContent = numero;
    } while (numero < 10 ){
        numero++;//lo suma hasta que ya no sea mas grande que diez porqu seria false
        document.getElementById("While").textContent = numero
    }

let numero1 = 0;

while (numero1 < 1000) {
    numero1++;
    document.getElementById("while2").textContent = numero1;

    if (numero1 === 100) {
        break;
    }
}

//FOR
//for es un while pero es un bucle determinado, se ejecutat las veces que indiquemos no como while que lo ejecuta siempre que es true
//sirve porque es una variable solo para ese bloque:)


const contenedor = document.getElementById("for")

for (let i = 0; i <= 6; i++) {
    if (i == 5){
        break;
    }
    contenedor.innerHTML += i + "<br>";
}
//espacio entre los dos
contenedor.innerHTML += "<br>"

for (let i = 6; i >= 0; i--){
    if (i == 5){
        continue;//lo salta en ves de bloquiar el bucle
    }
    contenedor.innerHTML +=  i + "<br>"
}

const contenedor2 = document.getElementById("forin")
let animales = ["gato", "perro", "rex"]

for (animal in animales){//igual ala posicion osea numero 0 1 2
    contenedor2.innerHTML += (animales[animal] + "<br>")
} 

//espacio
contenedor2.innerHTML += "<br>";

for (animal in animales){//igual ala posicion osea numero 0 1 2
    contenedor2.innerHTML += animal + " " + animales[animal] + "<br>"
} 

contenedor2.innerHTML += "<br>";


for (animal of animales){//mostrar el elmento de animales
    contenedor2.innerHTML += animal + "<br>";
}

//LABLE: una setencia de asociar un bucle a un nombre "bucle" = korto que es una Array
array1 = ["maria1", "josefa1","robert1"];
array2 = ["aka2", "marcelo2", array1, "josefina2"];

const contenedor3 = document.getElementById("label")

forRancio://label
for (let array in array2){
    if (array == 2){
        for (let array of array1){
            //contiue forRancio salta el array1
            contenedor3.innerHTML += array + "<br>";
            break forRancio;//con break solo se puede ver josefina y no el array que esta en e lbloque este y no el otro
        }
    } else {
        contenedor3.innerHTML += (array2[array] + "<br>")
    }
}

//14) Funciones llamar codigo con un Array osea crea una funtion y lo asocias
//parametros

// 1. No sobrescribas la palabra reservada 'document'
// 2. Selecciona el elemento, no su contenido inicial
const contenedor4 = document.getElementById("param");

function calcular(num1, num2) {//Aqui comienza
    let suma = num1 + num2;
    let resta = num1 - num2;

    contenedor4.innerHTML += `
        <p>
            <b>Números: ${num1} y ${num2}</b><br>
            Suma: ${suma}<br>
            Resta: ${resta}
        </p>
        <hr>
    `;
}

calcular(12, 32);
calcular(40, 23);


// 1. Creamos el objeto 'prohom'
const prohom = {
    saludar: (nombre, IQ)=> {
        let frase = `!hola <b>${nombre}</b> eres un paquete<br>
                    no te olvides de tu IQ <b>${IQ}</b><br>
                    <hr>`;
        
        // Usamos innerHTML para que las etiquetas <br> y <hr> funcionen
        document.getElementById("funcion2").innerHTML = frase;
    }
};


prohom.saludar("pedro", 200);







//Cofla 2 
//problema 1 de 3
//let free = false;

// const validarCliente = (time) => {

// const edad = Number(prompt("¿Cuál es tu edad?"));

// if (isNaN(edad)) {
//     alert("Edad inválida");
//     return;
// }

// if (edad < 18) {
//     alert("No cumples la edad mínima");
//     return;
// }

// if (time >= 2 && time < 7 && !free) {
//     alert("Entras gratis por promoción nocturna");
//     free = true;
//     return;
// }

// alert(`Debes pagar — son las ${time}:00`);
// };

// validarCliente(23);
// validarCliente(8);
// validarCliente(24);
// validarCliente(3);
// validarCliente(6);
// validarCliente(7);


//caso 2 de 3
// let cantidad = Number(prompt("¿Cuántos alumnos hay?"));
// let alumnos = [];

// // crear alumnos
// for (let i = 0; i < cantidad; i++) {
// let nombre = prompt("Nombre del alumno " + (i + 1));
// alumnos.push([nombre, 0]);
// }

// // tomar asistencia (30 días)
// for (let dia = 0; dia < 30; dia++) {//30 veces dia a cada alumno

// for (let i = 0; i < alumnos.length; i++) {// <---

//     let presencia = prompt(`${alumnos[i][0]} (p = presente)`);//esto le va a pasar ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//     if (presencia === "p" || presencia === "P") {
//         alumnos[i][1]++;//suma una presencia 
//     }

// }
// }

// // mostrar resultados
// let salida = "";

// for (let i = 0; i < alumnos.length; i++) {

// let nombre = alumnos[i][0];
// let presentes = alumnos[i][1];
// let ausencias = 30 - presentes;

// salida += `
// ${nombre}<br>
// Presentes: ${presentes}<br>
// Ausencias: ${ausencias}<br>
// `;

// if (ausencias > 18) {
//     salida += "<b style='color:red'>Reprobado</b><br>";
// }

// salida += "<br>";
// }

// document.getElementById("cofla2").innerHTML = salida;
