$(document).ready(function () {
    $("#btn-contactar").click(function () {
        alert("El correo fue enviado correctamente.");
    });

    $(".dclickVerde").on("dblclick", function(){
        $(this).css({
        "color": "green",
        });
    });
    
});