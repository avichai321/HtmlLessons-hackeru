import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template:`<p class="copy">Copyright Eyal Bardugo {{getCurrentYear()}}.`,
  styles: [`
    .copy {
      font-weight: 700;
      color:grey;
    }
  `],
  // templateUrl: './copyright.component.html',
  // styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getCurrentYear() : number {
    let date = new Date();
    let year = date.getFullYear();
    return year;
  }

}
