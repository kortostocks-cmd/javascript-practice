
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

