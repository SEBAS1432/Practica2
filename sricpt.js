

function toggleMenu() {
    const opciones = document.getElementById("opciones");
    opciones.style.display = opciones.style.display === "flex" ? "none" : "flex";
  }

  function verOfertas() {
  
    alert("Vas a ser redirigido a las ofertas de ropa.");
    
    var confirmacion = confirm("¿Estás seguro de que deseas ver las ofertas?");
    
   
    if (confirmacion) {
        window.location.href = 'productos/productos.html';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el elemento de la flecha
    const flecha = document.getElementById('flechaarriba');

    // Función para mostrar u ocultar la flecha dependiendo del porcentaje de desplazamiento
    function toggleFlecha() {
        // Calcular el porcentaje de desplazamiento
        const porcentajeDesplazado = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

        // Mostrar la flecha si el usuario ha desplazado más del 90% de la página
        if (porcentajeDesplazado > 90) {
            flecha.style.display = 'block';
        } else {
            flecha.style.display = 'none';
        }
    }
    
    /*function verOfertas() {
        // Mostrar una alerta bonita primero
        Swal.fire({
            title: '¡Espera!',
            text: 'Vas a ser redirigido a las ofertas de ropa.',
            icon: 'info',
            confirmButtonText: 'Entendido'
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario confirma, mostrar el confirm y redirigir
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: '¿Quieres ver las ofertas?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Sí, redirigirme',
                    cancelButtonText: 'No, quedarme aquí'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = 'productos/productos.html';  // Redirigir
                    }
                });
            }
        });
    }*/
    
    // Función para hacer scroll hacia arriba
    function volverArriba() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Detectar cuando se hace scroll
    window.onscroll = function() {
        toggleFlecha();
    };

    // Detectar el clic en la flecha
    flecha.addEventListener('click', volverArriba);

    // Funciones para abrir y cerrar modales
    const openModal = (id) => {
        document.getElementById(id).style.display = 'block';
    };

    const closeModal = (id) => {
        document.getElementById(id).style.display = 'none';
    };

    // Botones para abrir los modales
    document.getElementById('btn-retiro').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('modal-retiro');
    });
   

    document.getElementById('btn-cambios').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('modal-cambios');
    });

    document.getElementById('btn-terminos').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('modal-terminos');
    });

    document.getElementById('btn-reclamaciones').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('modal-reclamaciones');
    });

    // Botón para abrir el modal de tiendas
document.getElementById('btn-store').addEventListener('click', (e) => {
    e.preventDefault();
    openModal('store-modal');
});

    // Botones para cerrar los modales
    document.querySelectorAll('.close').forEach((closeBtn) => {
        closeBtn.addEventListener('click', (e) => {
            const modalId = closeBtn.getAttribute('data-modal');
            closeModal(modalId);
        });
    });

    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach((modal) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Manejo del formulario de reclamaciones
    const formulario = document.getElementById('form-reclamaciones');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir el envío real del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const reclamo = document.getElementById('reclamo').value;

        // Mostrar un mensaje (esto podría ser una llamada a un servidor para enviar la reclamación)
        alert(`Gracias, ${nombre}! Hemos recibido tu reclamo y nos pondremos en contacto contigo pronto.`);

        // Cerrar el modal después de enviar
        closeModal('modal-reclamaciones');
    });
    
});
