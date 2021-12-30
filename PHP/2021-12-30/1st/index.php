<?php
//Paveldėjimas + Inkapsuliacija
//
//Sukurkite klasę User su šiom viešais neprienamom savybėm: name, age ir viešai prieinamais metodas: setName, getName, setAge, getAge.
//Sukurkite klasę Worker, kuri paveldės User klasę ir įneštų papildomą viešai neprienamą savybę salary ir viešai prieinamus metodus getSalary ir setSalary.
//Sukurkite klasę Student, kuri paveldės User klasę ir įneštų papildomas viešais neprienamas savybes stipendija, kursas bei jiems reikalingu metodus
//Sukurkite klasę Driver, kuri paveldėtų Worker klasę ir įneštų papildomas savybes: vairavimo patirtis, vairavimo kategorija (A, B, C).
//
//Sukurkite vieną studentą ir viena vairuotoją ir užduokite jiems visas reikiamas savybes. Vardą ir amžių nustatykite sukurimo metu
//

require_once 'Class/Student.php';
require_once 'Class/Driver.php';

$stud = new Student('Jonas', 25);
$stud->setScholarship(750);
$stud->setCourse('3rd');

$driv = new Driver('Antanas', 35);
$driv->setSalary(2000);
$driv->setExperience('17 years');
$driv->setCategory('A and B');


var_dump($stud);
var_dump($driv);