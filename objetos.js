
//esta es la clase constructora
class Comida {
    constructor(id, plato, precio, imagen){
        this.id = id,
        this.plato = plato,
        this.precio = precio,
        this.imagen = imagen

    }
    //métodos
    mostrarData(){
        console.log(`el plato es ${this.plato} y su precio es ${this.precio} MËTODO`)
    }
}
//Instaciacion de objetos

const comida1 = new Comida(1,"Combo Medio & Medio", 1600,"pasteles-tequenos.jpg" )

const comida2 = new Comida(2,"Combo Cuatro por Cuatro", 1000, "4x4.jpg")

const comida3 = new Comida(3,"Combo Loquilochera", 800, "LOQUILONCHERA.jpg")

const comida4 = new Comida(4,"Loquipack Reloaded", 600, "otrocombo.jpg")

const comida5 = new Comida(5,"Los Tequeloquillos", 1400, "mini-tequenos.jpg")

const comida6 = new Comida(6,"Tequeños Congelados", 1000, "tequenos-congelados.jpg")

//Array de objetos
const catalogoProductos = [comida1, comida2, comida3, comida4,comida5, comida6]
//console.log(catalogoProductos)

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
    let platoBuscado = prompt("Ingresá la comida que deseas buscar")
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
/*function preguntarOpcion(){
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
*/
//Capturo Productos

let productos = document.getElementById("productos")
for(let combo of catalogoProductos){
    let nuevoCombo = document.createElement("div")
    nuevoCombo.innerHTML = `<div id="${combo.id}" class="col-md-4 col-12 mb-5">
    <div class="card mx-auto" style="width: 20rem;">
        <img src="../img/${combo.imagen}" class="card-img-top" alt="${combo.plato}">
        <div class="card-body">
            <h3 class="card-body text-center">${combo.plato}</h3>
            <h5 class="card-body text-center">Precio $: ${combo.precio}</h5>
            <a href="https://api.whatsapp.com/send?phone=5491169637009" class="btnGenerico">Agregar al carrito</a>
        </div>
    </div>
</div>`
productos.appendChild(nuevoCombo)
}
