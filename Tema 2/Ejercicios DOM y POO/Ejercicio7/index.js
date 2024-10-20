class Jedi {
    constructor(name, nivelFuerza, arma) {
        this.name = name;
        this.nivelFuerza = nivelFuerza;
        this.arma = arma;
    }
}

class Sith {
    constructor(name, nivelFuerza, arma) {
        this.name = name;
        this.nivelFuerza = nivelFuerza;
        this.arma = arma;
    }
}

const button = document.getElementById("button");
button.addEventListener("click", function() {
    const jedi = new Jedi("Luke Skywalker", 1000, "Sable Laser Verde");
    const sith = new Sith("Darth Vader", 990, "Sable Laser Rojo");
    const luchadores = [jedi, sith];

    let triunfador = luchadores[0];
    for (let luchador of luchadores) {
        if (luchador.nivelFuerza > triunfador.nivelFuerza) {
            triunfador = luchador
        }
    }

    const ganador = document.getElementById("ganador");
    ganador.innerHTML = `El luchador ${triunfador.name} ha ganado la batalla con ${triunfador.nivelFuerza} de fuerza y su ${triunfador.arma} !`
});