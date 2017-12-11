// -*- JavaScript -*-

class NinjaConstructor {
    constructor(name){
        this.ninjaName = name;
        this.health = 100;
        this.speed = 3; //asignment says to make this private. I did this in ES6 which is the proper way. Dylan said this is fine. Don't change it.
        this.strength = 3; // same comment as above
    }
    get _speed(){
        return this._speed;
    }
    get _strength(){
        return this._strength;
    }
    sayName(){
        console.log(`Hello my name is ${this.ninjaName}`);
    }
    showStats(){
        console.log(`Health: ${this.health} Speed: ${this.speed} Strength: ${this.speed}`);
    }
}

const Goku = new NinjaConstructor("Goku");
Goku.sayName();
Goku.showStats();
