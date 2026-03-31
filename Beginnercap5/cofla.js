//cofla 
const materias = {
fisica: [90,6,4,"fisica"],
matematicas: [84,8,2,"matematicas"],
logica: [92,8,4,"logica"],
quimica: [96,8,4,"quimica"],
calculo: [91,6,3,"calculo"],
programacion: [79,7,4,"programacion"],
biologia: [75,9,2,"biologia"],
bbdd: [98,9,1,"bbdd"],
algebra: [100,10,4,"algebra"]
}






const aprobo = ()=>{
    for (let materia in materias) {
        let asistencia = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3])

        if (asistencia >= 90) {
            console.log(`% Asistencia en orden`, "color: green; font-size: 16px;")
        }else{
            console.log(`%c  Falta de asistencia`, "color: red; font-size: 16px;")
        } if (promedio >= 7) {
            console.log("%c Promedio en orden, color:green font-size: 16px;")
        } else{
            console.log("%c Promedio desaprobado", "color:red font-size: 16px;")
        }
        if (trabajos >= 3) {
            console.log("%c Trabajos en orden", "color: green; font-size: 16px;")
        } else {
            console.log("%c Falta de trabajos", "color: red; font-size: 16px;")
        }
    
    
    
    
    }
}
aprobo();//mira el console para ver los resultados de cada materia, si esta aprobado o reprobado dependiendo de la asistencia, si es mayor o igual a 90% es aprobado, si es menor a 90% es reprobado



//Cofla 2
let trabajo = "240 minutos de trabajo";
let estudio = "240 minutos de estudio";
let tp ="100 minutos hacer trabajos practicos";
let homework = "30 minutos de cosas de la casa";
let descanso ="10 minutos de descanso";

console.log;("TAREAS");
for (var i = 0; i < 14; i++) {
    if (i == 1) {
        console.group("semana 1");
    }
console.groupCollapsed("dia " + (i+1));
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
    if (i == 7) {
        
            console.groupEnd();
            console.groupCollapsed("semana 2");
        
    }
}

console.groupEnd();
console.groupEnd();