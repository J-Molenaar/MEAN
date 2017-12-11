import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
    data = [];
  constructor(   private _httpService: HttpService ) { }


  ngOnInit() {
      this._httpService.get("http://api.openweathermap.org/data/2.5/weather?q=sanjose,ca,us&units=imperial&appid=63250a143be1ec600b13055e12932cff")
      .then(data => {this.data = data;})
      .catch(err => {console.log("Error: Location not found")});

      return false;
  }

}
