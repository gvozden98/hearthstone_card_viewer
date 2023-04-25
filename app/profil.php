<?php
require "../model/dbBroker.php";
require "../app/header.php";

//proveri da li su sve promenljive postavljenje
if (isset($_POST["btnChangePass"]) && isset($_POST['oldPassword']) && isset($_POST['newPassword']) && isset($_SESSION['user_email'])) {
    if (User::checkPass($email, $_POST['oldPassword'], $conn)) { //proveri da li se sifre slazu
        User::updatePassword($email, $_POST['newPassword'], $conn); //azuriraj sifru
    } else {
        header("location: ../app/profil.php?error=wrongpass");
        exit();
    }
}
if (isset($_POST["btnDeleteAcc"]) && isset($_SESSION['user_email']) && isset($_POST['oldPassword'])) {
    if (User::checkPass($email, $_POST['oldPassword'], $conn)) {
        User::deleteUser($email, $conn);
        $_SESSION['user_email'] = null;
        session_unset(); //stavi sve promenljive u sesiji na null
        session_destroy(); //unisti sve podatke iz sesije
    } else {
        header("location: ../app/profil.php?error=wrongpass");
    }
    exit();
}
?>

<section class="section">
    <div class="container">
        <div class="columns">
            <div class="column"></div>
            <div class="column is-three-fifths">
                <form method="POST" action="#" class="box">
                    <div id="divForm">
                        <div class="field">
                            <p class="is-size-1" style="font-family: 'Irish Grover';">Profile</p>
                        </div>
                        <hr>
                        <div class="field">
                            <p style="font-family: 'Irish Grover';" class="is-size-3"><span class="tag is-link is-size-4">Email--></span>
                                <?php if (isset($email)) {
                                    echo $email;
                                } ?></p>
                        </div>

                        <div class="field is-grouped" id="btnDiv">
                            <div class="control">
                                <button class="button is-link is-inverted" name="btnOpenChangePass" id="btnOpenChangePass">Change password?</button>
                            </div>
                            <div class="control">
                                <button class="button is-danger is-inverted" name="btnOpenDeleteAcc" id="btnOpenDeleteAcc">Delete account?</button>
                            </div>
                        </div>
                    </div>
                </form>

                <?php
                if (isset($_GET["error"]) && $_GET["error"] === "wrongpass") {
                    echo
                    '<div class="notification is-danger">
                    <button class="delete"></button>
                        Wrong Password!
                    </div>';
                }
                ?>
            </div>

            <div class="column"></div>
        </div>

    </div class="container">
</section class="section">
</body>
<script src="../scripts/navbarScript.js"></script>
<script src="../scripts/profileScript.js"></script>

</html>