
class Customer{
 
    fullname; // this.fullname
    mobileNumber;
    address;
    adhaarCardNumber;

     applyAccount(fullname,mobileNumber,address,adhaarCardNumber){
        this.fullname=fullname;
        this.mobileNumber= mobileNumber;
        this.address=address;
        this.adhaarCardNumber=adhaarCardNumber;
     }

   n
     checkBalance(){
         console.log( "your current balance is",this.accountBalance);
     }

     deposit(){

     }
     transfer(){

     }

}

class BranchManager{

     accountNumberCounter=100;

   accountValidator(accountDetails){

      if(accountDetails.adhaarCardNumber != "" && accountDetails.fullname != ""){

          accountDetails.accountNumber=this.generateUniquAccountNumber();
          accountDetails.accountBalance=0;

          console.log("your account is approved");

      }
      else
      {
          console.log("Account rejected");
      }

   }
   generateUniquAccountNumber(){
          this.accountNumberCounter++;
          return this.accountNumberCounter;
   }
}
var customer1= new Customer(); // {}

console.log(customer1);

customer1.applyAccount("Sai",9010101010, "hyderabad",901010);

console.log(customer1);


var branchManager= new BranchManager();
branchManager.accountValidator(customer1);

console.log(customer1);

customer1.accountBalance=9000;

console.log(customer1);
customer1.withdraw(8000);

customer1.checkBalance();

customer1.withdraw(900);

console.log(customer1);

customer1.withdraw(200); 

