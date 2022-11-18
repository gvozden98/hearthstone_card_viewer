<?php
session_start();
?>
<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>HS - DeckBuilder</title>
    <link rel="icon" href="../resoruces/Hearthstone-Logo-PNG-Image.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
    <link rel="stylesheet" href="../styles/style.css" />
    <script src="https://kit.fontawesome.com/d6125651bb.js" crossorigin="anonymous"></script>
</head>

<body class="has-navbar-fixed-top">
    <nav class="navbar is-fixed-top " role="navigation" aria-label="main navigation">
        <div class="navbar-brand has-background-primary">
            <a class="navbar-item" href="../app/index.php">
                <img src="../resoruces/Hearthstone-Logo-PNG-Image.png">
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
                <div class="navbar-item has-dropdown" id="decksDiv">
                    <a class="navbar-link" id="decks">
                        Decks
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            New deck
                        </a>
                        <a class="navbar-item">
                            Edit a deck
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            View decks
                        </a>
                    </div>
                </div>
                <a class="navbar-item" id="contact">
                    Contact
                </a>
                </a>
            </div>
        </div>

        <div class="navbar-end has-background-primary">
            <div class="navbar-item">
                <div class="buttons">

                    <?php
                    if (isset($_SESSION['user_id']) && isset($_SESSION['user_email'])) {
                        $mail = $_SESSION['user_email'];
                        echo "
                        <div class='navbar-item'>
                            <p id='mailFont'>$mail</p>
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