<?php

class User
{
    public $id;
    public $email;
    public $password;

    public function __construct($email = null, $password = null)
    {

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

    public static function createUser($email, $password, mysqli $conn)
    {
        $sql = "INSERT INTO users (email,password) VALUES (?,?)";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("location: ../app/signup.php?error=stmtfailed");
            exit();
        }
        mysqli_stmt_bind_param($stmt, "ss", $email, $password);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
        header("location: ../app/signup.php?error=none");
        exit();
    }

    public static function passMatch($pass, $repass)
    {
        $result = false;
        if ($pass !== $repass) {
            $result = true;
        }
        return $result;
    }

    public static function emailExists($email, mysqli $conn)
    {
        $sql = "SELECT * FROM users WHERE email=?;";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("location: ../app/signup.php?error=stmtfailed");
            exit();
        }
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);

        $resultData = mysqli_stmt_get_result($stmt);
        if ($row = mysqli_fetch_assoc($resultData)) {
            # code...
        } else {
            $result = false;
            return $result;
        }

        mysqli_stmt_close($stmt);
    }
    public static function sendMessage($email, $subject, $msg, $user_id, mysqli $conn)
    {
        $sql = "INSERT INTO messages (subject,msg,user_id,email) VALUES (?,?,?,?)";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            header("location: ../app/contact.php?error=stmtfailed");
            exit();
        }
        mysqli_stmt_bind_param($stmt, "ssss", $subject, $msg, $user_id, $email);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
        header("location: ../app/contact.php?error=none");
        exit();
    }
}
