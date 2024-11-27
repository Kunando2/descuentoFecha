function calcularDescuento(fechaVencimiento) {
    const hoy = new Date();
    const diferenciaMilisegundos = new Date(fechaVencimiento) - hoy;
    const diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    if (diferenciaDias > 45) 
        { return 'sin_descuento'; } 
    else if (diferenciaDias >= 30) { return 0.30; } 
    else if (diferenciaDias >= 15) { return 0.40; } 
    else if (diferenciaDias >= 7) { return 0.50; } 
    else if (diferenciaDias >= 0) { return 0.70; } 
    else { return 0.70; }
}

function calcularPrecioFinal(precio, descuento) {
    return precio * (1 - descuento);
}

function calcular(event) {
    // Evita que el formulario se envíe y recargue la página
    event.preventDefault();

    const fechaVencimientoInput = document.getElementById('fechaVencimiento').value;
    const precioInput = parseFloat(document.getElementById('precio').value);

    if (!fechaVencimientoInput || isNaN(precioInput)) {
        alert('Por favor, introduce una fecha de vencimiento y un precio válidos.');
        return;
    }

    const descuento = calcularDescuento(fechaVencimientoInput);
    const precioFinal = calcularPrecioFinal(precioInput, descuento);

    document.getElementById('resultado').innerText = `El descuento es del ${descuento * 100}%. El precio final con descuento es: $${precioFinal.toFixed(2)}`;
}

// Añadir el evento de escucha al formulario
document.getElementById('formulario').addEventListener('submit', calcular);
