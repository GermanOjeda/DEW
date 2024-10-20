class Superman {
    constructor() {
        this.Img = "superman.jpg";
    }

    volar() {
        const superman = document.getElementById("superman");
        setInterval(function() {
            superman.style.bottom = "100%";
        }, 1000)
    }
}

const superman = new Superman()
const elem = document.getElementById("superman")

elem.addEventListener("click", function() {
    superman.volar()
});