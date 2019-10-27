// Asta nu mi-a iesit sub nici o forma. Am stat cateva ore bune, insa ceva nu-mi reuseste.
// M-am gandit ca am un obiect car_name intr-o functie. Pentru fiecare marca, am asociat o functie
// care returneaza tara producatoare.

var car = function(cars) {
    var car_name = {
      Mazda: function() {
        return 'Marca Mazda este fabricata in Japonia.';
      },
      Mitsubishi: function() {
        return 'Marca Mitsubishi este fabricata in Japonia.';
      },
      Nissan: function() {
        return 'Marca Nissan este fabricata in Japonia.';
      },
      Hyundai: function() {
        return 'Marca Hyundai este fabricata in Coreea de Sud.';
      },
      Bentley: function() {
        return 'Marca Bentley este fabricata in Regatul Unit.';
      },
      'Rolls-Royce': function() {
        return 'Marca Rolls-Royce este fabricata in Regatul Unit.';
      },
      'Alfa-Romeo': function() {
        return 'Marca Alfa-Romeo este fabricata in Italia.';
      },
      Pagani: function() {
        return 'Marca Pagani este fabricata in Italia.';
      },
      default: 'Marca nu exista!'
    }
  
    return car_name[cars] || car_name['default']()
}
  
console.log(car('Mazda'))
  
// In cazul asta am adaugat o variabila care trimite la numele tarii producatoare.
// Pentru fiecare marca, am asociat o functie care returneaza faptul ca numele tarii 
// este 'x'.
// Am declarat functia corespunzatoare obiectului car_name(cars)() sau optiunea default.
// Apoi am precizat ce anume sa-mi returneze functia. Aici cu siguranta nu am facut corect.
// Ma interesa sa accesez o proprietate anume cu numele marcii si numele tarii si inca nu 
// imi dau seama cum sa fac asta.
  
var car = function(cars) {
    var country_name;
    var car_name = {
      Mazda: function() {
        return country_name === 'Japonia';
        },
      Nissan: function() {
        return country_name === 'Japonia';
        },
      Mitsubishi: function() {
        return country_name === 'Japonia';
        },
      Hyundai: function() {
        return country_name === 'Coreea de Sud';
        },
      Bentley: function() {
        return country_name === 'Regatul Unit';
        }, 
      'Rolls-Royce': function() {
        return country_name === 'Regatul Unit';
        },
      'Alfa-Romeo': function() {
        return country_name === 'Italia';
        },
       Pagani: function() {
        return country_name === 'Italia'
        },
      default: 'Marca nu exista'
    }

    car_name[cars] || car_name['default']()
    return 'Marca ' + car_name + ' este fabricata in ' + country_name
}
  
console.log(car('Mazda'))