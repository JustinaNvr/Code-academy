<?php

//Sukurkite masyvą $arr iš reikšmių: '!', 'Hello', 'world'. Naudodami sukurtą masyvą priskirti reikšme 'Hello, world!' naujam kintamajam ir atspausdinkite jį ekrane.

$arr = ['!', 'Hello', 'world'];

$hello = "{$arr[1]}, {$arr[2]}{$arr[0]}";

echo "'$hello'";