window.onload = async () => {
    var resultado = await fetch("php/produtos.php", {
      method: "GET"
    });
    var dados = await resultado.json();
    for (var i = 0; i < dados.length; i++) {
      var conteudo = `
      <form>
      <div class="container"> 
          <div class="card">
          <img class="img-fora" src="upload/${dados[i].img}" height="200">
            <div class="content">
              <img src="upload/${dados[i].img}" height="100">
              <p>${dados[i].nome}</p>
              <h3>R$${dados[i].preco}</h3>
              <a href="#" id="${dados[i].idprodutos}" onclick="addcarrinho(this)" >Adicionar ao Carrinho</a>
            </div>
          </div>
        </div>
  </form>
      `;
      document.getElementById("card-produtos").innerHTML += conteudo;
    }
  
    document.querySelector(".search-btn").addEventListener("click", searchItems);
  
function searchItems() {
  var searchQuery = document.querySelector(".search-txt").value.toLowerCase();
  
  for (var i = 0; i < dados.length; i++) {
    var itemNome = dados[i].nome.toLowerCase();
    var container = document.getElementById("card-produtos").children[i];
    if (itemNome.includes(searchQuery)) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  }
}
};

function addcarrinho(element) { 
  let data = new FormData();
  data.append("id", element.id);

  fetch ("php/enviarproduto.php", {
    method: "POST",
    body: data
  })
  console.log(element.id)
}

/*  PROVAVEL TESTE DE AUTORIA RA3
async function listar() { 
  var resultado = await fetch("php/produtos.php", {
    method: "GET"
  });
  var dados = await resultado.json();
  for (var i = 0; i < dados.length; i++) {
    console.log(dados[i].nome)
  }
 */