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
        return $conn->query($query);
        //konekcija sa bazom;

    }

    public static function createUser($email, $password, mysqli $conn)
    {
        $sql = "INSERT INTO users (email,password) VALUES (?,?)";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            header("location: ../app/signup.php?error=stmtfailed");
            exit();
        }

        $stmt->bind_param("ss", $email, $password);
        $stmt->execute();
        $stmt->close();
        header("location: ../app/login.php?error=none&email={$email}");
        $conn->close();
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
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            header("location: ../app/signup.php?error=stmtfailed");
            exit();
        }
        $stmt->bind_param("s", $email);
        $stmt->execute();

        header("location: ../app/signup.php?error=none");

        $resultData = $stmt->get_result();
        if ($resultData->fetch_assoc()) {
            $stmt->close();
            $conn->close();
            $result = true;
            return $result;
        } else {
            $stmt->close();
            $result = false;
            return $result;
        }
    }
    public static function sendMessage($email, $subject, $msg, $user_id, mysqli $conn)
    {
        $sql = "INSERT INTO messages (subject,msg,user_id,email) VALUES (?,?,?,?)";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            header("location: ../app/signup.php?error=stmtfailed");
            exit();
        }
        $stmt->bind_param("ssss", $subject, $msg, $user_id, $email);
        $stmt->execute();
        $stmt->close();
        header("location: ../app/contact.php?error=none");
        $conn->close();
    }
    public static function deleteUser($email, mysqli $conn)
    {
        $sql = "DELETE FROM users WHERE email=?;";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            header("location: ../app/signup.php?error=stmtfailed");
            exit();
        }
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->close();
        header("location: ../app/index.php?error=none");
        $conn->close();
    }
    public static function updatePassword($email, $newpass, mysqli $conn)
    {
        $sql = "UPDATE users SET password=? WHERE email=?;";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            header("location: ../app/index.php?error=stmtfailed");
            exit();
        }
        $stmt->bind_param("ss", $newpass, $email);
        $stmt->execute();
        $stmt->close();
        header("location: ../app/profil.php?error=none");
        $conn->close();
    }
    public static function checkPass($email, $oldpass, mysqli $conn)
    {
        $sql = "SELECT password FROM users WHERE email=?;";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            header("location: ../app/index.php?error=stmtfailed");
            exit();
        }
        $stmt->bind_param("s", $email);
        $stmt->execute();

        $resultData = $stmt->get_result();
        $stmt->close();
        $row = $resultData->fetch_assoc();
        if ($row["password"] === $oldpass) {
            return true;
        }
        return false;
    }
}
