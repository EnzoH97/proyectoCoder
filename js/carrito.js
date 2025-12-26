
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

function calcularTotal(carrito) {
    let total = 0;
    
    for (let producto of carrito) {
        total += producto.precio * producto.cantidad;
    }
    return total;
}

function finalizarCompra() {
    localStorage.removeItem("carrito");
    renderizarCarrito();
}

function renderizarCarrito() {
    if (!lista) return;

    lista.innerHTML = "";

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const totalElemento = document.getElementById("total");

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

const total = calcularTotal(carrito);
totalElemento.textContent = `$${total}`;

const botonFinalizar = document.querySelector(".btn-finalizar");
botonFinalizar.addEventListener("click", finalizarCompra);
}
renderizarCarrito();
