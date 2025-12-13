
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const lista = document.getElementById("lista");

function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


function renderizarCarrito() {
//actualizacion futura: evitar duplicados y sumar cantidades
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    for (let producto of carrito) {
        let item = document.createElement("li");
        item.classList.add("item-compra");

        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.descripcion}" class="item-imagen">
            <div class="item-info">
                <p class="item-nombre">${producto.nombre}</p>
                <p class="item-precio">$${producto.precio}</p>
            </div>
        `;

        lista.appendChild(item);
    }
//actualizacion futura calcular total a pagar y darle funcionalidad al boton finalizar compra. 
}

renderizarCarrito();
