//submit function
function submit(name){
    console.log("submitted", name);
}


//userComponent
const UserComponent = {
    render: function () {
        this.submit();
    }
}
/* UserComponent.render(); */


//result
let result = submit.bind(UserComponent, "chiru");
result();