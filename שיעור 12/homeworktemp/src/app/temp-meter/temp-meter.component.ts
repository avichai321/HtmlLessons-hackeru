import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-meter',
  templateUrl: './temp-meter.component.html',
  styleUrls: ['./temp-meter.component.css']
})
export class TempMeterComponent implements OnInit {

  constructor() { }
  tempDesk: string = "";

  ngOnInit(): void {
  }
  getnumber(num: string) {
    let tempnum = parseInt(num)
    if (tempnum <= 20) {
      this.tempDesk = ' הטמפרטורה היא ' + num + '- קריר יחסית'
    }
    else if (tempnum > 20 && tempnum < 30) {

      this.tempDesk = ' הטמפרטורה היא ' + num + '- נעים ונוח' 
    }
    else{
      this.tempDesk = 'הטמפרטורה היא ' + num + '- חם מאוד!'
    }
  }


}
