function defaultFn(name = "JsStartup"){
    console.log(name);
}
let arrowFn = (name = "JsStartup")=>{
    console.log(name);
}
defaultFn();
defaultFn('JS');
arrowFn('JS');
arrowFn();