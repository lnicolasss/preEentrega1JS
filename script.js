alert("Salva al gatito del dragón")
alert("Al dragón le queda una vida del 20%, deberás elegir la opción adecuada para poder matarlo.\nOpción 1: Tenedor (daño 14%)\nOpción 2: Cuchara (daño 10%)\nOpción 3: Tengo miedo");

function juego() {
    let vidaDragon = 20;
    let intentos = 0;
    const maxIntentos = 3;

    while (intentos < maxIntentos && vidaDragon > 0) {
        intentos++;
        let eleccion = prompt("Elige tu arma:\n1. Tenedor (daño 14%)\n2. Cuchara (daño 10%)\n3. Tengo miedo");

        if (eleccion == "1") {
            vidaDragon -= 14
            if (vidaDragon > 0) {
                let subEleccion = prompt("Elige tu daño adicional:\n1. + 5% de daño\n2. + 6% de daño\n3. + 3% de daño");
                if (subEleccion == "1") {
                    vidaDragon -= 5
                } else if (subEleccion == "2") {
                    vidaDragon -= 6;
                } else if (subEleccion == "3") {
                    vidaDragon -= 3;
                } else {
                    alert("Opción inválida. No hiciste daño adicional.");
                }
            }
        } else if (eleccion == "2") {
            vidaDragon -= 10;
            if (vidaDragon > 0) {
                let subEleccion = prompt("Elige tu arma adicional:\n1. + 5% de daño\n2. + 6% de daño\n3. + 3% de daño");
                if (subEleccion == "1") {
                    vidaDragon -= 5;
                } else if (subEleccion == "2") {
                    vidaDragon -= 6;
                } else if (subEleccion == "3") {
                    vidaDragon -= 3
                } else {
                    alert("Opción inválida. No hiciste daño adicional.");
                }
            }
        } else if (eleccion == "3") {
            alert("Dejaste al gatito moriri, mal humano");
            break;
        } else {
            alert("No sabes leer? pon la opcion correcta manco!.");
            intentos--;
        }

        if (vidaDragon <= 0) {
            alert("Exelente, eres un salvador de gatitos!");
            break;
        } else if (intentos < maxIntentos) {
            alert(`El dragón aún tiene ${vidaDragon}% de vida.`);
        }
    }

    if (vidaDragon > 0 && intentos >= maxIntentos) {
        alert("No sabes pelear, El dragón sigue vivo y el gatito no está a salvo.")
    }
}

juego();