import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { Item } from "../item";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    item = new Item();
    userId: string;
  constructor(private _httpService: HttpService, private router: Router) { }

    ngOnInit() {
        this._httpService.getSession()
            .then((user) => {console.log(user)
                this.userId = user._id;
            })
            .catch((err) => { console.log(err); });
    }
    newItem() {
        this._httpService.addItem(this.item)
            .then(()=>{});
        this.item = new Item();
    }

    logout(){
        this._httpService.logout()
        .then(result=>{
            this.router.navigate(["/"])
        });

    }


}
