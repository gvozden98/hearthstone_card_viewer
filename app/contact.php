<?php
require "../model/dbBroker.php";
require "../app/header.php";
require "../model/user.php";

if (isset($_POST["subject"]) && isset($_POST["message"]) && isset($_POST["message"])) {

    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $msg = $_POST["message"];
    $user_id = $_SESSION["user_id"];



    $odg = User::sendMessage($email, $subject, $msg, $user_id, $conn);
}


?>
<section class="section">
    <div class="container">
        <form method="POST" action="#" class="box">
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input" type="email" name="email" placeholder="bob.smith@gmail.com" <?php if (isset($_SESSION['user_email'])) {
                                                                                                            $mail = $_SESSION['user_email'];
                                                                                                            echo "value='$mail'";
                                                                                                        } ?> required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                </div>
            </div>

            <div class="field">
                <label class="label">Subject</label>
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" name="subject" required>
                    </div>
                </div>
            </div>

            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" name="message" required></textarea>
                </div>
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