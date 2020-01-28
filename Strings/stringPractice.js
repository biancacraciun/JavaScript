// Scrieti o functie care verifica daca un input este sau nu de tip string.

function is_string (string) {
  return typeof string === 'string';
};

is_string('w3resource');
is_string([1, 2, 3, 4, 0]);

// Scrieti o functie care verifica daca un string este gol sau nu.

function is_Blank (value) {
  return value === " ";
};

is_Blank(' ');
is_Blank('abc');

// Scrieti o functie care accepta ca input un string si il transforma intr-un array de cuvinte:

function string_to_array (value) {
  return value.split(" ");
};

string_to_array("Robin Singh");

// Scrieti o functie care transforma un string in forma abreviata:

function abbrev_name (value) {
  var split_Name = value.split(" ");
  return split_Name[0] + " " + split_Name[1].charAt(0) + ".";
};

abbrev_name("Robin Singh");

// Scrieti o functie care face prima litera a unui string de tip capital (litera mare):

function capitalize (firstLetter) {
  return firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1);
};

capitalize('js string exercises');

// Scrieti o functie care elimina un nr specificat de caractere pornind de la inceputul string-ului:

function trucate_string (element, char_pos) {
  return element.substring(0, char_pos);
};

trucate_string("Robin Singh", 4);

//  Scrieti o functie care specifica daca un caracter de la o anumita positie specificata
// dintr-un string este litera mare sau nu:

function isUpperCase (value, position) {
  return value.charAt(position).toUpperCase() === value.charAt(position);
};

isUpperCase('Js STRING EXERCISES', 0);


// Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:

function insert(firstString, secondString, pos) {
  return firstString.slice(0, pos) + secondString + firstString.slice(pos); 
};

insert('We are doing some exercises.');
insert('We are doing some exercises.', 'Java Script ');
insert('We are doing some exercises.', 'JavaScript ', 18);

// Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:

function remove_first_occurence(first_String, second_String) {
  return first_String.replace(second_String, "");
};

remove_first_occurence("The quick brown fox jumps over the lazy dog", 'the');

// Scrieti o functie care compara doua string-uri case-insensitive:

function compare_strings(string_A, string_B) {
  return string_A.toUpperCase() === string_B.toUpperCase();
};

compare_strings('abcd', 'AbcD');

// Scrieti o functie care face primul caracter a unui string sa fie de tip uncapital:

function Uncapitalize(a) {
  return a.charAt(0).toLowerCase() + a.slice(1);
};

Uncapitalize('Js string exercises');