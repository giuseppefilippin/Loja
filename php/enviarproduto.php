<?php
    $cardid = intval($_POST['id']);
    $conecao = mysqli_connect("localhost:3306", "root", "root", "lojatrabalho");
    mysqli_query($conecao, "INSERT INTO carrinho(idprodutosparacarrinho) VALUES ($cardid)");
    
?>