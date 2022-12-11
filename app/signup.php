<?php
require "../model/dbBroker.php";
require "../app/header.php";
require "../model/user.php";

if (isset($_POST["remail"]) && isset($_POST["rpassword"])) {
    echo "it works!";
    $remail = $_POST["remail"];
    $rpass = $_POST["rpassword"];
    $reTypePass = $_POST["reTypePassword"];

    if (User::passMatch($rpass, $reTypePass) !== false) {
        header("location: ../app/signup.php?error=passdontmatch");
        exit();
    }
    if (User::emailExists($remail, $conn) !== false) {
        header("location: ../app/signup.php?error=emailtaken");
        exit();
    }
    $odg = User::createUser($remail, $rpass, $conn);
}

if (isset($_GET["error"])) {
    if ($_GET["error"] == "emailtaken") {
        echo
        "<script>
            alert('Email is taken');
        </script>";
    } else if ($_GET["error"] == "passdontmatch") {
        echo
        "<script>
            alert('Passwords dont match');
        </script>";
    }
}

?>

<section class="hero is-primary is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                    <img src="../resoruces/PikPng.com_raven-png_519404.png" alt="raven logo ">
                    <form method="POST" action="#" class="box" id="forma">
                        <div class="field">
                            <label for="" class="label">Email</label>
                            <div class="control has-icons-left">
                                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" name="remail" required>
                                <span class="icon is-small is-left">
                                    <i class="fa fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label for="" class="label">Password</label>
                            <div class="control has-icons-left">
                                <input type="password" placeholder="*******" class="input" name="rpassword" required>
                                <span class="icon is-small is-left">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label for="" class="label">Retype Password</label>
                            <div class="control has-icons-left">
                                <input type="password" placeholder="*******" class="input" name="reTypePassword" required>
                                <span class="icon is-small is-left">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <!-- <div class="field">
                            <label for="" class="checkbox">
                                <input type="checkbox">
                                Remember me
                            </label>
                        </div> -->
                        <div class="field">
                            <button type="submit" class="button is-black">
                                Sign up
                            </button>
                        </div>
                        <div class="field" id="lastBox">
                            <span>Already have an account?</span>
                            <a href="../app/login.php"><button type="button" class="button is-success">
                                    Log in
                                </button></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</body>
<script src="../scripts/navbarScript.js"></script>

</html>