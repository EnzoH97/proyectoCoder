/* let menu = [
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
} */

let productos = [
    {nombre: "Promo1", precio: 1100, imagen:"../assets/img/promo1.jpg", alt:"Imagen ilustrativa de la promo 1", descripcion:"Café o café con leche + tortita o factura"},
    {nombre: "Promo2", precio: 1700, imagen:"../assets/img/promo2.jpg", alt:"Imagen ilustrativa de la promo 2", descripcion:"Café/café con leche + tortita/factura + jugo natural"},
    {nombre: "Cafe", precio: 800, imagen:"../assets/img/cafe.jpg", alt:"Imagen ilustrativa del cafe", descripcion:"vaso de cafe mediano"},
    {nombre: "Cafe con leche", precio: 1000, imagen:"../assets/img/cafe-leche.jpg", alt:"Imagen ilustrativa del cafe con leche", descripcion:"vaso de cafe con leche mediano"},
    {nombre: "Jugo de naranja", precio: 700, imagen:"../assets/img/jugo.jpg", alt:"Imagen ilustrativa del jugo de naranja", descripcion:"vaso de jugo de naranja natural"},
    {nombre: "Tortitas", precio: 350, imagen:"../assets/img/tortitas.jpg", alt:"Imagen ilustrativa de las tortitas", descripcion:"tortitas caseras a elección"},
    {nombre: "Facturas", precio: 450, imagen:"../assets/img/facturas.jpg", alt:"Imagen ilustrativa de las facturas", descripcion:"facturas caseras a elección"},
    {nombre: "Churros", precio: 1000, imagen:"../assets/img/churros.jpg", alt:"Imagen ilustrativa de los churros", descripcion:"Churros rellenos de dulce de leche o chocolate"},
    {nombre: "Donas", precio: 1000, imagen:"../assets/img/donas.jpg", alt:"Imagen ilustrativa de las donas", descripcion:"Donas glaseadas o rellenas a elección"},
    {nombre: "Magdalena", precio: 600, imagen:"../assets/img/Magdalenas.jpg", alt:"Imagen ilustrativa de la magdalena", descripcion:"Magdalenas rellena o glaseada a elección"},
    {nombre: "Waffles", precio: 1200, imagen:"../assets/img/waffles.jpg", alt:"Imagen ilustrativa de los waffles", descripcion:"Waffles dulces a elección"},
    {nombre: "Sandwich de miga", precio: 500, imagen:"../assets/img/sandwich.jpg", alt:"Imagen ilustrativa del sandwich de miga", descripcion:"Sandwich de miga a elección"}
]

for(const producto of productos){
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <div class="card-img">
                <img src="${producto.imagen}" alt="${producto.alt}">
            </div>
            <div class="info-card">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
            </div>
            <div class="footer-card">
                <!--precio del producto-->
                <p>$${producto.precio}</p>
            </div>
    `;
    document.getElementById("contenedor-cards").appendChild(card);
}
