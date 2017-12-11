import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

    addUser(user)
    {
        return this._http.post('/addUser', user).map(data => data.json()).toPromise();
    }
    getSession()
    {
        console.log("Within http service check session method.")
        return this._http.get('/getSession').map(data => data.json()).toPromise();
    }
    addItem(item)
    {
        console.log("Add item method in http service firing...");
        return this._http.post('/addItem', item).map(data => data.json()).toPromise();
    }
    getAllItems()
    {
      console.log("Getting all Items http service firing...");
      return this._http.get('/getAllItems').map(data => data.json()).toPromise();
    }
    getOneItem(currentItemId)
    {
      return this._http.post("/getOneItem", {itemId: itemId}).map(data => data.json()).toPromise();
    }
    updateItem(itemId, idx)
    {
      return this._http.post("/updateItem", {itemId: itemId, idx: idx}).map(data => data.json()).toPromise();
    }

    deleteItem(itemid)
    {
        return this._http.post("/deleteItem", {itemid: itemid}).map(data => data.json()).toPromise();
    }

    logout(){
        return this._http.get("/logout").map(data => data.json()).toPromise();
    }
    destroySession()
    {
        return this._http.get("/destroySession").map(data => data.json()).toPromise();
    }


}
