
// var employee= {
//       name:'ravikumar',
//       address: 'hyderabad',
//       getEmployeeInfo: function(){
//                 return this.name + "  " + this.address;
//     } 
// }
// //var empdts=employee1.getEmployeeInfo();
// //console.log(empdts);

// var emp2={
//     name: 'ram',
//     address: 'secunderabad',
// } 

// var emp3={
//     name: 'ramesh',
//     address: 'secunderabad',
// }
// var emp4={
//     name: 'anil',
//     address: 'secunderabad',
// }

// var res=employee.getEmployeeInfo.call(emp3);
// console.log(res);


// var version= {
//     versionNumber: "1.4.5",
//        getVersion: function() {
//            return this.versionNumber;
//        }
// }


var employee= {

    getEmpInfo: function(city, state, country){

        return city + " "+ state + " "+ country;

    }
}


var info2= {
   city: "banglore",
   state: "Karnataka",
   country: "India"
}

var res=employee.getEmpInfo.call({},"hyderabad","ts","india");
console.log(res);

var res2=employee.getEmpInfo.call({},"banglore","Karnataka","india");
console.log(res2);


var res2=employee.getEmpInfo.apply({},["banglore","Karnataka","india"]);
console.log(res2);


var employee1= {
      name: "ravikumar",
      address: "hyderabad",
      eid: 101
}

var employee2= {
   name: "kiran",
   address: "hyderabad",
   eid:102
}
