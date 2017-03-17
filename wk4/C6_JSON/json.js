var personobj={
    firstname:'Claire',
    fullname:'claire li',
    age:21,
    married:true,
    hasOwnHair:null,
    children:[{
        firstname:'Way'
    },{
        firstname:'nini'
    }]
};

var personjson=JSON.stringify(personobj)
var personjsonjs=JSON.parse(personjson)
console.log(personobj);
console.log(personjson);
console.log(personjsonjs);