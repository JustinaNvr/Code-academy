<?php
require_once 'upload.php';

$name = !empty($_POST['name']) ? $_POST['name'] : 'Vardenis';
$surname = !empty($_POST['surname']) ? $_POST['surname'] : 'Pavardenis';
$city = !empty($_POST['city']) ? $_POST['city'] : 'Nenurodytas';;

if (isset($_POST['lang'])) {
    $prog_lan = 'Programavimo kalba: ' . implode(", ", $_POST['lang']);
} else {
    $prog_lan = 'Programavimo kalba: Nenurodytos';
}
$additional = !empty($_POST['additional']) ? $_POST['additional'] : null;

$parameters = [
    isset($_POST['name']),
    isset($_POST['surname']),
    isset($_POST['city'])
];

!in_array(false, $parameters) ? $header = $footer = true : $header = $footer = false;