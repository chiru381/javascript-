function computerLang(programmings){
    const languages = {
        javscript: 'js',
        reactjs: 'npx',
        angular: 'ng',
        mongodb: 'mongo'
    }
    console.log(`A ${programmings} all ${languages[programmings]}.`);
}
function getRandom (arr){
    return arr[Math.floor(Math.random()*arr.length)];
}
const programs = ['javascript','reactjs','angular','mongodb'];
const randomProgrammings = getRandom(programs);

setTimeout(()=>{
    computerLang(randomProgrammings);
},1000);