import { Component, OnInit } from '@angular/core';
import { User } from "./../user";
import { UserService } from './../user.service';
import { Router } from '@angular/router';

console.log("&&&&&&&& in the dashboard component &&&&&&&&&")

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    user_id = "";
  constructor(private user_service: UserService, private router:Router) {
   }

  ngOnInit() {
      console.log('Step 1: dashboard.component.ts')
      this.user_service.getSession()
      .then(user => {console.log("The user in session is " + user.id)})
      .catch(err => {console.log("Session find errors should print here" +err )})
  }

}
