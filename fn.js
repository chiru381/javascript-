function defaultFn(name="JSSTARTUP"){
    console.log(name);
}
let arrowFn=(name="JSStartup")=>{
    console.log(name);
}
defaultFn();
defaultFn('JS');
arrowFn('JS');
arrowFn();