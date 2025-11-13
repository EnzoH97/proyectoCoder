let menu = [
    {nombre: "Promo1", precio: 1100},
    {nombre: "Promo2", precio: 1700},
    {nombre: "Cafe", precio: 800},
    {nombre: "Cafe con leche", precio: 1000},
    {nombre: "Jugo de naranja", precio: 700},
    {nombre: "Tortitas", precio: 350},
    {nombre: "Facturas", precio: 450},
    {nombre: "Churros", precio: 1000},
    {nombre: "Donas", precio: 1000},
    {nombre: "Magdalena", precio: 600},
    {nombre: "Waffles", precio: 1200},
    {nombre: "Sandwich de miga", precio: 500}
]

let deseaComprar = confirm("Bienvenido ¿Desea realizar una compra?");
compra = false;
carrito = []; // lista vacía para guardar los productos
let cliente = "";

if (deseaComprar) {
compra = true;
// Saludar al cliente
    cliente = prompt("Ingrese su nombre:");
    alert("bienvenido/a " + cliente + " a nuestra tienda");
    console.log("bienvenido/a " + cliente + " a nuestra tienda");
// Funcion para agregar producto al carrito
function agregarProducto(opcion)  {
    // Validar que la opcion sea correcta 
    if (opcion >= 1 && opcion <= menu.length) {
        let productoElegido = menu[opcion -1];
        carrito.push(productoElegido);
        alert("Seleccionaste: " + productoElegido.nombre + " - $" + productoElegido.precio);
}else{
    alert("Opcion no valida. Intente nuevamente.");
}
}

//funcion para calcular el total
function calcularTotal(){
    let total = 0;
    for(i = 0; i < carrito.length; i++){
        total += carrito[i].precio;
    }
    return total;
}

function mostrarResumen(){
    if(carrito.length === 0){
        alert("Tu carrito esta vacio.");
        return;
    }
    
    let resumen = cliente + " el resumen de tu compra es: \n";
    for(i = 0; i < carrito.length; i++){
        resumen += (i+1) + " ."+ carrito[i].nombre + " -$" + carrito[i].precio + "\n";
    }

    resumen += "\n Total a pagar: $" + calcularTotal();
    alert(resumen);
    console.log(resumen);
}

while (compra) {
// Generar lista de productos
    let mostrarMenu="Que desea comprar?\nNuestro menu es:\n";
    for(i=0; i < menu.length; i++){
        mostrarMenu += (i+1) + "." + menu[i].nombre + " - $" + menu[i].precio + "\n";
    }
    let opcion = prompt(mostrarMenu + "Ingrese el numero del producto que desea comprar:");

// Validar que el cliente ingreso algo 
    if(opcion === null){
        alert("La compra fue cancelada.");
        break;
    }

// Convertir opcion ingresada a numero
    opcion = parseInt(opcion);

// Llamar a la función para agregar el producto
    agregarProducto(opcion);

// Preguntar si desea seguir comprando
compra = confirm("¿Desea comprar otro producto?")
}

// Mostrar resumen final de la compra
mostrarResumen();



// Despedir al cliente
alert("Gracias " + cliente + " por tu compra. ¡Vuelva pronto!");
console.log("Gracias " + cliente + " por tu compra. ¡Vuelva pronto!");

}else {
    alert("Gracias por visitar nuestra tienda.");
}