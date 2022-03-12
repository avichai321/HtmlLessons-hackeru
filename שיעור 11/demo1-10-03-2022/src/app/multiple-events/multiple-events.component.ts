import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-events',
  templateUrl: './multiple-events.component.html',
  styleUrls: ['./multiple-events.component.css']
})
export class MultipleEventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onAge1(value:string) {
    console.log(value);
  }

}
