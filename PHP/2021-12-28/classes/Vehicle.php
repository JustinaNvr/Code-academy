<?php

class Vehicle
{
    private $make;
    private $model;
    private $year;

    function __construct($make, $model, $year)
    {
        $this->make   = $make;
        $this->model  = $model;
        $this->year   = $year;
    }

    public function setWheelsNumber($wheels)
    {
        $this->wheels = $wheels;
    }

    public function introduction()
    {
        return $this->make . $this->model;
    }

    public function getAge()
    {
        return date("Y") - $this->year;
    }

    public function getAgeText()
    {
        if ($this->getAge() <= 10) {
            return '10 years or newer';
        } else {
             return '11 years or older';
        }
    }

    public function getWheelsNumber()
    {
        return number_format($this->setWheelsNumber() || 0);
    }

    public function getWheelsNumberText()
    {
        return $this->introduction() . ' has ' . $this->getWheelsNumber() . ' wheels.';
    }

    public function getFuelType()
    {
        throw new Exception('Fuel type not found.');
    }
}
