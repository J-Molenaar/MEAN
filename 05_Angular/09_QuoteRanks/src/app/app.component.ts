import { Component } from '@angular/core';

class Quote {
    constructor(
        public content: string = "",
        public author: string ="",
        public id: number = 0,
        public votes: number = 0,
    ){}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Ranks';
  count:number = 3;
  quote = new Quote();
  quotes = [{
      content: "I never am really satisfied that I understand anything, because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me.",
      author: "Ada Lovelace",
      id: 1,
      votes: 0,
    },
    {
      content: "To be, or not to be",
      author: "Prince Hamlet",
      id: 2,
      votes: 0,
    }
    ];

  onSubmit(){
    this.quote.id = this.count;
    this.quotes.push(this.quote);
    this.quote = new Quote();
    this.count ++;
  }
  addVote(id){
      this.quotes[id -1].votes++;
  }
  removeVote(id){
      this.quotes[id -1].votes--;
  }
  deleteQuote(id){
      this.quotes.splice(id, 1);
  }
}
