import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
    allItems = [];
    userId: string;

  constructor(private _httpService: HttpService, private router: Router)

  { }

  ngOnInit() {
    this.getAllItems();
    console.log(this.allItems)
    this._httpService.getSession()
      .then((user) => {console.log(user)
      this.userId = user._id; })
      .catch((err) => { console.log(err); });

  }
  getAllItems() {
      this._httpService.getAllItems()
        .then((items) => { this.allItems = items; })
        .catch((err) => { console.log(err); });
    }

    delete(itemid){
        this._httpService.deleteItem(itemid)
        .then(()=>{this.getAllItems()});

    }

  logout(){
    this._httpService.logout()

}

}
