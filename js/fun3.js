
 function getCurrentTime(){

    var date= new Date();

    var date_time=date.getHours() + ":" + date.getMinutes() +":"+date.getSeconds();

    return date_time;

}

console.log(getCurrentTime());
