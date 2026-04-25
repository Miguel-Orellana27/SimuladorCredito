function calcular(){

    // INGRESOS Y EGRESOS
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");

    // DISPONIBLE
    let disponible = calcularDisponible(ingresos, egresos);

    document.getElementById("spnDisponible").innerText =
        "USD " + disponible.toFixed(2);

    // CAPACIDAD DE PAGO
    let capacidad = calcularCapacidadPago(disponible);

    document.getElementById("spnCapacidadPago").innerText =
        "USD " + capacidad.toFixed(2);

    // DATOS DEL CRÉDITO
    let monto = recuperarFloat("txtMonto");
    let plazo = recuperarFloat("txtPlazo");
    let tasa = recuperarFloat("txtTasaInteres");

    // INTERÉS (USANDO FUNCIÓN)
    let interes = calcularInteresSimple(monto, tasa, plazo);

    document.getElementById("spnInteresPagar").innerText =
        "USD " + interes.toFixed(2);

    // TOTAL PRÉSTAMO
    let total = monto + interes;

    document.getElementById("spnTotalPrestamo").innerText =
        "USD " + total.toFixed(2);

    // CUOTA MENSUAL
    let meses = plazo * 12;
    let cuota = meses > 0 ? total / meses : 0;

    document.getElementById("spnCuotaMensual").innerText =
        "USD " + cuota.toFixed(2);

    // ESTADO DEL CRÉDITO
    let estado = cuota <= capacidad ? "APROBADO" : "RECHAZADO";

    document.getElementById("spnEstadoCredito").innerText = estado;
}