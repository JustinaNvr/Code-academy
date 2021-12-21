<?php
// Panaudojus https://randomuser.me API parodykite vartotojo duomenis EXCEL programoje naudodami funkcijas skirtas darbui su failais


//$file = file_get_contents('https://randomuser.me/api/');
//
//$user = json_decode($file, true);
//
//file_put_contents('data/users.json', json_encode($user['result']));
//
//$data = file_get_contents('data/users.json');
//$newData = json_decode($data, true);
//
//$csvFileName = 'data/user.csv';
//
//$fp = fopen($csvFileName, 'w');
//
//foreach($newData as $row){
//    fputcsv($fp, $row);
//}
//
//fclose($fp);

$source = "https://randomuser.me/api/?format=csv";

$data = file_get_contents($source);

$myFile = fopen("data/user_.csv", "w");

fwrite($myFile, $data);

fclose($myFile);