function calcular() {
    limpiarErrores();

    let ingresos = recuperarFloat("txtIngresos");

    let arriendo = recuperarFloat("txtArriendo");
    let alimentacion = recuperarFloat("txtAlimentacion");
    let varios = recuperarFloat("txtVarios");

    let egresos = arriendo + alimentacion + varios;

    let monto = recuperarFloat("txtMonto");
    let plazo = recuperarFloat("txtPlazo");
    let tasa = recuperarFloat("txtTasaInteres");

    let esValido = true;

    if (ingresos <= 0) { mostrarError("errIngresos", "Ingrese ingresos válidos."); esValido = false; }

    if (arriendo < 0) { mostrarError("errArriendo", "Valor inválido."); esValido = false; }
    if (alimentacion < 0) { mostrarError("errAlimentacion", "Valor inválido."); esValido = false; }
    if (varios < 0) { mostrarError("errVarios", "Valor inválido."); esValido = false; }

    if (ingresos <= egresos && ingresos > 0) {
        mostrarError("errIngresos", "Los ingresos deben superar los gastos.");
        esValido = false;
    }

    if (monto < 500 || monto > 100000) { mostrarError("errMonto", "Monto inválido."); esValido = false; }
    if (plazo < 1 || plazo > 30) { mostrarError("errPlazo", "Plazo inválido."); esValido = false; }
    if (tasa < 1 || tasa > 35) { mostrarError("errTasaInteres", "Tasa inválida."); esValido = false; }

    document.getElementById("spnTotalGastos").innerText = "USD " + egresos.toFixed(2);

    if (esValido) {
        let disponible = calcularDisponible(ingresos, egresos);
        let capacidad = calcularCapacidadPago(disponible);
        let interes = calcularInteresSimple(monto, tasa, plazo);
        let total = calcularTotalPagar(monto, interes);
        let cuota = calcularCuotaMensual(total, plazo);
        let aprobado = aprobarCredito(capacidad, cuota);

        document.getElementById("spnDisponible").innerText = "USD " + disponible.toFixed(2);
        document.getElementById("spnCapacidadPago").innerText = "USD " + capacidad.toFixed(2);
        document.getElementById("spnInteresPagar").innerText = "USD " + interes.toFixed(2);
        document.getElementById("spnTotalPrestamo").innerText = "USD " + total.toFixed(2);
        document.getElementById("spnCuotaMensual").innerText = "USD " + cuota.toFixed(2);

        let estado = document.getElementById("spnEstadoCredito");
        estado.innerText = aprobado ? "CREDITO APROBADO" : "CREDITO RECHAZADO";
        estado.style.color = aprobado ? "#10b981" : "#ef4444";
    }
}

function reiniciarSimulador() {
    let inputs = [
        "txtIngresos","txtArriendo","txtAlimentacion","txtVarios",
        "txtMonto","txtPlazo","txtTasaInteres"
    ];

    inputs.forEach(id => document.getElementById(id).value = "");

    let spans = [
        "spnDisponible","spnCapacidadPago","spnInteresPagar",
        "spnTotalPrestamo","spnCuotaMensual"
    ];

    spans.forEach(id => document.getElementById(id).innerText = "USD 0.00");

    document.getElementById("spnTotalGastos").innerText = "USD 0.00";

    let estado = document.getElementById("spnEstadoCredito");
    estado.innerText = "ESPERANDO DATOS";
    estado.style.color = "#64748b";

    limpiarErrores();
}