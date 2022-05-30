var Bank=(function(){
    var name='chiru';
    function getName(){
        return name;
    }
    function setName(newName){
        name=newName;
    }
    return {
        setName, getName
    }
})();
console.log(Bank);
console.log(Bank.getName());
Bank.setName('raju');
console.log(Bank.getName());