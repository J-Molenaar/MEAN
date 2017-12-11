import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { Http } from '@angular/http';
import { User } from './user'

import 'rxjs'

@Injectable()
export class UserService {

  constructor( private http: Http) { }
  register(new_user: User){
      console.log("Step 2: user.service.ts")
      return this.http.post('/register', new_user)
      .map(data => data.json())
      .toPromise();
  }

  login(user: User){
      return this.http.post('/login', user)
      .map(data => data.json())
      .toPromise();
     
  }
  getSession(){
    console.log("Session Step 2: Inside GET SESSION")
    return this.http.get('/getSession').map(data => data.json()).toPromise();
  }

  // getAllUsers(){
  //     console.log("getting all users")
  //     return this.http.post('/allUsers')
  //     .map(data => data.json())
  //     .toPromise();
  //
  // }
}
