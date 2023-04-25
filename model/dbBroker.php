<?php
$host = "localhost";
$db = "hearthstone_deck_builder";
$user = "root";
$pass = "";
//konekcija sa bazom
$conn = mysqli_connect($host, $user, $pass, $db);

if ($conn->connect_errno) {
    exit("Nauspesna konekcija: greska> " . $conn->connect_error . ", err kod>" . $conn->connect_errno);
}
