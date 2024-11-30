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

