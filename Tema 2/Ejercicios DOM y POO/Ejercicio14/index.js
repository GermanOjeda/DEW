class Gema {
    constructor(nombre, poder) {
        this.nombre = nombre
        this.poder = poder
    }
}

class Thanos {
    constructor() {
        this.guantelete = [];
    }

    get poderTotal() {
        let resultado = 0;
        this.guantelete.forEach(Gema => {
            resultado += Gema.poder;
        });
        return resultado
    }

    pickGema(Gema) {
        this.guantelete.push(Gema);
    }
}

document.getElementById("button").addEventListener("click", function() {
    const gema1 = new Gema("Alma", 1462)
    const gema2 = new Gema("Tiempo", 435)
    const gema3 = new Gema("Mente", 1664)
    const gema4 = new Gema("Espacio", 8754)
    const gema5 = new Gema("Poder", 1346)
    const gema6 = new Gema("Realidad", 9999)
    
    const thanos = new Thanos()
    thanos.pickGema(gema1)
    thanos.pickGema(gema2)
    thanos.pickGema(gema3)
    thanos.pickGema(gema4)
    thanos.pickGema(gema5)
    thanos.pickGema(gema6)

    alert(`Con las gemas de ${gema1.nombre}, ${gema2.nombre}, ${gema3.nombre}, ${gema4.nombre}, ${gema5.nombre} y ${gema6.nombre}, el guantelete tiene un poder de ${thanos.poderTotal}`)
});