<?php

session_start();
session_unset();
session_destroy();
header('Location: ../app/index.php');
exit();
