// class car
// one way
class Car{
    constructor(){
        make:this.make
        model:this.model
        speed:this.speed
    } 
    details(){console.log(`This Cars make is ${this.make} and it's model is ${this.model}`);
    }
    accelerate(mph){
        this.speed += mph;
        console.log(`This car is going ${this.speed}mph`)
    }
    brake(mph){
        this.speed += mph;
        console.log(`This car is going ${this.speed} mph`)
    }
        
    }

let firstCar=new Car();
firstCar.make="Chevy";
firstCar.model="Impala";
console.log(firstCar);
let secondCar=new Car();
secondCar.make="Ford";
secondCar.model="Taurus";
firstCar.details();
// firstCar.tires=0;// example you can add new constructor value/
firstCar.speed=0;
firstCar.accelerate(10);
firstCar.brake(10);
// another way
class Car{
    constructor(make,model){
        this.make=make
        this.model=model
    }
}
// constructor method
class Employee{
    constructor (){
        constructor(name, title, catchPhrase){
            this.name=this.name;
            this.title=this.title;
            this.catchPhrase=this.catchPhrase;
        }
        introduce({
            console.log(`Hi , I am ${this.name}, I am a ${this.title},${catchPhrase}`)
        })
    }
}
let spongebob= new Employee("spongebob", "frycook", "I am ready!")
let squidward= new Employee("Squidward", "Cashier", "I hate everyone!")
console.log(spongebob);
console.log(squidward);