<?php

require_once 'Vehicle.php';

class Boat extends Vehicle
{
    public function getWheelsNumberText()
    {
//        return parent::getWheelsNumberText(); // TODO: Change the autogenerated stub
        return 'Are you serious?';
    }
    public function getType()
    {
        return 'Cruiser';
    }
    public function getFuelType()
    {
        return [2];
    }
}