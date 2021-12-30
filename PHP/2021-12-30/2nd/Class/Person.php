<?php

abstract class Person
{
    protected $name;

    function __construct($name)
    {
        $this->name = $name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public abstract function greetings();
}