async function cadastrocadastro() { 
    var form = document.getElementById("formCadastro");
    var dados = new FormData(form);

    var promise = await fetch("../php/cadastro.php", {
        method: "POST",
        body: dados
    });

    var resposta = await promise.json();
    alert(resposta);
}

async function entrarcadastro() {
    var form = document.getElementById("formCadastro");
    var dados = new FormData(form);

    var promise = await fetch("../php/entrar.php", {
        method: "POST",
        body: dados
    });

    var resposta = await promise.json();
    alert(resposta);
}