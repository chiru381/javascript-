//creating class
class Mobile {
    constructor(name, color) {
        this.name = name;
        this.color = color;
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




//creating/instantiating objects by using class
let redmi = new Mobile('Redmi Note 7', 'Black');
let apple = new Mobile('Apple', 'Silver');
let vivo = new Mobile('Vivo', 'Blue');
let nokia = new Mobile('Nokia', 'Red');
let samsung = new Mobile('Samsung', 'gray');




//Getting, Setting the properties and actions with created object.
console.log(redmi.color);
console.log(redmi.name);
redmi.calling();
redmi.setName("Redmi Note 9 Pro");
console.log(redmi.name);
console.log(nokia);