import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
    @Input() power;
  constructor() { }

  ngOnInit() {
      console.log(typeof this.power)
  }

}
