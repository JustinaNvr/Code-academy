<?php

$users = file_get_contents('https://randomuser.me/api/');

file_put_contents('data/users.json', $users);

$jsonString = file_get_contents('data/users.json');

$jsonDecoded = json_decode($jsonString, true);

$csvFileName = 'data/user.csv';

$fp = fopen($csvFileName, 'w');

foreach($jsonDecoded as $row){
    fputcsv($fp, $row);
}

fclose($fp);