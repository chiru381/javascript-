let obj = {
  born: 1995,
  data: {
    shName: "JS",
  },
};

//obj is replaced to newObj
let newObj = { ...obj };
obj["born"] = 1996;
console.log(obj["born"]);
console.log(newObj["born"]);
obj["data"]["shName"] = "jsstartup.com";
console.log(newObj["data"]["shName"]);
