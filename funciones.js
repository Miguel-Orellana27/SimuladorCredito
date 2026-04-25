function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;
    return disponible < 0 ? 0 : disponible;
}

function recuperarTexto(idComponente) {
    return document.getElementById(idComponente).value;
}

function recuperarFloat(idComponente) {
    let valor = parseFloat(recuperarTexto(idComponente));
    return isNaN(valor) ? 0 : valor;
}

function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.5;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    return monto * (tasa / 100) * plazoAnios;
}

function calcularTotalPagar(monto, interes) {
    return monto + interes + 100; // Impuestos fijos
}

function calcularCuotaMensual(total, plazoAnios) {
    let meses = plazoAnios * 12;
    return meses > 0 ? total / meses : 0;
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    return capacidadPago > cuotaMensual && cuotaMensual > 0;
}

// Funciones de validación visual
function mostrarError(idSpan, mensaje) {
    let span = document.getElementById(idSpan);
    span.innerText = mensaje;
    span.style.display = "block";
}

function limpiarErrores() {
    let errores = document.querySelectorAll(".error-msg");
    errores.forEach(err => {
        err.innerText = "";
        err.style.display = "none";
    });
}