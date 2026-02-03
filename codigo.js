
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

document.getElementById("ArraysASO").textContent = `el nombre de mi PC es: ${nombre} <br> 
    el nombre de mi PC es: ${procesador} <br> 
    el nombre de mi PC es: ${ram} <br> 
    el nombre de mi PC es: ${espacio} <br>`