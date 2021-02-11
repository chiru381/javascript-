let object = {
    name:'JsStartup',
    value:100
};
let { name, value:num } = object;
object['name'] = 'Javascript';
console.log(name);
console.log(num);