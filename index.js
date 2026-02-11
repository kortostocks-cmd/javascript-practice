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
    ladrar() {
        alert("gua guau")
    }
}

class Gato extends Animal {
    constructor(especie, edad, color, patas){
        super(especie, edad, color);
        this._patas = patas; // "_" indica que es interno

        this.actualizarInformacion();
    }  

    set modificarPatas(nuevoNumero) {
        this._patas = nuevoNumero;
        this.actualizarInformacion();
    }

    get modificarPatas(){
        return this._patas;
    }

    actualizarInformacion() {
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años, soy de color ${this.color} y tengo ${this._patas} patas`;
    }

    static mew() {
        alert("miaw");
    }
}



let perro = new Perro("perro", 3, "rojo", "doberman");
let gato = new Gato("gato", 5, "negro");
let pajaro = new Animal("pajaro", 4, "negro");

let listaAnimales = [perro, gato, pajaro];

let contenedor = document.getElementById("Objeto");

contenedor.innerHTML = ""; 

listaAnimales.forEach(animal => {
    contenedor.innerHTML += `<p>${animal.informacion}</p>`;
});


gato.modificarPatas = 3
perro.ladrar();
Gato.mew()//static no va por el objeto sino por la raiz 



