// ejercicio 1
function sumaTotal(arreglo){
    let suma = 0;
    for (let num of arreglo){
        suma += num;
    }
    return suma;
}
// ejemplo de uso:
const numeros =[1,2,3,4,5];
alert(sumaTotal(numeros));

// ejercicio 2
function encontrarMinimo(arreglo){
    let minimo = arreglo[0];
    for (let num of arreglo){
        if (num < minimo){
            minimo = num;
        }
    }
    return minimo;
}
// ejemplo de uso:
const numero = [5,32,84,21,23];
alert(encontrarMinimo(numero));

// ejercicio 3
function duplicarElementos(arreglo){
    const nuevoArreglo = [];
    for (let num of arreglo){
        nuevoArreglo.push(num*2);
    }
    return nuevoArreglo;
}
// ejemplo de uso:
const num = [1,2,3,4,5];
alert(duplicarElementos(num));