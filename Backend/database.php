<?php
    // define("DB_HOST", "localhost:3306");
    // define("DB_USER", "root");
    // define("DB_PASSWORD", "");
    // define("DB_DATABASE", "Vibranium");
    header("Access-Control-Allow-Origin: *");

    // $db = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
    // if (mysqli_connect_errno())
    //     echo "Database failed";
    // else
        // echo "database ready";

    if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        echo "data arrived";
        
        // $data = $_POST['signup_data'];
        // if (empty($data))
        //     echo "Data field empty";
        // else{
        //     echo "data recieved";
        // }
        print_r($_POST);
        $data = $_POST['signup_data'];
        print_r($data);
    }
?>