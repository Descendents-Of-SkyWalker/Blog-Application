<?php
    require('database.php');
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $db = new Database();
        if ($db->connect()){
            foreach($_POST as $x => $x_value) {
                $x_value = $db->db -> real_escape_string($x_value);
                if ($x == 'password'){
                    $x_value = crypt($x_value,'$6$rounds=5000');
                }
                echo $x . " = " . $x_value . '\n';
            }
            // if (){
            //     if ($db->insert_for_signup($_POST))
            //         echo "Data inserted";
            //     else
            //         echo "data not inserted";
            // };
        }
    }
?>