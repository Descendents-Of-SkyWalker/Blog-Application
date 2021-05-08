<?php
    // define("DB_HOST", "localhost:3306");
    // define("DB_USER", "root");
    // define("DB_PASSWORD", "");
    // define("DB_DATABASE", "Vibranium");
    header("Access-Control-Allow-Origin: *");

    // $db = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
    // if (mysqli_connect_errno())
    //     echo "Database failed";
    class Database{
        private $host = "localhost:3306";
        private $user = "root";
        private $dbname = "Vibranium";
        private $dbpswd = "";
        public $db;

        function connect(){
            $this->db = mysqli_connect($this->host, $this->user, $this->dbpswd, $this->dbname);
            if (mysqli_connect_errno())
                return FALSE;
            else
                return TRUE;
        }
        function insert_for_signup($arr){
            $query = "INSERT INTO users values ";
            $values = "('" .$arr['name'] . "','". $arr['age'] 
            . "','" . $arr['gender'] . "','" . $arr['bio']. "','" . $arr['username']
            . "','" . $arr['mail_id'] . "','" . $arr['password'] . "','" . $arr["state"]
            . "','" . $arr['city'] . "','" . $arr['pin_code'] . "','" . $arr['address']
            . "','" . $arr['Interests'] . "')";
            // echo $query . $values;
            if (mysqli_query($this->db, ($query . $values))){
                mysqli_close($this->db);
                return TRUE;
            }
            else
                return FALSE;
        }
    }
    
?>