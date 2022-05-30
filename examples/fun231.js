function authenticateUser(mobileNumber,password){

    var db_mobileNumber=9010101010;
    var db_password="saikumar$123";

     if(mobileNumber == db_mobileNumber && password == db_password){
        console.log('redirect to userhome');
     }
     else
     {
        console.log('redirect to login page with errors');
     }

}
authenticateUser(9010101010,'saikumar$123');
