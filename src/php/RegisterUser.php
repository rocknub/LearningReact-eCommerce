<?php

$email = $_POST["email"];
$password = $_POST["password"];

include "ConnectSql.php";

$query = mysqli_query($con, "INSERT INTO products (email, password) VALUES ('$email', '$password'");
    
if ($query) {
    echo "<br>criar novo produto: funfou.";
} else {
    echo "<br>criar novo produto: não funfou.";
}

?>