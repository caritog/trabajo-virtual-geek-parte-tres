/*
INVESTIGACIÓN
console.dir ()
Muestra una lista interactiva de las propiedades de un objeto JavaScript especificado. 

///////////////////////////////////
value
La propiedad value establece o devuelve el valor del atributo.

Ejemplo
Obtenga el valor del primer atributo del elemento <button>:
var x = document.getElementsByTagName("BUTTON")[0].attributes[0].value;

////////////////////////////////////
nodeName
La propiedad nodeName devuelve el nombre del nodo especificado.
Si el nodo es un nodo de elemento, la propiedad nodeName devolverá el nombre de la etiqueta.
Si el nodo es un nodo de atributo, la propiedad nodeName devolverá el nombre del atributo.
Para otros tipos de nodos, la propiedad nodeName devolverá diferentes nombres para diferentes tipos de nodos

Ejemplo
Obtenga el nombre de nodo de un elemento <p>:
var x = document.getElementById("myP").nodeName;

////////////////////////////////////
required
La propiedad required establece o devuelve si un campo de texto debe completarse antes de enviar un formulario.
Esta propiedad refleja el atributo requerido de HTML.

Ejemplo
Averigüe si se debe completar un campo de texto antes de enviar un formulario:
var x = document.getElementById("myText").required;

*/

'use strict';

const button = document.querySelector('#button');
const input = document.querySelector('#input'); 

button.addEventListener('click',(e)=>{   
    console.dir(input); // haciendo uso de dir  
    console.dir(input.value);  
});