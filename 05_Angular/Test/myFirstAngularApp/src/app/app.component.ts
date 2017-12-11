//where all TypeScript code will go
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // this is the phrase that gets the following files
  templateUrl: './app.component.html', //this is the file location of the template file
  styleUrls: ['./app.component.css'] // an array of urls, assuming you could use multiple css files linked to this component
})
export class AppComponent { //inherit all of this meta-data and functionality of the @Component decorator.
  title: string = 'My 1st App';
  x: number = 7;
  y: number = 9;
  myStr: string = "Jessica";
  user = {
      firstName: 'Darth',
      lastName: 'Vader'
  }
  myArr = [1,2,3,4,5,6,7];
  myBoo = true;
  color = 'red';
  switch: boolean = true;

  num: number = 1;
	logNum(){
		console.log("num is: ", this.num);
	}
    addNum(){
        this.num = this.num + 10;
    }
    resetNum(){
        this.num = 0;
    }
    users = [];
    user2 = {
        first: "",
        last: ""
    }
    user3 = {
        username: "",
        email: "",
        password: ""
    }
    onSubmit(){
        console.log("onSubmit()");
        console.log(this.user2);
        this.users.push(this.user2);
        this.user2 = {
            first: "",
            last: ""
        }
        console.log(this.users)
    }
    // form validation

}


//To review, the template represents the HTML, the style sheets are the CSS and the class that immediately follows the Component will represent it's JavaScript for interactivity and animations.
