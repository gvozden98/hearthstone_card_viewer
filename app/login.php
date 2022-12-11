<?php
require "../model/dbBroker.php";
require "../app/header.php";
require "../model/user.php";

if (isset($_POST['email']) && isset($_POST['password'])) {
    $uemail = $_POST['email'];
    $upass = $_POST['password'];
    //$conn = new mysqli(); /// pregazena konekcija iz dbBrokera;
    $korisnik = new User($uemail, $upass);
    //$odg = $korisnik->logInUser($uemail, $upass, $conn);
    $odg = User::logInUser($korisnik, $conn); //pristup statickim funkcijama preko klase

    if ($odg->num_rows == 1) {
        $_SESSION['user_id'] = $odg->fetch_assoc()['user_id'];
        echo $_SESSION['user_id'];
        $_SESSION['user_email'] = $korisnik->email;
        header('Location: ../app/index.php?loginok');
        exit();
    } else {
        header('Location: ../app/login.php?error=loginfailed');
        exit();
    }
}
?>

<section class="hero is-primary is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                    <img src="../resoruces/PikPng.com_raven-png_519404.png" alt="raven logo ">
                    <form method="POST" action="#" class="box">
                        <div class="field">
                            <label for="" class="label">Email</label>
                            <div class="control has-icons-left">
                                <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" name="email" required>
                                <span class="icon is-small is-left">
                                    <i class="fa fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label for="" class="label">Password</label>
                            <div class="control has-icons-left">
                                <input type="password" placeholder="*******" class="input" name="password" required>
                                <span class="icon is-small is-left">
                                    <i class="fa fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <label for="" class="checkbox">
                                <input type="checkbox">
                                Remember me
                            </label>
                        </div>
                        <div class="field">
                            <button type="submit" class="button is-success">
                                Login
                            </button>
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