<?php

// Sukurkite kintamąjį $hello ir priskirkite jam reikšmę „hello“. Naudodami atskirus šios eilutės simbolius, ekrane atspausdinkite „h“, „e“, „o“.

$hello = 'hello';

$arr = str_split($hello);

echo "\"$arr[0]\", \"$arr[1]\", \"$arr[4]\"";