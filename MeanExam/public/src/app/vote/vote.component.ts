import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
    itemId: string;
    currentItem;
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
      this.getOneItem(this.itemId);
  }

  getOneItem(itemId)
    {
      this._httpService.getOneItem(itemId)
        .then((item) => {
            this.currentItem = item;
            console.log("Current item is :" + this.currentItem)
        })
        .catch((err) => {console.log(err)})
    }

    vote(itemId, idx)
    {
      this._httpService.updateItem(itemId, idx)
        .then((item) => {
          console.log("Updated successfully");
          this.getOneItem(this.itemId);
      })
        .catch((err) => {console.log("Errors during update " + err)})
    }

}
