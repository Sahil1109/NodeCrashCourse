console.log(__dirname, __filename)
class person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    greetings(){
        console.log(`My name is ${this.name} & I'm ${this.age} years old`)
    }
}

module.exports=person