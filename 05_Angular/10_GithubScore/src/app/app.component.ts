import { Component } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Score';
  gitInfo: {};
  error = "";
  user = {username: ""};

  constructor(private _httpService: HttpService){}
  onSubmit(){
      this._httpService.getGit(this.user.username)
      .then( githubData => {this.gitInfo = githubData})
      .catch( err=> {this.error = "User don't exist"});

      return false;
  }

}
