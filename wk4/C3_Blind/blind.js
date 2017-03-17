var about={
    firstname:'Li',
    lastname:'I-Chin',
    getFullname:function(){
        var fullname=this.firstname+' '+this.lastname;
        return fullname;
    }
};

var greet=function(){
    console.log(`Hi,my name is ${this.getFullname()}`);
}

var bindgreet=greet.bind(about);
bindgreet();
//car

car='hohoho';

var soldcar={
    car:'hihihi',
    getcar:function(){
        return this.car;
    }
};
console.log(soldcar.getcar());

var storesoldcar=soldcar.getcar;
console.log(storesoldcar());

var realsoldcar=soldcar.getcar.bind(soldcar);
console.log(realsoldcar());