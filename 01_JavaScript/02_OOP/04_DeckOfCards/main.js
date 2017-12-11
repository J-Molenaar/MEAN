// -*- JavaScript -*-

const deck_suit = [ "Clubs", "Diamonds", "Hearts", "Spades"]

class Card {
    constructor(val, suit){
        this.val = val;
        this.suit = suit;
        this.card;
            if(this.val == 1){
                this.card = "Ace";
            }
            else if(this.val == 11){
                this.card = "Jack";
            }
            else if(this.val == 12){
                this.card = "Queen";
            }
            else if(this.val == 13){
                this.card = "King";
            }
            else{
                this.card = this.val.toString();
            }
        }
    }

class Deck{
    constructor(){
        this.FullDeck =[];
        this.buildDeck();
    }

    buildDeck(){
        for(let x = 0; x <deck_suit.length; x++){
            for(let y = 1; y < 14; y++){
                this.FullDeck.push( new Card(y, deck_suit[x]));
            }
        }
        this.shuffle();
    }
    shuffle(){
        const FD = this.FullDeck.length;
        for (let i = 0; i< FD; i++){
            let rand = Math.floor(Math.random() * 52);
            var temp = this.FullDeck[i];
            this.FullDeck[i] = this.FullDeck[rand];
            this.FullDeck[rand] = temp;
        }
        return (this.FullDeck);
    }
    deal(){
        var card = this.FullDeck.pop();
        return(card);
    }
}

class Player {
    constructor(player_name) {
        this.name = player_name;
        this.hand = [];
    }

    draw(FullDeck){
        let dcard = FullDeck.deal();
        this.hand.push(dcard);
        return dcard;
    }

    discard(idx){
        if(idx < this.hand.length){
            return this.hand.splice(idx, 1);
        }
    }
}



let mydeck = new Deck();
let player = new Player("Jessica");

player.draw(mydeck);
player.draw(mydeck);
player.draw(mydeck);
player.draw(mydeck);
console.log(player.hand);
console.log(player.hand[0].suit);
console.log(player.hand[0].val);
player.discard(0);
console.log(player.hand);

// WAR card game:
// function War()){}
//
//
// let wardeck = new Deck();
// let player1 = new Player("Jessica");
// player1.draw(wardeck);
//
// let player2 = new Player("Eddie");
// player2.draw(wardeck);
