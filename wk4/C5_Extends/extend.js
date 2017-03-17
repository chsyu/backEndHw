class Employee extends Person{
    constructor(name,job){
        super(name);
        this.job=job;
    }
    printGreeting(){
        super.printGreeting();
        console.log(`Hi,I am ${this.name} and I am a ${this.job}!`);
    }
}

var person3=new Employee('Calire','Artist');
person3.printGreeting();
var person4=new Person('Way');
person4.printGreeting();

