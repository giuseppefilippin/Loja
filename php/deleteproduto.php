<?php

$nome = $_POST['nome'];

$conecao = new mysqli('localhost:3306','root','root','lojatrabalho');

$stmt = $conecao->prepare("DELETE FROM produtos WHERE nome = ?");
$stmt->bind_param("s", $nome);

$stmt->execute();

if ($stmt->affected_rows > 0) {
    $mensagem = "Produto deletado com sucesso!";
} else {
    $mensagem = "Produto não encontrado!";
}

$json = json_encode($mensagem);
echo $json;

?>
