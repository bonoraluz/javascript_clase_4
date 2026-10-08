// Juego simple de piedra, papel o tijera

const usuario = prompt("Escriba su nombre de usuario");

alert("Hola " + usuario + "!");
alert("Jugaremos una versión muy simple de piedra, papel y tijera");
alert("PC y " + usuario + " cuentan con 2 vidas");
alert("En esta versión, perdés una vida si empatás también. En la consola aparecen las opciones");

let vidasUsuario = 2;
let vidasPC = 2;

const elecciones = ["piedra", "papel", "tijera", "lagarto", "Spock"];
elecciones.splice(3, 1);
elecciones.pop();


console.log("¿Está tijera?", elecciones.includes("tijera"));
console.log("¿Está papel?", elecciones.includes("papel"));
console.log("¿Está piedra?", elecciones.includes("piedra"));
console.log("La posición de papel es:", elecciones.indexOf("papel"));

// La PC sólo puede elegir papel
let eleccionPC = 1;


// FUNCIÓN 1
// Muestra las opciones disponibles

function mostrarOpciones(usuario,elecciones) {

    console.log(usuario + ", tus opciones son:");
    for (let eleccion of elecciones){
        console.log(eleccion)
    }

}



// FUNCIÓN 2
// Determina quién gana
// Retorna un resultado

function determinarGanador(indiceUsuario, eleccionPC) {

    if (indiceUsuario === eleccionPC) {

        return "empate";

    }

    else if (
        (indiceUsuario === 0 && eleccionPC === 2) ||
        (indiceUsuario === 1 && eleccionPC === 0) ||
        (indiceUsuario === 2 && eleccionPC === 1)
    ) {

        return "usuario";

    }

    else {

        return "pc";
    }
}


// FUNCIÓN 3
// Función flecha para mostrar las vidas

const mostrarVidas = (vidasUsuario, vidasPC) => {

    console.log(
        "A la PC le quedan: " + vidasPC +
        " vidas y al usuario le quedan: " + vidasUsuario + " vidas"
    );
};


// FUNCIÓN 4
// Muestra el resultado final

function mostrarResultadoFinal(usuario, vidasUsuario, vidasPC) {

    if (vidasPC > vidasUsuario) {

        alert("Gana PC!");

    }

    else if (vidasPC < vidasUsuario) {

        alert("Gana " + usuario + " !");

    }

    else {

        alert("Ambos perdieron :c");
    }
}


// Comienza el juego

mostrarOpciones(usuario,elecciones);

while (vidasPC !== 0 && vidasUsuario !== 0) {

    const eleccionUsuario = Number(
        prompt("Elija una opción: 0 = piedra, 1 = papel, 2 = tijera")
    );

    const resultado = determinarGanador(
        eleccionUsuario,
        eleccionPC
    );


    if (resultado === "empate") {

        console.log("Empate, ambos pierden");

        vidasPC--;
        vidasUsuario--;

    }

    else if (resultado === "usuario") {

        console.log("Gana usuario " + usuario);
        console.log("PC pierde una vida");

        vidasPC--;

    }

    else {

        console.log("Gana PC");
        console.log(usuario + " pierde una vida");

        vidasUsuario--;
    }


    mostrarVidas(vidasUsuario, vidasPC);
}


// FINAL DEL JUEGO

alert("FIN DEL JUEGO :)");

mostrarResultadoFinal(usuario, vidasUsuario, vidasPC);
