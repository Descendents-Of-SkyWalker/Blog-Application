<?php
require('database.php');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $db = new Database();
    if ($db->connect()) {
        if ($_POST['action'] == 'blogs') {
            $db->query_for_blogs();
        }
        else if ($_POST['action'] == 'quotes') {
            $db->query_for_quotes();
        }
        else if ($_POST['action'] == 'insertBlog') {
            $db->insert_for_blog($_POST['mail'], $_POST['title'], $_POST['content']);
        }
        else if ($_POST['action'] == 'insertQuote') {
            $db->insert_for_quote($_POST['mail'], $_POST['content']);
        }
    }
}
