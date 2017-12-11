import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks: any[] =[
      {title:"first task"},
      {title:"second task"}
  ];
  constructor() {}
}
