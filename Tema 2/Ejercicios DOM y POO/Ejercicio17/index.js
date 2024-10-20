const misiones = document.getElementsByClassName("mision")

for (let mision of misiones) {
    mision.addEventListener("click", function() {
        mision.classList.add("completado");
    });
}