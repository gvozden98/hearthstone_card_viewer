<?php
$host = "localhost";
$db = "dekovi";
$user = "root";
$pass = "admin";

$conn = new mysqli($host,$user,$pass,$db);


if ($conn->connect_errno){
    exit("Nauspesna konekcija: greska> ".$conn->connect_error.", err kod>".$conn->connect_errno);
}
