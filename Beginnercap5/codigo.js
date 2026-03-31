console.error("¡Hola, mundo!");
console.warn("¡Cuidado! Esto es una advertencia.");
console.info("¡Información importante!"[1, 2, 3, 4, 5]);//muestra todos los arreglos como un objeto = informacion importante 1 2 3 4 5
console.table({ nombre: "Juan", edad: 30, ciudad: "Madrid" });
console.dir([1, 2, 3, 4, 5]); //=> muestra el array como un solo objeto array(5)



var nombre = "Juan";
var edad = 30;
console.log("El nombre es: " + nombre);
console.log("La edad es: " + edad);

console.clear();//limpia la consola

//Funciones de conteo
console.count("contador");
console.count("contador");
console.count("contador");
console.countReset("contador"); //reinicia el contador
console.count("contador"); //muestra 1 nuevamente   



//Funciones de agrupación
console.group("Grupo 1");//inicia un grupo llamado "Grupo 1" y todo lo que se imprima después de esto hasta console.groupEnd() estará dentro de este grupo
console.log("Mensaje dentro del grupo 1");
console.group("Subgrupo 1.1");//abierto un subgrupo dentro del grupo 1 llamado "Subgrupo 1.1"
console.log("Mensaje dentro del subgrupo 1.1");
console.groupEnd(); //cierra el subgrupo 1.1 elimina
console.groupEnd(); //cierra el grupo 1 elimina el grupo 1 y el subgrupo 1.1

console.groupCollapsed("Grupo 2"); //inicia un grupo colapsado cerrado por defecto
console.log("Mensaje dentro del grupo 2");
console.groupEnd(); //cierra el grupo 2 elimina el grupo 2  




//Funciones de tiempo
console.time("tiempo");
for (let i = 0; i < 1000000; i++) {
    // Simulación de una tarea que toma tiempo
}
console.timeLog("tiempo", "a pasado esto de tiempo"); // muestra el tiempo que ha pasado desde console.time("tiempo") hasta este punto
console.timeEnd("tiempo"); //muestra el tiempo que ha pasado desde console.time("tiempo") hasta console.timeEnd("tiempo")

//no sirve despues de timeEnd porque ya se ha terminado el tiempo y no se puede medir nada después de eso, por eso muestra error
console.timeLog("tiempo", "a pasado esto de tiempo"); // muestra error porque tiene que ser antes del time End

//elementos de linea basicos
console.log("Primera línea\nSegunda línea"); //\n es un salto de línea
console.log("Columna 1\tColumna 2"); //\t es una tabulación para separar columnas
console.log("Comillas simples: 'Hola'"); //muestra comillas simples
console.log('Comillas dobles: "Mundo"'); //muestra comillas dobles
console.log("Comillas escapadas: \"Hola Mundo\""); //muestra comillas dobles escapadas con \    
console.log("Barra invertida: \\"); //muestra una barra invertida escapada con \    

//elementos de linea avanzados
console.log("Texto con estilo: %cHola Mundo", "color: red; font-size: 20px;");//% c es un marcador de posición para aplicar estilos CSS al texto que sigue a este marcador, en este caso "Hola Mundo" se mostrará en rojo y con un tamaño de fuente de 20px
console.log("Número formateado: %d", 12345.6789); //% d es un marcador de posición para formatear un número como entero, en este caso se mostrará como 12346 redondeado al entero más cercano
console.log("Número con decimales: %f", 12345.6789); //% f es un marcador de posición para formatear un número como flotante, en este caso se mostrará como 12345.678900 con 6 decimales por defecto
