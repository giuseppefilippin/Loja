window.onload = async () => {
    var resultado = await fetch("../php/render.php", {
      method: "GET"
    });
    var dados = await resultado.json();
    for (var i = 0; i < dados.length; i++) {
      var conteudo = `
      <form>
      <div class="container"> 
          <div class="card">
          <img  class="img-fora" src="../upload/${dados[i].icon}" height="200">
            <div class="content">
              <img src="../upload/${dados[i].icon}" height="100">
              <p>${dados[i].name}</p>
              <p>Quantidade: ${dados[i].amount} </p>
              <h3>R$${dados[i].price}</h3>
            </div>
          </div>
        </div>
  </form>
      `;
      document.getElementById("carrinho").innerHTML += conteudo;
    }
  total()
}

async function total() { 
  let resultado = await fetch("../php/render.php", {
    method: "GET"
  })
  let dados = await resultado.json()
  let total = 0
  dados.forEach(row => {
    total += Number(row.price) * Number(row.amount)
  })
  const totalElement = document.querySelector('.total')
  totalElement.innerHTML = `Total: R$${total.toFixed(2)}`
}

async function remo(id) {
  var formData = new FormData();
  formData.append('id', id);
  
  let resultado = await fetch(`../php/tirarcarrinho.php`, {
    method: "POST",
    body: formData,
  });
  location.reload()
  alert("Carrinho Vazio.")
}

async function listar() { 
  var resultado = await fetch("../php/produtos.php", {
    method: "GET"
  });
  var dados = await resultado.json();
  for (var i = 0; i < dados.length; i++) {  
    var conteudo = ` <img src="../upload/${dados[i].img}" height="100">
    <p>${dados[i].nome}</p>
    <h3>R$${dados[i].preco}</h3> `
    document.getElementById("finalizar").innerHTML += conteudo;
  }
}
