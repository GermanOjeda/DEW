class Villano {
    constructor(nombre, plan){
        this.nombre = nombre;
        this.plan = plan;
    }

    cambiarPlan(){
        let plan_nuevo = document.getElementById('introducir_plan');
        this.plan = plan_nuevo.value;
        plan.textContent = joker.plan;
    }
}

let joker = new Villano('Joker', 'Contactar con el Espantapájaros');

let plan = document.getElementById('plan');
plan.textContent = joker.plan;

document.querySelector('button').addEventListener('click', function(){
    joker.cambiarPlan();
    });