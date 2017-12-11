import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {
    @Input() power;
    message: string = "";
  constructor() {
  }

  ngOnInit() {

  }
  ngOnChanges(){
    this.power = this.power *10;
        switch(this.power){
            case this.power == 50000:
                this.message = "The One!"
                console.log(this.message);
                break;
            case this.power > 20000:
                this.message = "Superlative!";
                console.log(this.message);
                break;
            case this.power > 9000:
                this.message = "Over 9000!";
                console.log(this.message);
                break;
      }

  }

}
