<?php
  
    $conecao = mysqli_connect("localhost:3306", "root", "root", "lojatrabalho");

    mysqli_query($conecao, "DELETE FROM carrinho");

?>