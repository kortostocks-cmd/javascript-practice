
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

document.getElementById("ArraysASO").textContent = 
    `el nombre de mi PC es: ${nombre} 
    el nombre de mi PC es: ${procesador} 
    el nombre de mi PC es: ${ram} 
    el nombre de mi PC es: ${espacio} `;


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