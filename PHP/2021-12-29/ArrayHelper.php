<?php

//Sukukite ArrayHelper klasę su 2 statiniais metodais, kurie galetų apskaičiuoti duoto masyvo sumą arba vidurkį. Panaudokite vieną statinį metodą kitame.

class ArrayHelper
{
    public static function ArraySum($arr)
    {
        return array_sum($arr);
    }
    public static function ArrayAverage($arr)
    {
        return self::ArraySum($arr) / count($arr);
    }
}