class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
}

let perro = new Animal("perro", 3, "rojo");
let gato = new Animal("gato", 5, "negro");
let pajaro = new Animal("pajaro", 4, "negro");

// 1. CREAR EL ARRAY (Esto te faltaba)
let listaAnimales = [perro, gato, pajaro];

// 2. CAPTURAR EL ELEMENTO (Sin .textContent al final)
let contenedor = document.getElementById("Objeto");

// 3. LIMPIAR E INSERTAR
if (contenedor) {
    contenedor.innerHTML = ""; // Limpiamos lo que haya
    listaAnimales.forEach(animal => {
        // Usamos += para que se sumen uno tras otro
        contenedor.innerHTML += `<p>${animal.informacion}</p>`;
    });
}