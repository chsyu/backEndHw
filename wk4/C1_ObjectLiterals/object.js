`use strict`
//obj property
var obj01={
  Street:'Main',
  Number:100,  
  Apartment:
  {
      Floor:3,
      Number:301
  }
}
//DOT save obj
var myName={
  firstname:'li',
  lastname:'i-chi',
  greet:function(){
    console.log(`Hi,My name is ${this.firstname} ${this.lastname}!`);
  }
};
myName.greet();
console.log(myName['firstname']);
