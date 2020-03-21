/* Crear un contador
Vamos a crear un contador con los datos que comentamos en la introducción de esta sesión.
Este contador deberá tener como propiedades un valor máximo, un valor mínimo, un valor
actual y un valor inicial y como métodos deberá tener un aumentar, disminuir y restablecer.
Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el 
estado actual para ver si funciona correctamente. */


'use strict';

const valor = {}
valor.max = 100;
valor.min = 1;
valor.inicial = parseInt(prompt('Digite un número del 1 al 100'));

let option = parseInt(prompt('Presione 1 para AUMENTAR y 2 para DISMINUIR'));
if (option === 1) {
    for (let i = valor.inicial; i < - valor.max; i++) {
        console.log('El valor inicial es: ' + valor.inicial, ' y el valor actual es ', i)
    }
} else if (option === 2) {
    for (let i = valor.inicial; i < - valor.min; i--) {
        console.log('El valor inicial es: ' + valor.inicial, ' y el valor actual es ', i)
    }
    console.log('Valor inicial: ' + valor.inicial + ' Valor maximo: ' + valor.max + ' Valor minimo: ' + valor.min);
} else {
    console.log('Valor errado, recuerde que debe elegir entre la opción 1 ó 2');
}


