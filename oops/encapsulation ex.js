//creating encapsulated class
class Bank{
    constructor(name, account_no, account_type){
        var name = name;
        var account_no = account_no;
        var account_type = account_type;
        this.getName = () => {
            return name;
        }
        this.getAccountNum = () => {
            return account_no;
        }
        this.getAccountType = () => {
            return account_type;
        }
    
        this.setName = (newName) => {
            name = newName;
        }
        this.setAccountNumber = () => {
            account_no = Math.floor(Math.random()*900000000);
        }
        this.setAccountType = (accountType) => {
            account_type = accountType;
        }
    }
}


//creating instantiating objects by using class
let raju = new Bank('Raju', null, 'savings');
let chiru = new Bank('Chiru', null, 'current');



//getting, setting the properties and actions with created.

chiru.setAccountNumber();
console.log(chiru.getAccountNum());
chiru.account_no=123;
console.log(chiru.getAccountNum());
