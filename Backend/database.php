<?php
    header("Access-Control-Allow-Origin: *");
    class Database{
        private $host = "localhost:3307";
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
        function query_for_blogs(){
            $query = 'select * from blogs';
            $name = [];
            $title = [];
            $content = [];
            $res = mysqli_query($this->db, $query);
            while($row = mysqli_fetch_assoc($res)){
                array_push($name, $row['name']);
                array_push($title, $row['title']);
                array_push($content, $row['content']);
            }
            $printer_arr = array("name"=>$name, "title"=>$title, "content"=>$content);
            echo json_encode($printer_arr);
        }
        function query_for_quotes(){
            $query = 'select * from quotes';
            $name = [];
            $content = [];
            $res = mysqli_query($this->db, $query);
            while($row = mysqli_fetch_assoc($res)){
                array_push($name, $row['name']);
                array_push($content, $row['content']);
            }
            $printer_arr = array("name"=>$name, "content"=>$content);
            echo json_encode($printer_arr);
        }
        function insert_for_blog($mail, $title, $content){
            $query_1 = 'select name from users where mail_id=' . "'". $mail ."'";
            $res = mysqli_query($this->db, $query_1);
            $name = mysqli_fetch_assoc($res)['name'];
            $query_2 = "insert into blogs values('" . $name . "','" . $title . "','" . $content . "')";
            if(mysqli_query($this->db, $query_2)){
                echo 'true';
            }
            else{
                echo mysqli_error($this->db);
            }
        }
        function insert_for_quote($mail, $content){
            $query_1 = 'select name from users where mail_id=' . "'". $mail ."'";
            $res = mysqli_query($this->db, $query_1);
            $name = mysqli_fetch_assoc($res)['name'];
            $query_2 = 'insert into quotes values("' . $name .  '","' .  $content . '")';
            if(mysqli_query($this->db, $query_2)){
                echo 'true';
            }
            else{
                echo mysqli_error($this->db);
            }
        }
        function query_for_details($mail){
            $query = 'select * from users where mail_id=' . '"' . $mail . '"';
            $res = mysqli_query($this->db, $query);
            $data = mysqli_fetch_assoc($res);
            echo json_encode($data);
        }
    }
    
?>