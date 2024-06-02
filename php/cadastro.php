<?php
$connect = mysqli_connect('localhost:3306', 'root', 'root', 'lojatrabalho');
$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$query1 = "INSERT INTO cadastro (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
$mensagem = "";

$query2 = "SELECT email FROM cadastro WHERE email = '$email'";
$result = mysqli_query($connect, $query2);

if ($row = mysqli_fetch_assoc($result)) {
    $mensagem = "Email already exists in the database.";
} else {
    $resultado = mysqli_query($connect, $query1);
    $mensagem = "Welcome!";
}
$json = json_encode($mensagem);
echo $json;

?>