# MEAN
Projects from Coding Dojo using MonogoDB, Express, Angular and Node.js (MEAN)

_The following are my personal notes_

## Node & MongoDB Project Setup:
(This guide goes thru Intro to Mongoose)

1. mkdir project_name

2. cd  project_name
- mkdir static
- mkdir views
- touch server.js
- touch views/index.ejs
- touch static/style.css

3.Install packages/dependencies - in TERMINAL
- npm init -y
- npm install express --save
- npm install ejs --save
- npm install path --save
- npm install mongoose --save (optional if using a database)
- npm install body-parser --save (optional if using json/form data)
- npm install express-session --save (optional if using session)
- npm install socket.io --save (option if using sockets)

4.Open project folder in editor (atom/.code project_name)

5. Open server.js & add:

```
// --*REQUIREMENTS*--
const express = require(‘express’)
const path = require(‘path’);
const app = express();
const bodyParser = require('body-parser');               //delete if not using
const session = require('express-session');		//delete if not using

// --*CONFIGURATION*--
app.use(bodyParser.urlencoded({ extended: true }));          //delete if not using
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'CHANGE_ME'}));		//delete if not using
app.set('views', path.join(__dirname, './views'));        // setting up ejs and our views folder
app.set('view engine', 'ejs');

// --*DATABASE*--
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');  //change to be db name
var Name_Schema = new mongoose.Schema({   		  //change to whatever name needed
 name: String,						//change to whatever key : value pairs needed
 age: Number 
})
mongoose.model('User', Name_Schema);       // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User')                // creating a var for Schema to refer to in routes

// --*ROUTES*--
app.get('/', function(req, res) {    // root route: render the index.ejs view 
	// ADD logic to add stuff (ie user)  from req.body to the database HERE
res.render("index");
})

// --*SERVER*--
const server  = app. listen(8000, function() { 
 console. log( "listening on port 8000");
});

// --*SOCKETS*-- 					//delete  entire section if not using
const io  =  require( 'socket.io'). listen(server);

// Whenever a connection event happens (the connection event is built in) run the following code

io.sockets. on( 'connection', function (socket) {
  console. log( "WE ARE USING SOCKETS!");
  console. log(socket.id); 				//unique identifier
  //**** all the socket code goes in here!!!!!! ****
})

```

6. Open index.ejs and add:

```
<!DOCTYPE html>
<html>
  	<head>
    		<meta charset="utf-8">
    		<title></title>
		<link rel="style" href="/static/style.css">
    		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		
// --* SOCKET *-- 
    		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
   		 <script type ="text/javascript" src="/socket.io/socket.io.js"></script>
   		 <script type ="text/javascript">
        			 $(document). ready(function (){
           			 // this triggers the connection event in our server!
            		const socket  = io. connect();
           			 // we'll write all the socket stuff after the above line!
       			 })
   		 </script>

     	</head>
 	<body>
      		<h1>Hello World!</h1>
		<p> Add stuff!</p>
  		 <button>I AM A BUTTON!</button>
   		 <!-- web page goes here -->
  	</body>
</html>
```
7. Start server: nodemon server.js 
8. Start MongoDB server: sudo mongod (ctrl + c to quit)
9. Open Mongo Terminal (aka MongoDB shell) *in a NEW TERMINAL TAB*. 
*Its very important that you DONOT close this tab without shutting down Mongo first (exit to quit)* If you do it will keep running in the background FOREVER!

**Additional notes about syntax as well as using MongoDB and Mongoose can be found [here](https://docs.google.com/document/d/1Sh37cZKifrcuTiOi9gMv3-nZzRawALqjhHM0nFucVyw/edit?usp=sharing)**

## Angular Project Setup:
1. ng new my-project-name --routing (don’t use --routing if it is a single page app)
2. cd project_name
3. npm install		//this will install of the package.json dependencies (there are tons)
4. Lauch: 
- ng serve
5. Open project in text editor
6. Open .../src/app/app.module.ts and add:
```
import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module'; // <--- Routing rules imported
import { UserService } from './users/user.service'
	@NgModule({ 
	      declarations: [ 
		AppComponent, 
    ], 

imports: [
	BrowserModule,
	FormsModule,        // <-- Include module in our AppModules
	HttpModule          // <-- Include module in our AppModules
	AppRoutingModule    // <--- Our routing rules
	], 
providers: [UserService], 
bootstrap: [AppComponent]         //Don’t touch this. It has nothing to do with CSS!
}) 
export class AppModule { }
```


### Adding Additional Components, Services & Classes:
1. Need more app files? From the project folder: use Components, Directives, Services and Pipes commands:
- ng generate component new-component_name
- ng generate service new-service_name
- ng generate class new-class_name

**NOTE: Every time we create a new Component, (and later a Service), we need to register that Component with our Application. EVERY component or service ADDED/DELETED will need to be added/deleted in the app.module.ts file.** 

2. Creating a new component should automatically add them to the app.module.ts file but check to make sure. Deleting will have to be done manually. SERVICES are NOT automatically added!!!!
- For new component, open  app.component.html and add each new component:
```<h1> AppComponent </h1>```

3. Creating a new service will NOT add them to the app.module.ts. Open _app.module.ts_
```
import { HttpService } from './http.service';      	//at top of file
	providers: [UserService],				//above Bootstrap
```
a. Open app/new-service_name.ts file:
```
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
	@Injectable()
	export class HttpService {
  
	  constructor(private _http: Http){}
	  retrieveTasks() {
   	 	return this._http.get('/tasks').map(data=>data.json()).toPromise()
 	  }
	}
```
**Notes: _http.get has 2 functions chained to it, .map and .toPromise().***
The .map method is used to convert the returned object from the HTTP request into a json formatted object, and the .toPromise method is used to force the _http.get() call to return us a Promise instead of an Observable.
To call Service (retrieveTasks() method) and method, retrieve it's promise and to invoke the 
HTTP request, *we will chain the .then() callback method*, in _app.component.ts_:
```
export class AppComponent { 
 		 tasks = [];
 		 constructor(private _httpService: HttpService){}
  		getTasks(){
    			this._httpService.retrieveTasks()
   			.then( tasks => { this.tasks = tasks })
    			.catch( err => { console.log(err); })
  		}
	}
```
b. In app.component.ts:
```		
import { Component } from '@angular/core';
import { HttpService } from './http.service';
		@Component({ 
 			 selector: 'app-root', 
  			templateUrl: './app.component.html', 
 			 styleUrls: ['./app.component.css']
		})
export class AppComponent { 
  	constructor(private _httpService: HttpService){}
}
```

#### Routing:
Routing rules are defined as objects, and are placed inside the routes array from within our app-routing.module.ts file like this:
const routes: 

```
Routes = [
		{ path: 'home', component: HomeComponent } // home route 
];
```

Here path: ‘home’ is the path the route will match and component: ComponentName  is the expected component we want to load - the value must be the class name imported, not just a string of the component's class name.

Examples:

*app.component.html*

  Link for http://localhost:4200
```
<a [routerLink]="['/']">Landing</a>
```

* app-routing.module.ts*

Routing Rule for http://localhost:4200

```{ path: '', pathMatch: 'full', component: LandingComponent }
 // full matches the exact path, only used for root route requests and sub-routing
 ```

Link for http://localhost:4200/notes/private

```<a [routerLink]="['/notes', 'private']">Private Notes</a> //note separation of words
```

Routing Rule for http://localhost:4200/notes/private

```
{ path: 'notes/private', component: NotesPrivateComponent }
```

Link for http://localhost:4200/products
```
<a [routerLink]="['/products']">Products</a>
```

Routing Rule for http://localhost:4200/products
```
{ path: 'products', component: ProductsComponent }
```

Link for http://localhost:4200/gohome

```<a [routerLink]="['/gohome']">Go Home</a>```

Routing Rule for http://localhost:4200/gohome
```
{ path: 'gohome', redirectTo: '/home' } //note redirect to home
```
Link for http://localhost:4200/note/id#
```
<a [routerLink]="['/notes', note.id ]">Home</a>
```

Routing Rule for http://localhost:4200/notes/7
```
{ path: 'notes/:id', component: NotesPrivateComponent } //note the : in front of id
```

Full app-routing.module.ts:
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NotesPrivateComponent } from './notes-private/notes-private.component';
	
const routes: Routes = [
 		 { path: '', pathMatch: 'full', component: LandingComponent },
  		{ path: 'home', component: HomeComponent },
  		{ path: 'notes/private', component: NotesPrivateComponent },
  		{ path: 'gohome', redirectTo: '/home' }
		];
@NgModule({
 		 imports: [RouterModule.forRoot(routes)],
 		 exports: [RouterModule]
	})
export class AppRoutingModule { }
```

In .../app/app.component.html, the URL: ```http://localhost:1337/home``` will be trigger: ```{ path: 'home', component: HomeComponent }``` and therefore the HomeComponent will load within our ```<router-outlet></router-outlet>```

**Additional notes on [Angular](https://docs.google.com/document/d/1ED82oIJ8oXhU1mAnc2xfnhGD0Mf6WF8deYa2HSjAavQ/edit?usp=sharing)**

Notes include:
- Passing info from a Parent Component to the Child Component     pg 5
- Passing info from a Child Component to the Parent Component     pg 5
- TypeScript Variable Types                                       pg 6
- Variable Declarations                                           pg 7
- Functions and Types                                             pg 7
- Modules                                                         pg 7
- Interfaces                                                      pg 8
- Event Listeners                                                 pg 9
- Validations                                                     pg 9
- Multiple/Nested Components                                      pg 10
