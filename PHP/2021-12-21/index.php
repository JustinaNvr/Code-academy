<?php
// Panaudojus https://randomuser.me API parodykite vartotojo duomenis EXCEL programoje naudodami funkcijas skirtas darbui su failais


$source = "https://randomuser.me/api/?format=csv";

$data = file_get_contents($source);

$myFile = fopen("data/user_.csv", "w");

fwrite($myFile, $data);

fclose($myFile);