class Person{
constructor(name ='Anonymous',age=0){
  this.name = name;
  this.age=age;
}
getGreetings(){
    return `Hi! I am ${this.name}!`
}
getDescription(){
    return `${this.name} is  ${this.age} year(s) old.`
}
}

class Student extends Person{
constructor(name,age,mazor){
    super(name,age);
    this.mazor = mazor;

}
hasMajor(){
    return !!this.mazor
}


getDescription(){
    let description =  super.getDescription();
    if(this.hasMajor()){
        description += `Their major is ${this.mazor}`
    }
    return description;
}

}


class Traveler extends Person{
    constructor(name,age,homelocation){
      super(name,age);
      this.homelocation = homelocation;
    }

    hasHomeLocation(){
        return !!this.homelocation
    }
    getGreetings(){
        let greetings = super.getGreetings();
        if(this.hasHomeLocation()){
            greetings += `I'm visiting ${this.homelocation}`
        }
        return greetings;
        }

}
const me = new Traveler('Satya',27,'India');
console.log(me);
console.log(me.getGreetings());
const other = new Traveler();
console.log(other);
console.log(other.getGreetings());
