
setTimeout( function(){
    console.log('Sending SMS');
    console.log('SMS Sent');
},6000);

function x(){
   console.log('this is x function');
}
x();

setTimeout(
   function(){
       console.log('Sending Email');
       console.log('email Sent');
   },3000
);

function y(){
   console.log('this is y function');
}

y();

setTimeout(function(){
   console.log('Sending Whatsapp message');
   console.log('message sent');
},1000);

function z(){
   console.log('this is z function');
}

z();
