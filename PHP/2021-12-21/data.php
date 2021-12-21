<?php

$handle = fopen('https://randomuser.me/api/', 'r');

if (FALSE === $handle) {
    exit('Failed to open stream to URL');
}

$contents = '';

$i = 0;

while (!feof($handle)) {
    $i++;

    $chunk = fread($handle, 250);

    $contents .= $chunk;

    if (strpos($contents, "ga('create', 'UA-5421911-1', 'auto')") !== FALSE) {
        var_dump($chunk);

        break;
    }
}

fclose($handle);

file_put_contents('data/users.json', $contents);



//An example JSON string.
$jsonString = file_get_contents('data/users.json');

//Decode the JSON and convert it into an associative array.
$jsonDecoded = json_decode($jsonString, true);

//Give our CSV file a name.
$csvFileName = 'data/user.csv';

//Open file pointer.
$fp = fopen($csvFileName, 'w');

//Loop through the associative array.
foreach((array) $jsonDecoded as $row){
    //Write the row to the CSV file.
    fputcsv($fp, $row);
}

//Finally, close the file pointer.
fclose($fp);