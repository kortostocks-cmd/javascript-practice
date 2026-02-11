class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    
    this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años, soy de color ${this.color} y mi raza es ${this.raza}`;
    }
    ladrar(){
        alert("gua guau")
    }
}

let perro = new Perro("perro", 3, "rojo", "doberman");
let gato = new Animal("gato", 5, "negro");
let pajaro = new Animal("pajaro", 4, "negro");

let listaAnimales = [perro, gato, pajaro];

let contenedor = document.getElementById("Objeto");

contenedor.innerHTML = ""; 

listaAnimales.forEach(animal => {
    contenedor.innerHTML += `<p>${animal.informacion}</p>`;
});

perro.ladrar();
gato.ladrar();//sale que no es funcion ya es una herencia a perro y no a gato