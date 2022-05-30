function Bank(){
    var name='chiru';
    function getName(){
        return name;
    }
    function setName(newName){
        name=newName;
    }
    return {getName, setName}
}
let bank=Bank();
console.log(bank);
console.log(bank.getName());
bank.setName('vivek');
console.log(bank.getName());
bank.setName('raju');
console.log(bank.getName());
console.log(name);