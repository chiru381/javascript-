//creating encapsulated class
class Bank{
    constructor(name, account_no, account_type){
        this.name = name;
        this.account_no = account_no;
        this.account_type = account_type;
    }
    getName(){
        return this.name;
    }
    getAccountNum(){
        return this.account_no;
    }
    getAccountType(){
        return this.account_type;
    }

    setName(newName){
        this.name = newName;
    }
    setAccountNumber(){
        this.account_no = Math.floor(Math.random()*900000000);
    }
    setAccountType(accountType){
        this.account_type = accountType;
    }
}


//creating instantiating objects by using class
let raju = new Bank('Raju', null, 'savings');
let chiru = new Bank('Chiru', null, 'current');



//getting, setting the properties and actions with created.
console.log(chiru.name);
chiru.setName('anand');
console.log(chiru.name);

console.log(chiru.getName());
chiru.setAccountNumber();
console.log(chiru.getAccountNum());

console.log(raju.getName());
raju.setAccountNumber();
console.log(raju.getAccountNum());