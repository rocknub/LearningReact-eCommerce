<?php

    include 'connectsql.php';
    
    $result = mysqli_query($con, "SELECT * FROM users");

    $i = 0;
    
    while($register = mysqli_fetch_assoc($result)) {
        $data[$i]['nome'] = $register['nome'];
        $data[$i]['email'] = $register['email'];
        $data[$i]['pw'] = $register['pw'];
        $i++;
    }

    $objectJSON = json_encode($data);
    echo $objectJSON;

?>