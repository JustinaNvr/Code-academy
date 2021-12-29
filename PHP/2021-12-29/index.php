<?php

require_once 'ArrayHelper.php';

$arr = [1, 2, 3, 4, 5];

$sum = ArrayHelper::ArraySum($arr);
$avg = ArrayHelper::ArrayAverage($arr);

var_dump($sum);
var_dump($avg);