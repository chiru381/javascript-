function Construct(firstName, lastName, gender, designation){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.designation = designation;
}

var emp3 = new Construct("jim", "halpet", "m", "software");

console.log(emp3);