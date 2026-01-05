recipiente = "barbijo";
alert(recipiente) //variables !! var "recipiente" se pueden declarar var, let , const


//Tipos de datos tambien llamados primitivos porque son simples, datos basicos de javascript.
String = "cadena" 'de' `texto` //maneras de string "texto"
Number = numero 1 2 3 4 5 16 // no necesit comillas y puede ser una variable como string
Boolean = 0, 1 o false, true // mas adelante vamos a trbajar con esto.

//tipos de datos especiales
Undefined = let x;
            console.log(x); // undefined 
//Una variable existe, pero no tiene valor asignado

Null = let usuario = null; // aún no hay usuario
//Valor intencional de “nada”.

Nan = Not a Number //error de valor numerico
let z = 0 / 0;     // NaN
let a = "hola" * 3; // NaN



//Declaraciones de variables por ejemplo
Var = var numero = 15 //no se usa actualmente por bloqueo scope.
Let = let numero = 20// se usa actual para que no puedas modificar dentro del mismo scope, afuera del scope se puede declarar diderente.
Const = const numero = 20//no se puede cambiar y se usa actualmente
//por ejemplo
const nombre = "suarez";
nombre = "messi";
alert(nombre) //no sale messi sino suarez o sale error porque no puedes cambiar la variable con let si puede.


//funcion prompt
prompt = muestra una ventana emergente 
//ejemplo
let nombre = prompt("¿Cómo te llamas?");
// El texto entre comillas es la pregunta
//Lo que escribe el usuario se guarda en la variable
//Si presiona Cancel → devuelve null

// prompt numerico
let edad = Number(prompt("Edad:"));
// si solo quieres que sea para numeros le agregamos Number.

// ejemplo avanzado
let edad = Number(prompt("¿Cuántos años tienes?"));

if (edad >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("Eres menor");
}

//Operadores
Operadores en JavaScript

-Operadores de Asignacion 
=   // asignar   x = y
+=  // sumar y asignar  x = x + y 
-=  // restar y asignar  x = x - y 
*=  // multiplicar y asignar  x = x * y 
/=  // dividir y asignar  x = x / y 

-Operdores Artiméticos
+  // suma  x + y 
-  // resta  x - y 
*  // multiplicación x * y
/  // división  x / y
%  // módulo (resto) x % y



