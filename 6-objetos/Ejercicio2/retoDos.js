//A la carrera

/*Partiendo del objeto geekGirl1 del ejercicio anterior, añade un método (una función)
run que muestre en la consola la frase 'Estoy corriendo'.
Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance
que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo 
un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado. */

'use strict';

const geekGirl1 = {} // Creando objetos a partir de objetos vacíos
geekGirl1.name = 'Susana'; 
geekGirl1.age = 34;
geekGirl1.profession = 'periodista'; 
geekGirl1.distance = 50;

geekGirl1.run = (phrase) => `Estoy ${phrase}`; // Método (función) run
geekGirl1.runAMarathon = (distance) => ` un maratón de ${distance}`; // Método (función) runAMarathon

console.log(geekGirl1.run('corriendo') + geekGirl1.runAMarathon(geekGirl1.distance)+ ' kilómetros');
