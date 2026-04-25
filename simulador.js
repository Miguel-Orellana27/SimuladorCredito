function calcular(){

    // INGRESOS Y EGRESOS
    let ingresos = recuperarFloat("txtIngresos");
    let egresos = recuperarFloat("txtEgresos");

    // DISPONIBLE
    let disponible = calcularDisponible(ingresos, egresos);

    document.getElementById("spnDisponible").innerText =
        "USD " + disponible.toFixed(2);

    // ✅ CAPACIDAD DE PAGO (USANDO LA FUNCIÓN)
    let capacidadPago = calcularCapacidadPago(disponible);

    document.getElementById("spnCapacidadPago").innerText =
        "USD " + capacidadPago.toFixed(2);

    // DATOS DEL CRÉDITO
    let monto = recuperarFloat("txtMonto");
    let plazo = recuperarFloat("txtPlazo");
    let tasa = recuperarFloat("txtTasaInteres");

    // INTERÉS SIMPLE
    let interes = monto * (tasa / 100) * plazo;
    let total = monto + interes;

    // CUOTA MENSUAL
    let meses = plazo * 12;
    let cuota = meses > 0 ? total / meses : 0;

    document.getElementById("spnInteresPagar").innerText =
        "USD " + interes.toFixed(2);

    document.getElementById("spnTotalPrestamo").innerText =
        "USD " + total.toFixed(2);

    document.getElementById("spnCuotaMensual").innerText =
        "USD " + cuota.toFixed(2);

    // ESTADO DEL CRÉDITO
    let estado = cuota <= capacidadPago ? "APROBADO" : "RECHAZADO";

    document.getElementById("spnEstadoCredito").innerText = estado;
}