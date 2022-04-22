//function meant to be called in constructor mode.
function Bicycle(cadence, speed, gear, tirePressure){
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function() {
        this.tirePressure +=3;
    }
}

//calling the function in constructor mode
var bicycle1 = new Bicycle(50, 20, 4, 25);
console.log(bicycle1.inflateTires());

var bicycle2 = new Bicycle(50, 20, 4, 25);
console.log(bicycle2.inflateTires());

function Mechanic(name){
    this.name = name;
}

var mike = new Mechanic("Mike");
mike.inflateTires = bicycle1.inflateTires;


//mike.inflateTires.call(bicycle1)