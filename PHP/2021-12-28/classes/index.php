<?php

require_once 'Boat.php';
require_once 'Bus.php';
require_once 'Car.php';
require_once 'Motorcycle.php';
require_once 'Plane.php';
require_once 'Vehicle.php';

$veh = new Vehicle('Audi', 'Q7', 2018);
var_dump($veh);

$mot = new Motorcycle('Harley-Davidson', 'Sportster', 2014, 2);
var_dump($mot);