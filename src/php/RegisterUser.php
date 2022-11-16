<?php

    include 'connectsql.php';

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $pw = $_POST['pw'];

    $query = mysqli_query($con, "INSERT INTO users (nome, email, pw) VALUES ('$nome', '$email', '$pw')");

?>