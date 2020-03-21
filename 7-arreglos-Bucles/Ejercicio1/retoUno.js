//Películas - Arreglos

'use strict';

const favoriteMovies = () => { 

    const movies = ["Wonder Woman", "La masacre de Texas", "El niño de la pijama de rayas"]; //array dentro de una función

    movies[3] = "El hombre invisible"; //se ingresa una nueva peli
    console.log(movies);

    movies[3] = "Armagedon";  //modificación de la película en posición 3 del array
    console.log(movies);

    movies[0] = "Marley y yo";
    console.log(movies);
};

favoriteMovies();


