function calcular() {
    // 1. Limpiar estados previos
    limpiarErrores();

    // 2. Recuperar valores
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");
    let monto = recuperarFloat("txtMonto");
    let plazo = recuperarFloat("txtPlazo");
    let tasa = recuperarFloat("txtTasaInteres");

    // 3. Validaciones de Negocio
    let esValido = true;

    if (ingresos <= 0) { mostrarError("errIngresos", "Ingrese ingresos válidos."); esValido = false; }
    if (egresos < 0) { mostrarError("errEgresos", "Ingrese egresos válidos."); esValido = false; }
    if (ingresos <= egresos && ingresos > 0) { mostrarError("errIngresos", "Los ingresos deben superar a los egresos."); esValido = false; }
    
    if (monto < 500 || monto > 100000) { mostrarError("errMonto", "Monto entre $500 y $100,000."); esValido = false; }
    if (plazo < 1 || plazo > 30) { mostrarError("errPlazo", "Plazo entre 1 y 30 años."); esValido = false; }
    if (tasa < 1 || tasa > 35) { mostrarError("errTasaInteres", "Tasa entre 1% y 35%."); esValido = false; }

    // 4. Ejecución si los datos son correctos
    if (esValido) {
        let disponible = calcularDisponible(ingresos, egresos);
        let capacidad = calcularCapacidadPago(disponible);
        let interes = calcularInteresSimple(monto, tasa, plazo);
        let total = calcularTotalPagar(monto, interes);
        let cuota = calcularCuotaMensual(total, plazo);
        let aprobado = aprobarCredito(capacidad, cuota);

        // Actualizar Interfaz
        document.getElementById("spnDisponible").innerText = "USD " + disponible.toFixed(2);
        document.getElementById("spnCapacidadPago").innerText = "USD " + capacidad.toFixed(2);
        document.getElementById("spnInteresPagar").innerText = "USD " + interes.toFixed(2);
        document.getElementById("spnTotalPrestamo").innerText = "USD " + total.toFixed(2);
        document.getElementById("spnCuotaMensual").innerText = "USD " + cuota.toFixed(2);
        
        let estado = document.getElementById("spnEstadoCredito");
        if (aprobado) {
            estado.innerText = "CREDITO APROBADO";
            estado.style.color = "#10b981"; // Verde
        } else {
            estado.innerText = "CREDITO RECHAZADO";
            estado.style.color = "#ef4444"; // Rojo
        }
    }
}

function reiniciarSimulador() {
    // Limpiar Inputs
    let inputs = ["txtIngresos", "txtEgresos", "txtMonto", "txtPlazo", "txtTasaInteres"];
    inputs.forEach(id => document.getElementById(id).value = "");

    // Limpiar Spans
    let spans = ["spnDisponible", "spnCapacidadPago", "spnInteresPagar", "spnTotalPrestamo", "spnCuotaMensual"];
    spans.forEach(id => document.getElementById(id).innerText = "USD 0.00");

    // Resetear Estado
    let estado = document.getElementById("spnEstadoCredito");
    estado.innerText = "ESPERANDO DATOS";
    estado.style.color = "#64748b";

    limpiarErrores();
}