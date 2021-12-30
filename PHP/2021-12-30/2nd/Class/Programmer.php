<?php

require_once 'Person.php';

class Programmer extends Person
{
    public function greetings()
    {
        return "Hello, World! I'm {$this->getName()}.";
    }
}