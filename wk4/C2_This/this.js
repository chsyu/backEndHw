`use strict`
var about0={
    firstname:'I-Chin',
    lastname:'Li',
    greet0:function(){
        console.log(this.firstname);
    }
}
about0.greet0();

var about1={
    firstname:'I-Chin',
    lastname:'Li',
    greet1:()=>{
        console.log(this.firstname);
    }
}
about1.greet1();

var about2={
    firstname:'I-Chin',
    lastname:'Li',
    greet2:function(){
        (()=>{
            console.log(this.firstname);
        })();
    }
}
about2.greet2();

var about3={
    firstname:'I-Chin',
    lastname:'Li',
    greet3:function(){
        (function(){
            console.log(this.firstname);
        })();
    }
}
about3.greet3();

var about4={
    firstname:'I-Chin',
    lastname:'Li',
    greet4:function(){
        (function(){
            (()=>{
                console.log(this.firstname);
            })();
        })();
    }
}
about4.greet4();