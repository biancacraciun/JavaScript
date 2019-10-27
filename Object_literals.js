// In cazul asta am adaugat o variabila care stocheaza numele tarii producatoare.
// Pentru fiecare marca, am asociat o functie care da valoare variabilei corespunzatoare tarii(country_name);
// Am declarat functia corespunzatoare obiectului car_name(cars)() sau optiunea default.
// Apoi am precizat ce anume sa-mi returneze functia. Aici cu siguranta nu am facut corect.
// Ma interesa sa accesez o proprietate anume cu numele marcii si numele tarii si inca nu 
// imi dau seama cum sa fac asta.
  
var car = function(cars) {
    var country_name;
    var car_name = {
      'Mazda': function() {
        country_name = 'Japonia';
        },
      'Nissan': function() {
        country_name = 'Japonia';
        },
      'Mitsubishi': function() {
        country_name = 'Japonia';
        },
      'Hyundai': function() {
        country_name = 'Coreea de Sud';
        },
      'Bentley': function() {
        country_name = 'Regatul Unit';
        }, 
      'Rolls-Royce': function() {
        country_name = 'Regatul Unit';
        },
      'Alfa-Romeo': function() {
        country_name = 'Italia';
        },
       'Pagani': function() {
        country_name = 'Italia';
        },
        'default': 'Marca nu exista.'
    }
    car_name[cars] || car_name['default']() 
    return 'Marca ' + cars + ' este fabricata in ' + country_name + '.'
}
  
console.log(car('Mazda'))