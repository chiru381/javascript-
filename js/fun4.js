
function getComments(){

    return [ "hello how are you", "all good","when can I call you?"];
}


function displayComments(){

    var comments=getComments();

    for(var i=0;i<comments.length;i++){
        console.log(comments[i]);
    }

}
