import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
    power: number = 10;
    level: number;
    
  constructor() {
  console.log("power parent")}

  ngOnInit() {
      this.power = 10;
  }
  onSubmit(){
      this.level = this.power;
  }

}
