import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan3',
  templateUrl: './supersaiyan3.component.html',
  styleUrls: ['./supersaiyan3.component.css']
})
export class Supersaiyan3Component implements OnInit {
    @Input() power;
    message: string = "";
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
      this.power = this.power * 250;

      if(this.power == 50000){
          this.message = "The One!";
      }
      else if(this.power > 20000){
         this.message = "Superlative!";
      }
      else if(this.power > 9000){
          this.message = "Over 9000!";
      }
      else{
          this.message = "";
      }
  }
}
