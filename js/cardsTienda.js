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
                <div class="card-button">
                    <svg viewBox="0 0 20 20">
                        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path><path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path><path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                    </svg>
                </div>
            </div>
    `;
    document.getElementById("contenedor-cards").appendChild(card);

/* 
Interactividad futura para agregar al carrito
    const boton = card.querySelector(".card-button");
    boton.addEventListener("click", ()=> {
        agregarAlCarrito(producto);
    }) */
}