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
                        <div class="field">
                            <p style="font-family: 'Irish Grover';" class="is-size-3"><span class="tag is-link is-size-4">Email--></span>
                                <?php if (isset($_SESSION['user_email'])) {
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
                        <!-- <div class="field">
                        <label class="label" for="newPass">Password:</label>
                        <input class="input is-danger block" type="text" placeholder="*******" name="password">
                        <button class="button is-danger" type="submit" name="btnDeleteAcc">Delete</button>
                    </div> -->
                    </div>
                </form>
            </div>

            <div class="column"></div>
        </div>

    </div class="container">
</section class="section">
</body>
<script src="../scripts/navbarScript.js"></script>
<script src="../scripts/profileScript.js"></script>

</html>