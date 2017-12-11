import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zones';

  date: any = "";
  PST: boolean = false;
  MST: boolean = false;
  CST: boolean = false;
  EST: boolean = false;

  pst(){
     this.date = new Date().toLocaleString('en-US', {timeZone: 'America/Los_Angeles'})
     this.PST= true;
     this.MST = false;
     this.CST = false;
     this.EST = false;
  }
  mst(){
     this.date = new Date().toLocaleString('en-US', {timeZone: 'America/Denver'})
     this.PST= false;
     this.MST = true;
     this.CST = false;
     this.EST = false;
  }
  cst(){
     this.date = new Date().toLocaleString('en-US', {timeZone: 'America/Chicago'})
     this.PST= false;
     this.MST = false;
     this.CST = true;
     this.EST = false;
  }
  est(){
     this.date = new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})
     this.PST= false;
     this.MST = false;
     this.CST = false;
     this.EST = true;
  }
  reset(){
     this.date = '';
     this.PST= false;
     this.MST = false;
     this.CST = false;
     this.EST = false;
  }
}
