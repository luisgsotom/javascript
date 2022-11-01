class Menu {
    constructor(id, comida, precio){
        this.id = id,
        this.comida = comida,
        this.precio = precio
    }
    mostrarData(){
        console.log(`La comida es ${this.comida} y el precio es ${this.precio} METODO`)
    }
}

const comida1 = new Menu(1,"Docena de Tequeños", 1300)

const comida2 = new Menu(2,"Media docena de Pastelitos", 1100)

const comida3 = new Menu(3,"Docena de Pastelitos", 2100)

const comida4 = new Menu(4,"Combo Medio y Medio", 1600)

const comida5 = new Menu(5, "Combo Cuatro por Cuatro", 1000)

const carrito = [comida1, comida2, comida3, comida4, comida5]
console.log(carrito)

//forma pusheando
const pedido = []
pedido.push(comida1, comida2)
console.log(pedido)

//Funcion agregar comida al menu:
function nuevaComida(array){
    let comidaIngresada = prompt("Ingresa el nombre de la comida")
    let precioIngresado = parseInt(prompt("Ingresa el precio de la comida"))
    let comidaNueva = new Menu(array.leght+1,comidaIngresada, precioIngresado)
    array.push(comidaNueva)
    console.log(array)
}
function verMenu(array){
    for(let comidas of array){
        console.log(`La ${comidas.comida} tiene un valor de ${comidas.precio}`)
    }
}
function verMenuForEach(array){
    array.forEach(
        (comida)=> {
            comida.mostrarData()
        }
    )
}
function buscarPorComida(array){
    let comidaBuscada = prompt("ingrese la comida que quiere buscar")
    let comidaEncontrada = array.find(
        (comida)=> comidas.comida.toLowerCase() == comidaBuscada.toLocaleLowerCase()
        )
    if(comidaEncontrada == undefined){
        console.log(`La comida que buscas no esta en el Menu`)
    }
    else{
        console.log(comidaEncontrada)
    }
}

function menuCliente(){
    let opcion = parseInt(prompt(`Ingresa la opcion que de quiere consultar:
    1 - Ver Menu de comidas
    2 - Agregar una nueva comida a nuestro Menu
    3 - Encontrar una comida por nombre
    0 - Para salir de la ventana`))
    menu(opcion)
}

function menu(opcionConsultada){
    switch(opcionConsultada){
        case 0:
            salir = true
            alert(`Gracias! nos vemos en su proximo pedido`)
        break
        case 1:
            verMenu(pedido)
        break
        case 2:
            nuevaComida(carrito)
        case 3:
            buscarPorComida(carrito)
        break
        default:
            alert(`Ingrese una opcion correcta`)
    }
}
let salir = false
while(salir!=true){
    menuCliente
}