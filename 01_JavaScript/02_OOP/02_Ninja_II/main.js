// -*- JavaScript -*-

class Ninja {
    constructor(name){
        this.ninjaName = name;
        this.health = 100;
        this.speed = 3; //asignment says to make this private. I did this in ES6 which is the "proper way" according to Dylan.
        this.strength = 3; // same comment as above
    }
    sayName(){
        console.log(`Hello my name is ${this.ninjaName}`);
    }
    showStats(){
        console.log(`Health: ${this.health} Speed: ${this.speed} Strength: ${this.speed}`);
    }
    kick(target){
        target.health -= this.strength * 5;
        console.log(`${target.ninjaName} was kicked by ${this.ninjaName} and lost 5 Health!`)
    }
    punch(target){
        target.health -= 5;
        console.log(`${target.ninjaName} was punched by ${this.ninjaName} and lost 5 Health!`)
    }
}

var Goku = new Ninja('Goku');
Goku.sayName();
Goku.showStats();

var Inuyasha = new Ninja('Inuyasha');
Inuyasha.sayName();
Inuyasha.showStats();

Goku.kick(Inuyasha);
Inuyasha.punch(Goku);

Goku.showStats();
Inuyasha.showStats();
