/*function b1(){
    var myVar;
    console.log(myVar);
}

function a1(){
    var myVar=1;
    b1();
    console.log(myVar)
}

var myVar=2;
console.log(myVar);
a1();*/
/*
function b1(){
    var myVar;
    console.log(myVar);
}

function a1(){
    var myVar=1;
    function b1(){
    var myVar;
    console.log(myVar);
}
    b1();
    console.log(myVar)
}

var myVar=2;
console.log(myVar);
a1();*/
//變數提升

/*var firstname='Simon';
var addSurname=()=>{
    var surname='Holmes';
    var fullname=firstname+' '+surname;
    console.log(fullname);
}*/
var firstname='Simon';
var addSurname=()=>{
    var surname='Holmes';
    var fullname=firstname+' '+surname;
    var firstname='David';
    console.log(fullname);
}
addSurname();
