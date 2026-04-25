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

    // INTERÉS
    let interes = calcularInteresSimple(monto, tasa, plazo);

    document.getElementById("spnInteresPagar").innerText =
        "USD " + interes.toFixed(2);

    // TOTAL A PAGAR
    let total = calcularTotalPagar(monto, interes);

    document.getElementById("spnTotalPrestamo").innerText =
        "USD " + total.toFixed(2);

    // CUOTA MENSUAL
    let cuota = calcularCuotaMensual(total, plazo);

    document.getElementById("spnCuotaMensual").innerText =
        "USD " + cuota.toFixed(2);

    // ✅ APROBACIÓN DEL CRÉDITO (USANDO FUNCIÓN)
    let aprobado = aprobarCredito(capacidad, cuota);

    // MOSTRAR RESULTADO
    if(aprobado){
        document.getElementById("spnEstadoCredito").innerText = "CREDITO APROBADO";
    }else{
        document.getElementById("spnEstadoCredito").innerText = "CREDITO RECHAZADO";
    }
}