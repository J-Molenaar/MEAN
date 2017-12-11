import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    @Input() allQuotes;
    @Output() voteUp = new EventEmitter();
    @Output() voteDown = new EventEmitter();
    @Output() remove = new EventEmitter();
  constructor() { }

  ngOnInit() {
      console.log(this.allQuotes)
  }
  upVote(id){
      this.voteUp.emit(id);
  }
  downVote(id){
      this.voteDown.emit(id);
  }
  delete(id){
      this.remove.emit(id);
  }
}
