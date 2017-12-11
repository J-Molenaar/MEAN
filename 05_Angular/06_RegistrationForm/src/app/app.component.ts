import { Component } from '@angular/core';

class User {
    constructor(
        public first: string = "",
        public last: string = "",
        public email: string = "",
        public password: string = "",
        public confirm: string = "",
        public address: string = "",
        public unit: string = "",
        public city: string = "",
        public state: string = "",
        public zip: string = "",
        public lucky: boolean = true,
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  message = " ";
  users = [];
  user = new User();
  onSubmit(){
    this.message = 'Thank you for registering with us ' + this.user.first + '. We just sent you a confirmation email at ' + this.user.email + ', and we will send all mail to ' + this.user.address + ', ' + this.user.city + ' ' + this.user.state + ', ' + this.user.zip;
    this.users.push(this.user);
    this.user = new User();
  }
}
