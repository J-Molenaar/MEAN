import { Injectable } from '@angular/core';
import {  Http } from '@angular/http'; //importing http class from module
import 'rxjs/Rx';


@Injectable()
export class HttpService {

  constructor(private http: Http) { }
  getGit(username){
      return this.http.get("https://api.github.com/users/" + username).map(githubProfile=>githubProfile.json()).toPromise();
  }

}
