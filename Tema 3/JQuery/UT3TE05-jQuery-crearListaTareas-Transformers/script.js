$(document).ready(function() {
    $("#agregar-tarea").click(function() {
        const new_task = $("#nueva-tarea").val()
        if (new_task != "") {
            $("#lista-tareas").append(getTask(new_task));   
            bindEvents()
        } else {
            alert("La misión necesita un nombre !")
        }
    });
    $("#limpiar-tareas").click(function() {
        $("#lista-tareas").empty()
    });
    function bindEvents() {
        $(".delete-button").click(function() {
            $(this).parents("li").remove();
        });

        $(".edit-button").click(function() {
            const item = $(this).parents("li")
            $(".selected-edit").removeClass("selected-edit")
            $(item).addClass("selected-edit")
            editMission()
        });
    }
    function getTask(name) {
        html = ` 
        <li>
            <p>${name}</p>
            <div style="display: flex;">
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </div>
        </li>
        `
        return html
    }
    function editMission() {
        $("#editmission").show();
        $("#editmission #confirm-button").click(function() {
            if ($("#editmission input").val() != "") {
                $(".selected-edit").find("p").text($("#editmission input").val());
                $("#editmission").hide();
            } else {
                alert("La misión necesita un nombre !")
            }
        });
        $("#editmission #cancel-button").click(function() {
            $("#editmission").hide();
        });
    }
});