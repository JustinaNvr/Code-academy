<?php

// Sukurti masyvą, kuris aprašytų knygos duomenis: title, author, year, genre
// Sukurti masyvą, kurio elementai būtų masyvai aprašantys knygas. Minimum 3.
// Išvesti visus knygų masyvo elementus su var_dump;
// Išvesti visus knygų masyvo elementus lentele;
// Išvesti visų visų knygų metų vidurkį;

$books = ['title', 'author', 'year', 'genre'];

$books = [
    'title' => [
        '1Q84', 'Frankenstein', 'Dracula',
    ],
    'author' => [
        'Haruki Murakami', 'Mary Wollstonecraft Shelley', 'Bram Stoker'
    ],
    'year' => [
        '2013', '1818', '1897'
    ],
    'genre' => [
        'novel', 'horror novel', 'horror fantasy novel'
    ]
];

var_dump($books);

function arrayToTable($books)
{
    echo '<table>';

    // Table header
    foreach ($books as $key=>$value) {
        echo '<th>'.$key.'</th>';
    }

    // Table body
    foreach ($books as $value) {
        echo '<tr>';
        foreach ($value as $element) {
            echo '<td>'.$element.'</td>';
        }
        echo '</tr>';
    }
    echo '</table>';}

var_dump(arrayToTable($books));


function average($books)
{
    return round(array_sum($books['year']) / count($books['year']));
}
var_dump(average($books));