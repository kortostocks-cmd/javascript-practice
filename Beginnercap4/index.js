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
