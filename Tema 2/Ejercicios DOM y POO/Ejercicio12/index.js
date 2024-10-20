const heroes = document.getElementById("lista")
const text = document.getElementById("result")

heroes.addEventListener("change", function(e) {
    switch (heroes.value) {
        case "Batman":
            text.textContent = "Tiene un arsenal y su entrenamiento en artes marciales"
            break;
        case "Aquaman":
            text.textContent = "Puede hablar con criaturas marinas y comandar los mares"
            break;
        case "Martianmanhunter":
            text.textContent = "Telepatía"
            break;
        case "Beastboy":
            text.textContent = "Se puede transformar en animales"
            break;
        case "Robin":
            text.textContent = "Fue entrenado por Batman"
            break;
        case "Raven":
            text.textContent = "Puede controlar la oscuridad y las sombras"
            break;
        default:
            break;
    }
});