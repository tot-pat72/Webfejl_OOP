// function Player(nickname){
//     this.nickname = nickname;
//     this.playedMatch = 0
// }
// Player.prototype.play = function(){
//     this.playedMatch++;
//     console.log(this.nickname, this.playedMatch)
// }
// Player.prototype.getTierlevel = function(){
//     if(this.playedMatch < 4){
//         return "A"
//     }
//     else if(this.playedMatch < 7 && this.playedMatch > 3){
//         return "B"
//     }
//     else {
//         return "C"
//     }
// }
class Player{
    constructor(nickname){
        this.nickname = nickname
        this.playedMatch = 0
    }
    play(){
        this.playedMatch++;
        console.log(this.nickname, this.playedMatch)
    }
    getTierlevel(){
        if(this.playedMatch < 4){
            return "A"
        }
        else if(this.playedMatch < 7 && this.playedMatch > 3){
            return "B"
        }
        else {
            return "C"
        }
    }
}
const gomszab = new Player("gomszab");

gomszab.play();
gomszab.getTierlevel();
console.log(gomszab.getTierlevel())

// function Person(name){
//     this.name = name
// }

// Person.prototype.getName = function(){
//     return this.name

// function Student(name, school){
//     Person.call(this, name);
//     this.school = school
// }

class Person{
    constructor(name){
        this.name = name
    }

    getName(){
        return this.name
    }
}

class Student extends Person{
    constructor(school, name){
        super(name);
        this.school = school
    }
}

const student = new Student("Bolyai", "Géza");
console.log(student.getName());
console.log(student.school)

// function Animal(name){
//     this.name = name
// }

// Animal.prototype.hang = function(){
//     console.log(`${this.name} hangot ad.`)
// }

// function Bird(name){
//     Animal.call(this, name)
// }

// Bird.prototype.repul = function(){
//     console.log(`${this.name} repül.`)
// }

// function Mammal(name){
//     Animal.call(this, name)
// }

// Mammal.prototype.jar = function(){
//     console.log(`${this.name} sétál.`)
// }

class Animal {
    constructor(name){
        this.name = name
    }
    hang(){
        console.log(`${this.name} hangot ad.`)
    }
}

class Bird extends Animal{
    constructor(name){
        super(name)
    }
    repul(){
        console.log(`${this.name} repül.`)
    }
}

class Mammal extends Animal{
    constructor(name){
        super(name)
    }
    jar(){
        console.log(`${this.name} sétál.`)
    }
}

const bird = new Bird("Holló");
bird.hang();
bird.repul();

const mammal = new Mammal("Mosómedve");
mammal.hang();
mammal.jar();