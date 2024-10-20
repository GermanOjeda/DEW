const escudo = document.getElementById("escudo");
escudo.addEventListener("click", () => {
    setInterval(function() {
        let originalposition = escudo.style.left.split("px")[0]
        escudo.style.left = (parseInt(originalposition) + 100) + "px";
    }, 1000)
})