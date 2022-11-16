<?php

    error_reporting(E_ALL & ~E_NOTICE);

    header("Access-Control-Allow-Origin: *");

    $con = mysqli_connect('localhost:8889', 'root', 'root', 'ecommerce');

?>