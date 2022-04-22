function createEmployeeObject(firstName, lastName, gender, designation){
    var newObject = {};
    newObject.firstName = firstName;
    newObject.lastName = lastName;
    newObject.gender = gender;
    newObject.designation = designation;

    return newObject;
}

var emp3 = createEmployeeObject("jim", "halpet", "m", "software");

console.log(emp3);