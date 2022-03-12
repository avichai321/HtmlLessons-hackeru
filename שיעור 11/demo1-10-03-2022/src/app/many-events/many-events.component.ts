import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-many-events',
  templateUrl: './many-events.component.html',
  styleUrls: ['./many-events.component.css']
})
export class ManyEventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getData(data:any) {
    console.warn(data);
    
  }
  
  getEventAndData(event:any, data:string) {
      console.log(event);
      //console.log('type:' ,event.type);     
  }
  
  isHidden:boolean = false;
  toggle() {
    this.isHidden = !this.isHidden;
  }


}
