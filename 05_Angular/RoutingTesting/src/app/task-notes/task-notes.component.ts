import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-notes',
  templateUrl: './task-notes.component.html',
  styleUrls: ['./task-notes.component.css']
})
export class TaskNotesComponent implements OnInit {
    notes: Array<string> =["HI", "I love Angular... kinda", "4", "four"];
    currentId: number;
    currentNote: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
      this.router.params.subscribe((param) => {
          console.log("param.id", param.id);
          this.currentNote = this.notes[param.id];
      })
  }


}
 //params is the obserable that hold the info about the route parameter
 //.subscribe() takes a callback function which take in the param
 //
