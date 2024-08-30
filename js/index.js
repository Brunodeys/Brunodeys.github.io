
function mostrarDiv() {
    var divs = document.querySelectorAll(".corpo-secundario");
    divs.forEach(function(div) {
        div.style.display = "block"
    });
    var botao = document.getElementById("meuBotao");
botao.style.display = "none";
}



