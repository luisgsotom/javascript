let nombre = prompt("Por favor ingrese su nomnbre")
let telefono = parseInt(prompt("Por favor ingrese su numero de telefono"))
let direccion = prompt("Si vivis en San Nicolas, Balvanera o Recoleta. Podemos hacer el Delivery")

let barrio = direccion
if (barrio =="san nicolas"){
    console.log(`${nombre} Tenemos delivery a ${barrio}`)
}
else if (barrio =="balvanera"){
    console.log(`${nombre} Tenemos delivery a ${barrio}`)
}
else if (barrio =="recoleta"){
    console.log(`${nombre} Tenemos delivery a ${barrio}`)
}
else {
    console.log("Ups! estas fuera de rango de Deivery")
}