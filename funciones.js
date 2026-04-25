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