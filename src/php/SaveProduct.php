<?php

    $title = $_POST["title"];
    $imageurl = $_POST["imageurl"];
    $price = $_POST["price"];
    $rating = $_POST["rating"];

    include "ConnectSql.php";

    $query = mysqli_query($con, "INSERT INTO products (title, imageurl, price, rating) VALUES ('$title', '$imageurl', '$price', '$rating'");
        
    if ($query) {
        echo "<br>criar novo produto: funfou.";
    } else {
        echo "<br>criar novo produto: não funfou.";
    }
    
?>