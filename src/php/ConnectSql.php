<?php

    $con = mysqli_connect("localhost:8889", "root", "root", "ecommerce");

    if ($con)
        echo('conexao com o banco: conectado');
    else
        echo('conexao com o banco: não conectado');

?>