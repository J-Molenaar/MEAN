import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    regUser = new User();

    constructor(private _httpService: HttpService, private router: Router) { }

    ngOnInit() {

    }

    register()
    {
    this._httpService.getSession()
        .then(user => {console.log("The session should print here:" + user.id)})
        .catch(err => {console.log("Session find errors should print here: " + err)})

    this._httpService.addUser(this.regUser)
        .then(user => this.router.navigate(['/dashboard']))
        .catch(err => {console.log(err)});
    this.regUser = new User();
    }

    destroySession()
    {
      this._httpService.destroySession()
        .then((data) => {console.log("Session destroyed.")})
        .catch((err) => {console.log("Error on session destroy" + err)})
    }


}
