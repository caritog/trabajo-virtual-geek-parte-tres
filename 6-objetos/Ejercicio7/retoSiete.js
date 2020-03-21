/* Estructura de datos para un usuario
Vamos a crear un objeto para almacenar la información de un usuario y una constante llamada job donde 
 el valor 'developer'. A continuación seguiremos los siguiente pasos:

Usando la notación con punto o la notación con corchetes ([]) (ej: obj.prop o obj["prop"]):
Añadiremos una propiedad llamada firstName y le asignaremos un valor.
Añadiremos una propiedad llamada lastName y le asignaremos un valor.
Añadiremos una propiedad llamada age y le asignaremos un valor numérico.
Añadiremos una propiedad job a la que asignaremos el valor de la constante job
Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto
Cambiaremos el nombre del usuario por otro distinto
Aumentaremos en 1 la edad del usuario
Comprobaremos de nuevo que todo sigue funcionando correctamente  */


'use strict';

const job = "developer"; 

 const user = { // Objeto que almacena la información de un usuario
    firstName: 'Pepito',
    lastName:'Pérez',
    age: 30,
    job: job, //Al valor job (a la derecha) de la propiedad job (lado izquierdo), no se lo coloca entre comillas, ya que a ésta propiedad job le estamos asignando la constante job definida al inicio.
}

document.write(`Mi nombre es ${user.firstName} ${user.lastName}, tengo ${user.age} años y mi profesión es ${user.job}`);

