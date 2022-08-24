let baseFee = 40;
let cities = ["Guindy", "Besant Nagar", "Velachery", "thirvanmiyur"];
let uberRates = [5, 8, 10, 12];

let customerName = "Rithik"  ;
let customerCity = "Velachery";
console.log("Hello", customerName+ ", welcome to the Uber Rate Program")
//function that will getRate based on customerCity
function getRate(customerCity) {
 
  function uberRate(customerCity, index) {
       let finalRate = (uberRates[index]) * baseFee;
    return finalRate;
  }
  
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}
getRate(customerCity);