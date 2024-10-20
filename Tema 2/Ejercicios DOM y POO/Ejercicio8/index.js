class Superheroe {
    constructor(name, poder, nivel) {
        this.name = name;
        this.poder = poder;
        this.nivel = nivel;
    }

    get fuerza() {
        return this.poder * this.nivel
    }
}

const button = document.getElementById("button");
button.addEventListener("click", function() {
    const superheroe1 = new Superheroe("Batman", 1200, 0.9);
    const superheroe2 = new Superheroe("IronMan", 800, 1.25);
    const superheroe3 = new Superheroe("Spiderman", 500, 1.4);
    const superheroe4 = new Superheroe("Wonder Woman", 1600, 0.4);
    const superheroe5 = new Superheroe("Superman", 300, 2.75);
    const superheroes = [superheroe1, superheroe2, superheroe3, superheroe4, superheroe5];

    let triunfador = superheroes[0];
    for (let supeheroe of superheroes) {
        if (supeheroe.fuerza > triunfador.fuerza) {
            triunfador = supeheroe
        }
    }

    const ganador = document.getElementById("ganador");
    ganador.innerHTML = `El supeheroe ${triunfador.name} ha ganado la batalla con ${triunfador.fuerza} de fuerza y nivel ${triunfador.nivel} !`
});