//creating abstract class
class Mobile {
    constructor(name, color, initialcharging) {
        this.name = name;
        this.color = color;
        this.initialcharging = initialcharging;
        var currentCharging = 0;
        var chargingDetails=(charge)=>{
            currentCharging=this.initialcharging+charge;
            if(currentCharging>100){
                throw Error("Mobile is fully Charged");
            }
            console.log("Current Charging"+currentCharging);
        }
        this.plugInCharge = (charge) => {
            chargingDetails(charge);
        }
    }
    calling() {
        console.log("calling to chinni");
    }
    playGames(){
        console.log("Playing games");
    }
    setName(newName){
        this.name = newName;
    }
}






//creating instantiating objects by using class
let redmi = new Mobile('Redmi Note 7', 'Black', 20);
let apple = new Mobile('Apple', 'Silver', 20);








//getting, setting the properties and actions with created object.
//redmi.plugInCharge(30);
//redmi.currentCharging=200;
//console.log(redmi.currentCharging);

console.log(redmi.plugInCharge(80));