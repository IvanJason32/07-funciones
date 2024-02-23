
// Función: Generador de Tablas de Multiplicar.
const tablasMultiplicar = (numero, limite) => {
    for(i = 1; i < limite+1; i++) {
        console.log(i, " x ", numero, " = ", i*numero);
    }
};

tablasMultiplicar(9, 20);

// Función que determina si los numeros son de primos o no.
const numerosPrimos = (numero) => {
    if (numero === 1) {
        return "El numero NO es primo"
    } else {
        let contador = 1;
        let nd = 0;
        while(contador <= numero) {
            // console.log(contador)
            if (numero % contador === 0) {
                nd++;
            }
            contador++;
        }
        console.log(nd)
        if(nd > 2) {
            return "El numero NO es primo"
        } else {
            return "El numero es primo"
        }
    }
    
};

console.log(numerosPrimos(73));

//Función que cálcula el factorial de un numero dado 
const calcularFactorial = (numero) => {
    if (numero === 0) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
};

console.log(calcularFactorial(12));