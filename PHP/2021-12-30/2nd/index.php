<?php

require_once 'Class/Programmer.php';
require_once 'Class/Student.php';
require_once 'Class/Teacher.php';

$progr = new Programmer('Justina');
$stud = new Student('Justina');
$teach = new Teacher('Justina');

var_dump($progr->greetings());
var_dump($stud->greetings());
var_dump($teach->greetings());