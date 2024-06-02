<?php

$nome = $_POST['nome'];
$preco = $_POST['preco'];
$arquivo = $_FILES['imagens'];

$conecao = new mysqli('localhost:3306','root','root','lojatrabalho');

if (empty($nome) || empty($preco) || empty($arquivo)) {
    $mensagem = "Adicione nome, preço e imagem!";
} else {
    $imageData = getimagesize($arquivo['tmp_name']);

    if($imageData === false || ($imageData[2] !== IMAGETYPE_PNG)) {
        $mensagem = "A imagem adicionioda não é um PNG!";
        $json = json_encode($mensagem);
        echo $json;
        return;
    }

    $stmt = $conecao->prepare("INSERT INTO produtos (nome, preco) VALUES (?, ?)");
    $stmt->bind_param("ss", $nome, $preco);

    $stmt->execute();

    if ($stmt->error) {
        die("Insertion failed: " . $stmt->error);
    }

    $id_produto = $conecao->insert_id;
    $nomeImagem = $id_produto . '.png';

    move_uploaded_file($arquivo['tmp_name'], '../upload/' . $nomeImagem);

    $stmt = $conecao->prepare("UPDATE produtos SET img = ? WHERE idprodutos = ?");
    $stmt->bind_param("si", $nomeImagem, $id_produto);

    $stmt->execute();

    if ($stmt->error) {
        die("Update failed: " . $stmt->error);
    }

    if ($stmt->affected_rows > 0) {
        $mensagem = "Produto adicionado com sucesso!";
    } else {
        $mensagem = "Falha ao adicionar produto!";
    }
}

$json = json_encode($mensagem);
echo $json;

?>
