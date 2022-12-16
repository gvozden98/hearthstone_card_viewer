<?php
session_start();
require "../model/user.php";
require "../model/dbBroker.php";
if (isset($_SESSION['user_email'])) {
    $email = $_SESSION['user_email'];
}
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>HS - Card Viewer</title>
    <script src="../resoruces/config.js"></script>
    <link rel="icon" href="../resoruces/Hearthstone-Logo-PNG-Image.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Zen+Dots&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
    <link rel="stylesheet" href="../styles/style.css" />
    <script src="https://kit.fontawesome.com/d6125651bb.js" crossorigin="anonymous"></script>
</head>

<body class="has-navbar-fixed-top">
    <nav class="navbar is-fixed-top " role="navigation" aria-label="main navigation">
        <div class="navbar-brand has-background-primary">
            <a class="navbar-item" href="../app/index.php">
                <img src="../resoruces/Hearthstone-Logo-PNG-Image.png" alt="HS-logo">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu has-background-primary">
            <div class="navbar-start">
                <a class="navbar-item" id="home" href="../app/index.php">
                    Home
                </a>
                <a class="navbar-item" id="contact" href="../app/contact.php">
                    Contact
                </a>
                <?php
                if (isset($email)) {
                    echo '<a class="navbar-item" id="profile" href="../app/profil.php">Profile</a>';
                }
                ?>

            </div>
        </div>

        <div class="navbar-end has-background-primary">
            <div class="navbar-item">
                <div class="buttons">

                    <?php
                    if (isset($_SESSION['user_email'])) {


                        echo "
                        <div class='navbar-item'>
                            <p id='mailFont'>$email</p>
                        </div>
                        <a class='button is-black' href='../app/logout.php'>
                            <strong>Logout</strong>
                        </a>
                        ";
                    } else {
                        echo
                        '
                        <a class="button is-black" href="../app/signup.php">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light" href="../app/login.php">
                            Log in
                        </a>';
                    }
                    ?>

                </div>
            </div>
        </div>
        </div>
    </nav>