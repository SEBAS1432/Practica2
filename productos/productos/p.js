// Variable global para contar los productos en el carrito
function toggleMenu() {
    const opciones = document.getElementById("opciones");
    opciones.style.display = opciones.style.display === "flex" ? "none" : "flex";
  }


let contadorProductos = 0;

// Función para actualizar el contador en el carrito
function actualizarContador() {
    const contador = document.getElementById('contadorCarrito');
    contador.innerText = contadorProductos;

    // Guardar el contador en localStorage
    localStorage.setItem('contadorProductos', contadorProductos);
}

// Función para agregar un producto al carrito
function agregarAlCarrito() {
    contadorProductos++;
    actualizarContador();
}

// Obtener todos los botones de compra
const botonesComprar = document.querySelectorAll('.botonComprar');

// Asignar el evento de clic a cada botón "Comprar"
botonesComprar.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
});

// Recuperar el valor del contador de localStorage cuando se carga la página
window.addEventListener('load', () => {
    const contadorGuardado = localStorage.getItem('contadorProductos');
    if (contadorGuardado !== null) {
        contadorProductos = parseInt(contadorGuardado);
        actualizarContador();
    }
});

// Función para resetear el carrito
document.getElementById('resetCarrito').addEventListener('click', () => {
    contadorProductos = 0;  // Resetea el contador de productos
    actualizarContador();   // Actualiza el contador en el carrito
    localStorage.removeItem('contadorProductos');  // Elimina el contador de localStorage
});

