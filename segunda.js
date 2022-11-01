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

