import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-meter',
  templateUrl: './temp-meter.component.html',
  styleUrls: ['./temp-meter.component.css']
})
export class TempMeterComponent implements OnInit {

  constructor() { }

  tempDesc:string='';

  ngOnInit(): void {
  }

  onChangeTemp(tempAsString:string) :void {
    let temp:number = parseFloat(tempAsString);
    if (temp <=20 ) {
      this.tempDesc = `הטמפרטורה היא ${temp} - קריר יחסית`;
    } else if (temp >20 && temp < 30) {
      this.tempDesc = `הטמפרטורה היא ${temp} -נעים`;
    } else if (temp >=30) {
      this.tempDesc = `הטמפרטורה היא ${temp} - חם מאוד!`;
    }
  }
}
