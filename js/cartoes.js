document.getElementById("botaoFinal").addEventListener("click", function(event) {
    event.preventDefault(); 

    var inputs = document.querySelectorAll('#formCadastro input');
    var allFilled = Array.prototype.every.call(inputs, function(input) {
        return input.value && input.value.trim() !== '';
    });

    if (allFilled) {
        alert("Compra finalizada com sucesso!");
        window.location.href = "../index.html";
    } else {
        alert("Preencha todos os campos.");
    }
});
