import { Injectable } from '@angular/core';
import {  Http } from '@angular/http'; //importing http class from module
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpService {

  constructor(
      private _http: Http
  ) { }

  get(url){
      return this._http.get(url)
      .map (data => data.json())
      .toPromise();
  }
}
