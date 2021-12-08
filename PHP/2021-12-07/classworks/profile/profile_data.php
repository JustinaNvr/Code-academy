<?php
require_once 'upload.php';

$name = 'Vardas: ' . $_POST['name'];
$surname = 'Pavardė: ' . $_POST['surname'];
$city = 'Miestas: ' . $_POST['city'];

if (isset($_POST['lang'])) {
    $prog_lan = 'Programavimo kalba: ' . implode(", ", $_POST['lang']);
} else {
    $prog_lan = 'Nenurodytos';
}
$additional = 'Papildoma informacija: ' . $_POST['additional'];