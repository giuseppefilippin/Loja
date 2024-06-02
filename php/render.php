<?php

    $connection = mysqli_connect("localhost:3306", "root", "root", "lojatrabalho");

    $query = "
    select produtos.nome as 'name' ,count(carrinho.idprodutosparacarrinho) as 'amount', produtos.img as 'icon', produtos.preco as 'price', produtos.idprodutos as 'id'
	from carrinho
    join produtos on carrinho.idprodutosparacarrinho = idprodutos
    group by idprodutos;
    ";

    $pointer = mysqli_query($connection,$query);
    $dataArray = array();

    while($data = mysqli_fetch_assoc($pointer)){
        array_push($dataArray, $data);
    }

    echo json_encode($dataArray);

?>