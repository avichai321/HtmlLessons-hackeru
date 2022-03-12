import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temprature',
  templateUrl: './temprature.component.html',
  styleUrls: ['./temprature.component.css']
})
export class TempratureComponent implements OnInit {


  tempDesc:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  handleTempChange(temp:string ) {
    let tempAsNum = parseFloat(temp);

    if (tempAsNum < 20) {
      this.tempDesc = `הטמפרטורה אצלך היא ${temp} - לכן עליך ללבוש מעיל!`;
    } else {
      this.tempDesc = `הטמפרטורה אצלך היא ${temp} - איזה כיף! אפשר להסתובב עם חולצה קצרה`;
    }
  }

}
