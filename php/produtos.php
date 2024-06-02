<?php
    $conecao = mysqli_connect("localhost: 3306", "root", "root", "lojatrabalho");
    $query = mysqli_query($conecao, "SELECT * FROM produtos");
    $dados = array();

    while($registro = mysqli_fetch_assoc($query)){
        array_push($dados, $registro);
    }
    $json = json_encode($dados);
    echo $json;
    
?>