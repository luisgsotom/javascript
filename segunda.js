
//esta es la clase constructora
class Comida {
    constructor(id, plato, precio){
        this.id = id,
        this.plato = plato,
        this.precio = precio

    }
    //métodos
    mostrarData(){
        console.log(`el plato es ${this.plato} y su precio es ${this.precio} MËTODO`)
    }
}
//Instaciacion de objetos

const comida1 = new Comida(1,"Docena de tequeños", 1300)

const comida2 = new Comida(2,"Media docena de pastelitos", 1100)

const comida3 = new Comida(3,"Docena de pastelitos", 2100)

const comida4 = new Comida(4,"Promo seis pastelitos y seis tequeños + salsa", 1600)

const comida5 = new Comida(5,"Promo cuatro pastelitos y cuatro tequeños + salsa", 2200)

const comida6 = new Comida(6,"Promo quince tequeños + salsa", 1390)

//Array de objetos
//de manera directa
const catalogoProductos = [comida1, comida2, comida3, comida4,comida5, comida6]
console.log(catalogoProductos)
//de manera con metodo push
const carrito = []
carrito.push(comida1, comida2)
console.log(carrito)

//Función para agregar platos: 
function nuevoPlato(array){
    let platoIngresado = prompt("Ingrese el nombre del plato")
    let precioIngresado = parseInt(prompt("Ingrese el precio del plato"))
    let platoCreado = new Comida(array.length+1, platoIngresado, precioIngresado)
//Objeto creado y pusheado a array
    array.push(platoCreado)
    console.log(array)
}
function verCatalogo(array){
    for(let plato of array){
        console.log(`La ${plato.plato} tiene un valor de $${plato.precio}`)
    }
}
function mostrarCatalogoFOREACH(array){
    //metodo de array FOR EACH
    array.forEach( 
        (plato) => {
            plato.mostrarData()
        }
    )
    array.forEach()
}
//Function para aplicar FIND
function buscarPorTitulo(array){
    let platoBuscado = prompt("Ingrese el titulo que desea buscar")
    let platoEncontrado = array.find(
        (plato)=> plato.plato.toLowerCase() == platoBuscado.toLowerCase()
        )
    if(platoEncontrado == undefined){
        console.log(`La comida ${platoBuscado} no se encuenta en catalogo`)
    }else{
        console.log(platoEncontrado)
    }
}
//metodo SORT que afecta al array original!! OJO
function ordenarMayorMenor(array){
    //Orden de mayor a menor
    console.log(array.sort((a,b) => (b.precio - a.precio)))
}
function ordenarMenorMayor(array){
    //Orden de menor a mayor
    console.log(array.sort((x,y)=>(x.precio - y.precio)))
}
    //Orden alfabetico
function ordenarAlfabeticamenteTitulo(array){
    console.log(array.sort((a, b) => {
        if(a.plato == b.plato) {
            return 0; 
        }
        if(a.plato < b.plato) {
            return -1;
        }
        return 1;
    }))

}
function ordenar(array){
    let opcion = parseInt(prompt(`
    1 - Ordenar de mayor a menor
    2 - Ordenar de menor a mayor
    3 - Ordenar alfabeticamente por nombre`))
    switch(opcion){
        case 1:
            ordenarMayorMenor(array)
        break
        case 2: 
            ordenarMenorMayor(array)
        break
        case 3:
            ordenarAlfabeticamenteTitulo(array)
        break
        default:
            console.log("Ups! la opción no es reconocida")
        break

    }
}
//Function prompt de consultas que hace el usuario
function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingresá el número de la opción que desea realizar:
                        1 - Ver menú de comidas
                        2 - Agregar un plato a nuestro menu
                        3 - Encontrar por nombre de plato:
                        4 - Ordenar platos por:
                        0 - Para salir
                        `))
    menu(opcion)
}
//Function del menu segun seleccion
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por visitar Tr3slocos, tequeños y pastelitos maracuchos de verdad`)
        break    
        case 1:
            verCatalogo(catalogoProductos)
        break 
        case 2: 
            nuevoPlato(catalogoProductos)
        break 
        case 3: 
            buscarPorTitulo(catalogoProductos)
        break
        case 4:
            ordenar(catalogoProductos)
        break
        default: 
            alert(`Ingrese una opción correcta`)
    }
}
//CÓDIGO:
let salir = false
while(salir!=true){
    preguntarOpcion()
}
