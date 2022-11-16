<?php

class User
{
    public $id;
    public $email;
    public $password;

    public function __construct($id = null, $email = null, $password = null)
    {
        $this->id = $id;
        $this->email = $email;
        $this->password = $password;
    }

    public static function logInUser($usr, mysqli $conn)
    {
        $query = "SELECT * FROM users WHERE email='$usr->email' and password='$usr->password'";
        //echo $query;
        //konekcija sa bazom;
        return $conn->query($query);
    }
}
