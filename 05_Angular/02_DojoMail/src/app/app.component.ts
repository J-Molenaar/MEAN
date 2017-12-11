import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  list = [
      {
          email: 'me@me.com',
          importance: true,
          subject: 'Dojo Mail',
          content: "Crush this assignment!",
      },
      {
          email: "Ada.Lovelace.com",
          importance: true,
          subject: "Programming",
          content: "Enchantress of Numbers!",
      },
      {
          email: "Bill@gates.com",
          importance: true,
          subject: "Windows",
          content: "Windows XXI will launch in 2100",
      },
      {
          email: "Mark@Zuckerberg.com",
          importance: false,
          subject: "Facebook",
          content: "Limiting posting",
      },
  ];
}
