<?php

    include 'connectsql.php';

    $title = $_POST['title'];
    $imageurl = $_POST['imageurl'];
    $price = $_POST['price'];
    $rating = $_POST['rating'];

    $query = mysqli_query($con, "INSERT INTO products (title, imageurl, price, rating) VALUES ('$title', '$imageurl', '$price', '$rating')");

    if($query) {
        echo("Ok");
    } else {
        echo("Error");
    }

?>