<?php
require "../app/header.php";
require "../dbBroker.php";
require "../model/user.php";

session_start();
if (isset($_POST['username']) && isset($_POST['password'])) {
    $uemail = $_POST['email'];
    $upass = $_POST['password'];

    // $conn = new mysqli() /// pregazena konekcija iz dbBrokera;
    $korisnik = new User(1, $uemail, $upass);
    // $odg = $korisnik->logInUser($uemail, $upass, $conn);
    $odg = User::logInUser($korisnik, $conn); //pristup statickim funkcijama preko klase

    if ($odg->num_rows == 1) {
        echo `
        <script>
            console.log("Uspešno ste se prijavili");
        </script>
        `;
        $_SESSION['user_id'] = $korisnik->id;
        header('Location: ../app/index.php');
        exit();
    } else {
        echo `
    <script>
        console.log("Niste se prijavili!");
    </script>
    `;
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

</html>