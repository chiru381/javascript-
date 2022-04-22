//creating parent class
class Person{
    constructor(name, designation){
        this.name = name;
        this.designation = designation;
    }
    learn(){
        console.log("Learning Something");
    }
    eat(){
        console.log("Eating");
    }
    sleep(){
        console.log("Sleeping");
    }
}

//extending parent class to child class
class Developer extends Person{
    constructor(name, designation, companyName){
        super(name, designation);
        this.companyName = companyName;
    }
    coding(){
        console.log("javascript coding...");
    }
}


//extending parent class to one more time child class
class Dancer extends Person{
    constructor(name, designation, schoolName){
        super(name, designation);
        this.schoolName = schoolName;
    }
    dancing(){
        console.log("classical dancing...");
    }
}

//creating, instantiating objects by using class
let person = new Person('Human', 'Nothing');
console.log(person);
let venkatesh = new Developer("Venkatesh", "Fullstack");
console.log(venkatesh);
let ramani = new Dancer("Ramani", "Classical Dancer", "Dancing School");
console.log(ramani);


//getting, setting the properties and actions with created
venkatesh.coding();
venkatesh.eat();
venkatesh.learn();
ramani.dancing();
ramani.eat();
ramani.learn();