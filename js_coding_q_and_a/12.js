const obj = {
  user: {
    name: "Pavan",
    adress: {
      city: "bangalore",
      village: {
        pincode: 23123,
      },
    },
  },
};
/* OUTPUT 

obj={
  "user.name" : "Pavan",
  "user.adress.city" :"Bangalore"
  "user.adress.village".pincode: 123123
}

*/

var res = {};

function abc(obj, res, prefix = "") {
  for (let key in obj) {
    let newPrefix = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] == "object" && obj[key] !== null) {
      abc(obj[key], res, (prefix = newPrefix));
    } else {
      res[newPrefix] = obj[key];
    }
  }
  return res;
}

console.log(abc(obj, res));
