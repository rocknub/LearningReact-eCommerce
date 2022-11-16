<?php

    include 'connectsql.php';
    
    $result = mysqli_query($con, "SELECT * FROM products");

    $i = 0;
    
    while($register = mysqli_fetch_assoc($result)) {
        $data[$i]['title'] = $register['title'];
        $data[$i]['imageurl'] = $register['imageurl'];
        $data[$i]['price'] = $register['price'];
        $data[$i]['rating'] = $register['rating'];
        $i++;
    }

    $objectJSON = json_encode($data);
    echo $objectJSON;

?>