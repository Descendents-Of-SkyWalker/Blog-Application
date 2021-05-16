<?php
    require('database.php');
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $db = new Database();
        if ($db->connect()){
            if ($_POST["action"] == "signup"){
                $input_data = array();
                    foreach($_POST as $x => $x_value) {
                        $x_value = $db->db -> real_escape_string($x_value);
                        if ($x == 'password'){
                        $x_value = crypt($x_value,'$6$rounds=5000');
                        }
                        $input_data[$x] = $x_value;
                    }
            print_r($input_data);
            if ($db->insert_for_signup($input_data))
                echo "true";
            else
                echo "false";
            }
            elseif($_POST["action"] == "login"){
                $input_data = array();
                foreach($_POST as $x => $x_value) {
                    $x_value = $db->db -> real_escape_string($x_value);
                    if ($x == 'password'){
                    $x_value = crypt($x_value,'$6$rounds=5000');
                    }
                    $input_data[$x] = $x_value;
                }
                if ($db->validate_data($input_data, 0)){
                    echo "true";
                }
                else
                    echo "false";
            }
        }
    }
?>