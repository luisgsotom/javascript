//Algoritmo para solicitar datos a cliente y direccion para delivery
let bandera = true
do {
    let nombre = prompt("Por favor ingrese su nomnbre")
    let telefono = parseInt(prompt("Por favor ingrese su numero de telefono"))
    let direccion = prompt("Si vivis en San Nicolas, Balvanera o Recoleta.  Podemos hacer el Delivery")

    let barrio = direccion
    if (barrio.toLowerCase() =="san nicolas"){
        console.log(`Hola ${nombre} tu numero es ${telefono} y tenemos  delivery a ${barrio}`)
    }
    else if (barrio.toLowerCase() =="balvanera"){
        console.log(`Hola ${nombre} tu numero es ${telefono} y tenemos  delivery a ${barrio}`)
    }
    else if (barrio.toLowerCase() =="recoleta"){
        console.log(`Hola ${nombre} tu numero es ${telefono} y tenemos  delivery a ${barrio}`)
    }
    else {
        console.log(`Ups! Perdon ${nombre} estas fuera de rango de Delivery`)
    }
    let preguntar = prompt (`Deseas volver a ingresar tus datos?
    "NO" para salir`)
    if (preguntar.toUpperCase() == "no"){
        bandera = false
        alert("Gracias por completar tus datos")
    }
}while(bandera)