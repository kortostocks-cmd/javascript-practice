let numeros =["abecedario","manzana","perro","dedo","bobo","pedro"];

numeros.filter((numero)=>{
    document.getElementById("filter").innerHTML += numero + "<br>";
})



//casi lo mismo que forEach

document.getElementById("filter").innerHTML += "<br>";

numeros.forEach((numero)=>{
    document.getElementById("filter").innerHTML += numero + "<br>";
})

//pero filter puede hacer esto
let resultado = numeros.filter((numero)=> numero.length > 5);
document.getElementById("solofilter").textContent = resultado;


//math
document.getElementById("math").innerHTML = "El numero pi es: " + Math.PI +  "El numero e es: " + Math.E + "<br>";
document.getElementById("math").innerHTML += "<br>" + " la raiz cuadrada de 25 es: " + Math.sqrt(25);
document.getElementById("math").innerHTML += "<br>" + " el numero minimo de 6,3,5,1,2,4 es: " + Math.min(6,3,5,1,2,4) + "<br>";
document.getElementById("math").innerHTML += "<br>" + " el numero maximo de 6,3,5,1,2,4 es: " + Math.max(6,3,5,1,2,4) + "<br>";
document.getElementById("math").innerHTML += "<br>" + " el numero aleatorio entre 0 y 1 es: " + Math.random() + "<br>";

//como hacer el numero aleatorio sin decimales entre 1 y 100
document.getElementById("math").innerHTML += "<br>" + " el numero aleatorio entre 1 y 100 es: " + Math.round(Math.random() * 100) + "<br>";
//redondear hacia abajo
document.getElementById("math").innerHTML += "<br>" + " el numero aleatorio entre 1 y 100 redondeado hacia abajo es: " + Math.floor(Math.random() * 101) + "<br>";
//redondear hacia arriba
document.getElementById("math").innerHTML += "<br>" + " el numero aleatorio entre 1 y 100 redondeado hacia arriba es: " + Math.ceil(Math.random() * 100) + "<br>";
//se necesita saber usar los redondeos por la probabilidades de 1 y 99 por ejemplo porque si sale 100 redondea a 99 o si sale 0 redondea a 1 eso hace que tengan doble probabilidad de salir que los numeros del 1 al 99. por eso se recomienda usar floor y sumar 1 para que el numero aleatorio sea entre 1 y 100 sin que tenga doble probabilidad

//fround redondea a 15 decimales
document.getElementById("math").innerHTML += "<br>" + " el numero aleatorio entre 1 y 100 redondeado a 32 bits es: " + Math.fround(Math.random() * 100) + "<br>";

//trunc redondea hacia cero
document.getElementById("math").innerHTML += "<br>" + "ejemplo de trunc de 95.7 = " + Math.trunc(95.7) + "<br>";

//propiedades de math
document.getElementById("math").innerHTML += "<br>" + "la constante de Euler es: " + Math.E + "<br>";
document.getElementById("math").innerHTML += "<br>" + "el numero de oro es: " + Math.PHI + "<br>";
document.getElementById("math").innerHTML += "<br>" + "el numero de Euler-Mascheroni es: " + Math.GAMMA + "<br>";   

//propiedades sqrt2 y sqrt1_2 que hacen ? referencia a la raiz cuadrada de 2 y 1/2 respectivamente  
document.getElementById("math").innerHTML += "<br>" + "la raiz cuadrada de 2 es: " + Math.SQRT2 + "<br>";
document.getElementById("math").innerHTML += "<br>" + "la raiz cuadrada de 1/2 es: " + Math.SQRT1_2 + "<br>";

//LN2 y LN10 que hacen ? referencia al logaritmo natural de 2 y 10 respectivamente
document.getElementById("math").innerHTML += "<br>" + "el logaritmo natural de 2 es: " + Math.LN2 + "<br>";
document.getElementById("math").innerHTML += "<br>" + "el logaritmo natural de 10 es: " + Math.LN10 + "<br>";




//historia de coflal project
//ejemplo para calcular ponteciador raiz cuadrada y cubica de un numero en funcion
function calcularPotencia(numero, potencia) {
    return Math.pow(numero, potencia);
}
//otro jemplo con num ** exp


