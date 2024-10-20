class Mago {
    constructor(nombre) {
        this.nombre = nombre;
        this.hechizo = new Hechizo('Combustión Espontanea');
    }
}

class Hechizo {
    constructor(nombre) {
        this.nombre = nombre;
    }

    calcularPoder() {
        let poder = Math.ceil(Math.random() * 100);
        return poder;
    }
}

let mago1 = ""
let mago2 = ""

function generarMagos() {
    mago1 = new Mago('Dave el Mago hacedor del yogur de Frutas');
    mago2 = new Mago('Tobías el Mago del Queso');
}

function calcularGanador() {
    generarMagos();
    let ganador = ''
    let perdedor = ''
    let podermagico1 = mago1.hechizo.calcularPoder();
    let podermagico2 = mago2.hechizo.calcularPoder();
    if(podermagico1 > podermagico2){
        ganador = mago1;
        perdedor = mago2;
    } else {
        ganador = mago2;
        perdedor = mago1;
    }

    let msg = `${ganador.nombre} ha ganado a ${perdedor.nombre} con el hechizo de ${ganador.hechizo.nombre} ! ! !`;
    document.querySelector('#resultado').innerHTML = msg;
}