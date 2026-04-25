function calcularDisponible(ingresos, egresos){
    let disponible = ingresos - egresos;

    if(disponible < 0){
        return 0;
    }

    return disponible;
}

function recuperarTexto(idComponente){
    let componente = document.getElementById(idComponente);
    return componente.value;
}

function recuperarFloat(idComponente){
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);

    if(isNaN(valorFloat)){
        return 0;
    }

    return valorFloat;
}

function calcularCapacidadPago(montoDisponible){
    if(isNaN(montoDisponible)){
        return 0;
    }

    return montoDisponible * 0.5;
}
function calcularInteresSimple(monto, tasa, plazoAnios){
    if(isNaN(monto) || isNaN(tasa) || isNaN(plazoAnios)){
        return 0;
    }

    return monto * (tasa / 100) * plazoAnios;
}
function calcularTotalPagar(monto, interes){
    let total = monto + interes + 100; // +100 por impuestos y SOLCA
    return total;
}
function calcularCuotaMensual(total, plazoAnios){
    if(isNaN(total) || isNaN(plazoAnios)){
        return 0;
    }

    let meses = plazoAnios * 12;
    return meses > 0 ? total / meses : 0;
}