// Scrieti o functie care verifica daca un input este sau nu de tip string.
function is_string(string) {
  return typeof string === 'string';
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 3, 4, 0]));

// Scrieti o functie care verifica daca un string este gol sau nu.
function is_Blank(value) {
    return value === " ";
    }
    console.log(is_Blank(' '));
    console.log(is_Blank('abc'));

// Scrieti o functie care accepta ca input un string si il transforma intr-un array de cuvinte:
function string_to_array(value) {
    return value.split(" ");
  }
  console.log(string_to_array("Robin Singh"));

// Scrieti o functie care transforma un string in forma abreviata:
function abbrev_name(value) {
    var splitName = value.split(" ");
    splitName.pop(2);
    var result = value.slice(6, 7);
    return splitName + " " +  result + ".";
  }
  console.log(abbrev_name("Robin Singh"));

// Scrieti o functie care face prima litera a unui string de tip capital (litera mare):
function capitalize(firstLetter) {
  return firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1);
}
console.log(capitalize('js string exercises'));

// Scrieti o functie care elimina un nr specificat de caractere pornind de la inceputul string-ului:
function trucate_string(element, char_pos) {
  var a = element.substring(0, char_pos);
   return a;
 }
 console.log(trucate_string("Robin Singh", 4));

//  Scrieti o functie care specifica daca un caracter de la o anumita positie specificata
// dintr-un string este litera mare sau nu:
function isUpperCase(value, position) {
  return value.charAt(position).toUpperCase() === value.charAt(position);
  }
  console.log(isUpperCase('Js STRING EXERCISES', 0));

// Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:
// Nu am reusit sa-l fac corect..
function insert(firstString, secondString, pos) {
  var a = firstString.slice(0, pos);
   var c = firstString.slice(pos);
   var final = a + secondString + c; 
    return final;
  }
  console.log(insert('We are doing some exercises.'));
  console.log(insert('We are doing some exercises.', 'Java Script '));
  console.log(insert('We are doing some exercises.', 'JavaScript ', 18));

// Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
function remove_first_occurence(firstString, secondString) {
  return firstString.replace(secondString, "");
  }
  console.log(remove_first_occurence("The quick brown fox jumps over the lazy dog", 'the'));

  // function remove_first_occurence(firstString, secondString) {
  //   var index = firstString.indexOf(secondString);
  //   return firstString.slice(0, index) + firstString.slice(index + secondString.length);
  //   }
  //   console.log(remove_first_occurence("The quick brown fox jumps over the lazy dog", 'the'));

// Scrieti o functie care compara doua string-uri case-insensitive:
function compare_strings(stringA, stringB) {
  return stringA.toLowerCase() === stringB.toLowerCase();
}
console.log(compare_strings('abcd', 'AbcD'));

// Scrieti o functie care face primul caracter a unui string sa fie de tip uncapital:
function Uncapitalize(a) {
  return a.charAt(0).toLowerCase() + a.slice(1);
}
console.log(Uncapitalize('Js string exercises'));

 
