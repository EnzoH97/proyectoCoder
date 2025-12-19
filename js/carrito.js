
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const lista = document.getElementById("lista");

function agregarAlCarrito(producto) {
    const item = carrito.find(p => p.id === producto.id);
    if (item) {
        item.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        })
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function finalizarCompra() {
    localStorage.removeItem("carrito");
    renderizarCarrito();
    alert("Gracias por su compra!");
}

function renderizarCarrito() {
    lista.innerHTML = "";
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    for (let producto of carrito) {
        let item = document.createElement("li");
        item.classList.add("item-compra");

        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.descripcion}" class="item-imagen">
            <div class="item-info">
                <p class="item-nombre">${producto.nombre}</p>
                <p class="item-cantidad">Cantidad: ${producto.cantidad}</p>
                <p class="item-precio">$${producto.precio * producto.cantidad}</p>
            </div>
        `;

        lista.appendChild(item);
    }

const botonFinalizar = document.querySelector(".btn-finalizar");
botonFinalizar.addEventListener("click", finalizarCompra);

//actualizacion futura calcular total a pagar y darle funcionalidad al boton finalizar compra. 
}

renderizarCarrito();
