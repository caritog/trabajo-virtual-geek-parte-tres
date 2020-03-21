//Bio de Geek Girls 2

/* Partiendo del objeto geekGirl1 del ejercicio anterior, añade un método (una función) 
showBio que muestra una ventana de alerta con la frase 'Mi nombre es María, tengo 34 años 
y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.
Hacemos lo mismo para geekGirl2 */


'use strict';

// geekGirl1
const geekGirl1 = {};
geekGirl1.name = 'María';
geekGirl1.age = 34;
geekGirl1.profession = 'periodista';

geekGirl1.showBio = function () {
    //desde un método de un objeto podemos acceder al resto de propiedades de ese objeto usando la palabra this antes del nombre de la propiedad. 
    alert('Mi nombre es ' + this.name + ', tengo ' +  this.age + ' años y soy ' + this.profession); 
}

console.log(geekGirl1.showBio());

// geekGirl2
const geekGirl2 = {};
geekGirl2.name = 'Rocío';
geekGirl2.age = 25;
geekGirl2.profession = 'actriz';

geekGirl2.showBio = function () {
    //desde un método de un objeto podemos acceder al resto de propiedades de ese objeto usando la palabra this antes del nombre de la propiedad. 
    alert('Mi nombre es ' + this.name + ', tengo ' +  this.age + ' años y soy ' + this.profession);
}

console.log(geekGirl2.showBio())

