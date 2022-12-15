<?php
require "../model/dbBroker.php";
require "../app/header.php";
if ($_SESSION['user_email']) {
    $email = $_SESSION['user_email'];
}
if (isset($_POST["changePassBtn"]) && isset($_POST['oldPass']) && isset($_POST['newPass']) && isset($_SESSION['user_email'])) {
    if (User::checkPass($email, $_POST['oldPass'], $conn)) {
        User::updatePassword($email, $newPass, $conn);
    } else {
        header("location: ../app/index.php?error=wrongpass");
        exit();
    }
}
if (isset($_POST["deleteAccBtn"]) && isset($_SESSION['user_email']) && isset($_POST['oldPass'])) {
    if (User::checkPass($email, $_POST['oldPass'], $conn)) {
        USER::deleteUser($email, $conn);
        $_SESSION['user_email'] = null;
    } else {
        header("location: ../app/index.php?error=wrongpass");
        exit();
    }
}
?>
?>

<section class="section">
    <div class="container">
        <form method="POST" action="#" class="box">
            <div class="field">
                <p class="is-size-1" style="font-family: 'Irish Grover';">Profile</p>
            </div>
            <div class="field">
                <p style="font-family: 'Irish Grover';" class="is-size-3">Email --> <?php if (isset($_SESSION['user_email'])) {
                                                                                        echo $email;
                                                                                    } ?></p>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                </div>
                <?php
                if (isset($_GET["error"])) {
                    if ($_GET["error"] == "none") {
                        echo '
                            <div class="field">
                                <p class="help content is-success is-large">Message sent!</p>
                            </div>';
                    }
                }
                ?>
            </div>
        </form>
    </div class="container">
</section class="section">
</body>
<script src="../scripts/navbarScript.js"></script>

</html>