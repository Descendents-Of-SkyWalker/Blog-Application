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
        function validate_data($arr, $case){
            $email = $arr['mail_id'];
            switch($case){
                case 0:
                    $password = $arr['password'];
                    $query = "select * from users ";
                    $value = "where mail_id='" . $email . "'"
                    . " and " . "password='" . $password . "'";
                    $res = mysqli_query($this->db, ($query . $value));
                    if ($res->num_rows > 0){
                        mysqli_close($this->db);
                        return TRUE;
                    }
                    else
                        return FALSE;
                case 1:
                    $query = "select * from users ";
                    $value = "where mail_id='" . $email . "'";
                    $res = mysqli_query($this->db, ($query . $value));
                    if ($res->num_rows > 0){
                        mysqli_close($this->db);
                        return TRUE;
                    }
                    else
                        return FALSE;
            }
        }
    }
    
?>