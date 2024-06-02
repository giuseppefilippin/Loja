<?php
$connect = mysqli_connect('localhost:3306', 'root', 'root', 'lojatrabalho');
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$mensagem = "";

$query2 = "SELECT email FROM cadastro WHERE email = '$email'";
$result = mysqli_query($connect, $query2);

if ($row = mysqli_fetch_assoc($result)) {
    $resultado = mysqli_query($connect, $query2);
    $mensagem = "Bem-vindo!";
} else {
    $mensagem = "Email não cadastrado.";
}
$json = json_encode($mensagem);
echo $json;

?>
