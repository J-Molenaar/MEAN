import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
    data = [];
  constructor(
      private _httpService: HttpService
  ) {}

  ngOnInit() {
      this._httpService.get("http://api.openweathermap.org/data/2.5/weather?q=Seattle,us&units=imperial&appid=63250a143be1ec600b13055e12932cff")
      .then(data => {this.data = data;})
      .catch(err => {console.log("Error: Location not found")});

      return false;
  }

}
