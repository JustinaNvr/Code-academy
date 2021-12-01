<?php

// "Nupieškite" tokio tipo piramidę ekrane dviem skirtingais būdais. :
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


//echo 1, '<br>', str_repeat(2, 2), '<br>', str_repeat(3, 3), '<br>', str_repeat(4, 4), '<br>', str_repeat(5, 5), '<br>', str_repeat(6, 6), '<br>',str_repeat(7, 7), '<br>', str_repeat(8, 8), '<br>', str_repeat(9, 9), '<br>';


$i = 1;
while ($i<10){
    echo str_repeat($i++, $i-1), '<br>';
}


for ($i = 1; $i < 10; $i)
{
    for ($j = 1; $j <= $i; $j++ )
    {
        echo $i."";
    }
    $i++;
    echo '<br>';
}
