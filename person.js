class Person{
    constructor(firstname, lastname, gender,age, city){
        //  Member variable
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.age = age;
        this.city = city;
    }
    // Member Function or Class Method
    FullName(){
        return `Fullname : ${this.firstname+this.lastname} `;
    }
    Age(){
        return `${this.FullName()} \nAge : ${this.age}`
    }
    
}
// creating the object Account
const Poo = new Person("Poo", "vannan", "Male", 25, "Ranipet");
const Jaga = new Person("Jaga", "deesan","Male", 23, "Chennai");
const Loga = new Person("Loga", "nathan", "Male", 29, "Vellore");

console.log(Poo);
console.log(Jaga);
console.log(Loga);
console.log(Poo.FullName());
console.log(Poo.Age());