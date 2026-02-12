// class Animal {
//     constructor(especie, edad, color) {
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
//     }
// }

// class Perro extends Animal {
//     constructor(especie, edad, color, raza){
//         super(especie, edad, color);
//         this.raza = raza;
    
//     this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años, soy de color ${this.color} y mi raza es ${this.raza}`;
//     }
//     ladrar() {
//         alert("gua guau")
//     }
// }

// class Gato extends Animal {
//     constructor(especie, edad, color, patas){
//         super(especie, edad, color);
//         this._patas = patas; // "_" indica que es interno

//         this.actualizarInformacion();
//     }  

//     set modificarPatas(nuevoNumero) {
//         this._patas = nuevoNumero;
//         this.actualizarInformacion();
//     }

//     get modificarPatas(){
//         return this._patas;
//     }

//     actualizarInformacion() {
//         this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años, soy de color ${this.color} y tengo ${this._patas} patas`;
//     }

//     static mew() {
//         alert("miaw");
//     }
// }



// let perro = new Perro("perro", 3, "rojo", "doberman");
// let gato = new Gato("gato", 5, "negro");
// let pajaro = new Animal("pajaro", 4, "negro");

// let listaAnimales = [perro, gato, pajaro];

// let contenedor = document.getElementById("Objeto");

// contenedor.innerHTML = ""; 

// listaAnimales.forEach(animal => {
//     contenedor.innerHTML += `<p>${animal.informacion}</p>`;
// });


// gato.modificarPatas = 3
// perro.ladrar();
//Gato.mew()//static no va por el objeto sino por la raiz 


//cofla 3 cap 3
//cofla 1 de 3 celulares
// class Celular {
//     constructor(nombre,color,tamaño,peso,rdp,rdc,ram) {
//         this.nombre = nombre;
//         this.color = color;
//         this.peso = peso;
//         this.tamaño = tamaño;
//         this.resolucionDePantalla = rdp;
//         this.resolucionDeCamara = rdc;
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }

//     mobileInfo(){
//         return `
//         <div class="celular">
//             <h3>${this.nombre}</h3>
//             Color: <b>${this.color}</b><br>
//             Peso: <b>${this.peso}</b><br>
//             Tamaño: <b>${this.tamaño}</b><br>
//             Resolución de Cámara: <b>${this.resolucionDeCamara}</b><br>
//             Resolución de Pantalla: <b>${this.resolucionDePantalla}</b><br>
//             Memoria RAM: <b>${this.memoriaRam}</b><br>
//         </div>
//         `;
//     }
// }

// class CelularAltaGama extends Celular {
//     constructor(nombre,color,tamaño,peso,rdp,rdc,ram,rdce){
//         super(nombre,color,tamaño,peso,rdp,rdc,ram);
//         this.resolucionDeCamaraExtra = rdce;
//     }
// }

// const celularescaros = [
//     new CelularAltaGama("iPhone Pro","rojo","grande","130g","6.2","4K","6GB","108MP"),
//     new CelularAltaGama("Samsung Ultra","azul","mediano","135g","6.1","3K","8GB","200MP")
// ];
// contenedor = document.getElementById("cualidades")
// celularescaros.forEach(celular => {
//     contenedor.innerHTML += celular.mobileInfo();
// });


//3 caso de cofla
class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir(){
        if(!this.iniciada && this.instalada){
            this.iniciada = true;
            alert("App encendida");
        }
    }

    cerrar(){
        if(this.iniciada && this.instalada){
            this.iniciada = false;
            alert("App apagándose");
        }
    } 

    instalar(){
        if(!this.instalada){
            this.instalada = true;
            alert("Se ha instalado");
        }
    }

    desinstalar(){
        if(this.instalada){
            this.instalada = false;
            alert("App desinstalada");
        }
    }

    appInfo(){
        return`
        Descargas: <b>${this.descargas}</b><br>
        Puntuación: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `;
    }
}

const apps = [ 
    new App("1000", "4.6 estrellas", "50MB"),
    new App("2000", "3.5 estrellas", "70MB"),
    new App("500", "2.5 estrellas", "30MB"),
    new App("8000", "4.4 estrellas", "90MB"),
    new App("12000", "4.9 estrellas", "110MB")
];

const contenedor = document.getElementById("cualidades");

apps.forEach(app => {
    contenedor.innerHTML += app.appInfo() + "<hr>";
});


// Usar métodos
// miApp.instalar();
// miApp.abrir();
// miApp.cerrar();
// miApp.desinstalar();

