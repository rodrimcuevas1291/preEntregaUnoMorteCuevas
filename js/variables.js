class Pizza {
    constructor(id, sabor, precio, tamaño) {
        this.id = id
        this.sabor = sabor.toUpperCase()
        this.precio = precio
        this. tamaño = tamaño
        }
}
class Empanada {
    constructor(num, gusto, valor, cocina){
        this.num = num
        this.gusto = gusto.toUpperCase()
        this.valor = valor
        this.cocina = cocina
    }
}

const empanadas = []
const pizzas = []

function agregarPizzas() {
pizzas.push(new Pizza(1, "Muzzarella", 900, "familiar"))
pizzas.push(new Pizza(2, "Napolitana", 1100, "familiar"))
pizzas.push(new Pizza(3, "Fugazzeta", 850, "individual"))
pizzas.push(new Pizza(4, "Pepperoni", 1650, "familiar"))
pizzas.push(new Pizza(5, "Especial", 1800, "familiar"))
pizzas.push(new Pizza(6, "Jamón y Morrones", 1400, "familiar"))
pizzas.push(new Pizza(7, "Cancha", 1100, "familiar"))
}
function agregarEmpanadas() {
empanadas.push(new Empanada(1, "Carne", 220, "frita u horno"))
empanadas.push(new Empanada(2, "Jamón y queso", 180, "frita u horno"))
empanadas.push(new Empanada(3, "Caprese", 200, "horno"))
empanadas.push(new Empanada(4, "Bondiola", 200, "horno"))
empanadas.push(new Empanada(5, "Humita", 180, "horno"))
empanadas.push(new Empanada(6, "Verdura", 180, "horno"))
empanadas.push(new Empanada(7, "Cantimpalo", 230, "horno"))
}

agregarEmpanadas();
agregarPizzas();

function recorrerPizzas() {
    pizzas.forEach(element => {
        console.table(element)
    })
}

function recorrerEmpanadas() {
    empanadas.forEach(el => {
        console.table(el)
    })
}

alert("Bienvenidos a Simplo Cocina")
pedido = prompt("Que pizza vas a querer ordernar hoy? Te recordamos los sabores con los que contamos: \nMuzzarella \nNapolitana \nFugazzetta \nPepperoni \nEspecial \Jamón y Morrones \nCancha").toUpperCase()

let buscar = pizzas.filter(el => el.sabor.includes(pedido))
        
alert("Excelente elección, a continuación le diremos cual es el precio a pagar por esa Pizza")
        
alert(`El precio a pagar es de: ${buscar[0].precio} `)

alert("Perfecto, ya tenemos la pizza, pero también contamos con empanadas. A continuación vas a poder buscar si contamos con el sabor que querés!")
let orden = prompt("Elegí que sabor de empanada te gustaría pedir, a ver si lo tenemos y te lo podemos llevar").toUpperCase()
let buscarOrden = empanadas.find(empanadas => empanadas.gusto == orden)
if (buscarOrden == undefined) {
        console.log("Lo sentimos, no contamos con ese sabor, proba ingresar otro!")
                            }
else {
        console.log(buscarOrden)
    }
