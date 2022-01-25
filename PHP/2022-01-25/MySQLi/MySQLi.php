<?php

$mysqli = new mysqli(
    'db-mariadb',

    getenv('MYSQL_USER'),
    getenv('MYSQL_PASSWORD'),
    getenv('MYSQL_DATABASE')
);

$result = $mysqli->query('SELECT + FROM users');

//$row = $result->fetch_assoc();

