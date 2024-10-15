const nazguls = document.querySelectorAll(".nazgul_list li");


nazguls.forEach(function(nazgul){
    nazgul.addEventListener("mouseover", function() {
        nazgul.textContent = "Nazgûl";
        nazgul.style.backgroundColor = "black"
    })
});