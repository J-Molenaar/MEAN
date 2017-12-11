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
    drinkSake(){
        this.strength += 10;
        console.log(`${this.ninjaName} drank Sake. Health increased by 10!`)
    }
}

var Goku = new Ninja('Goku');
Goku.sayName();
Goku.showStats();

var Inuyasha = new Ninja('Inuyasha');
Inuyasha.sayName();
Inuyasha.showStats();

Goku.drinkSake();
Goku.showStats();

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        super.health = 200;
        super.speed = 10;
        super.strength = 10;
        this.wisdom = 10;
    }
    speakWidsom(){
        super.drinkSake();
        console.log(`Sensei ${this.ninjaName} says: The Ninja who laughs last, killed all opponents.`);
    }
    showStats(){
        super.showStats();
        console.log(`Sensei ${this.ninjaName} also has Wisdom: ${this.wisdom}.`)
    }
}

var Splinter = new Sensei ('Master Splinter');
Splinter.speakWidsom();
Splinter.showStats();
