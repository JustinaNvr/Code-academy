<?php

// Sukurkite kintamąjį $hello ir priskirkite jam reikšmę „hello“. Naudodami atskirus šios eilutės simbolius, ekrane atspausdinkite „h“, „e“, „o“.

$hello = 'hello';

$arr1 = str_split($hello);

echo "\"$arr1[0]\", \"$arr1[1]\", \"$arr1[4]\"";