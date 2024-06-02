async function AddProduto(event) { 
    event.preventDefault();
    var form = document.getElementById("addProduto"); 
    var dados = new FormData(form);
    dados.append('imagens', form.imagens.files[0]);
    fetch('../php/addproduto.php', {
      method: 'POST',
      body: dados
    })
    .then(response => response.json())
    .then(data => {
      alert(data);
    });
    var resposta = await prosmise.json();
    alert(resposta)
}

function DeleteProduto(event) { 
  event.preventDefault();
  var form = document.getElementById("deleteProduto"); 
  var dados = new FormData(form);
  fetch('../php/deleteproduto.php', {
    method: 'POST',
    body: dados
  })
  .then(response => response.json())
    .then(data => {
      alert(data);
      location.reload()
    });
}


