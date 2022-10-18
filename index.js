//Algoritmo para solicitar datos a cliente y direccion para delivery
let bandera = true
do {
    let nombre = prompt("Por favor ingrese su nomnbre")
    let telefono = parseInt(prompt("Por favor ingrese su numero de telefono"))
    let direccion = prompt("Si vivis en San Nicolas, Balvanera o Recoleta.  Podemos hacer el Delivery")

    let barrio = direccion
    if (barrio =="san nicolas"){
        console.log(`Hola ${nombre} tu numero es ${telefono} y tenemos  delivery a ${barrio}`)
    }
    else if (barrio =="balvanera"){
        console.log(`Hola ${nombre} tu numero es ${telefono} y tenemos  delivery a ${barrio}`)
    }
    else if (barrio =="recoleta"){
        console.log(`Hola ${nombre} tu numero es ${telefono} y tenemos  delivery a ${barrio}`)
    }
    else {
        console.log(`Ups! Perdon ${nombre} estas fuera de rango de Delivery`)
    }
    let pregunta = prompt (`Deseas volver a ingresar tus datos? 
    "ESC" para salir`)
    if (pregunta.toUpperCase() == "ESC"){
        bandera = false
        alert("Gracias por completar tus datos")
    }
}while(bandera)