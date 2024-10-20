const contraseña = document.getElementById("contraseña")
const confirmar = document.getElementById("confirmar")
const text = document.getElementById("resultado")

confirmar.addEventListener("click", function() {
    if (contraseña.value == "Vengadores") {
        text.textContent = "Assemble!"
    }
});