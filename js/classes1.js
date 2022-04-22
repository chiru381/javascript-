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
     checkBalance(){
         console.log( "your current balance is",this.accountBalance);
     }

    //  deposit(){

    //  }
    //  transfer(recieverAccount,amount){

    //  }

}
class BranchManager{

     accountNumberCounter=100;

   accountValidator(accountDetails){

      if(accountDetails.adhaarCardNumber != "" && accountDetails.fullname != ""){

          accountDetails.accountNumber=this.generateUniquAccountNumber();
          accountDetails.accountBalance=0;

          console.log("your account is approved");

          return true;

      }
      else
      {
          console.log("Account rejected");
          return false;
      }

   }
   generateUniquAccountNumber(){
          this.accountNumberCounter=this.accountNumberCounter+1;
          return this.accountNumberCounter;
   }
}


if(localStorage.getItem('accounts') == null){

     localStorage.setItem('accounts', JSON.stringify([]));
}

function applyAccount(){
event.preventDefault();
    var fullname=document.getElementById('fullname').value;
    var mobileNumber=document.getElementById('mobileNumber').value;
    var address=document.getElementById('address').value;
    var adhaarCardNumber=document.getElementById('adhaarCardNumber').value;

    var customer= new Customer();

    customer.applyAccount(fullname,mobileNumber,address,adhaarCardNumber);

    var branchManager= new BranchManager();
    var status=branchManager.accountValidator(customer);
    if(status){
        
        var accounts=JSON.parse(localStorage.getItem('accounts'));
        accounts.push(customer);
        localStorage.setItem('accounts', JSON.stringify(accounts));

        document.getElementById('errorMessage').innerHTML="Account got approved!";

    }
    else
    {
           document.getElementById('errorMessage').innerHTML="Account not approved!";
    }
}

function login(){
    event.preventDefault();
    var adhaarCardNumber=document.getElementById('adhaarCardNumber').value;
     
    var accounts=JSON.parse(localStorage.getItem('accounts'));

    for(var i=0;i<accounts.length;i++){

        var account=accounts[i];

         if(account.adhaarCardNumber == adhaarCardNumber){
             localStorage.setItem('currentUser',JSON.stringify(account));
             window.location.href="dashboard.html";
         }
         else
         {
             alert('adhaar card number invalid');
         }

    }
}

function getCurrentUser(){
   return JSON.parse(localStorage.getItem('currentUser'));
}

// var customer1= new Customer(); // {}

// console.log(customer1);

// customer1.applyAccount("Sai",9010101010, "hyderabad",901010);

// console.log(customer1);


// var branchManager= new BranchManager();
// branchManager.accountValidator(customer1);

// console.log(customer1);

// customer1.accountBalance=9000;

// console.log(customer1);
// customer1.withdraw(8000);

// customer1.checkBalance();

// customer1.withdraw(900);

// console.log(customer1);

// customer1.withdraw(200);

// customer1.transfer();



