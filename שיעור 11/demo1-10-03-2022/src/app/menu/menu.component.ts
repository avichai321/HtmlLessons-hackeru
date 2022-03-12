import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links:any[] = [];

  constructor() { 
    this.links = [
      {title: 'Yahoo', link:'https://yahoo.com', target:'_blank'},
      {title: 'Google', link:'https://google.com', target: ''},
    ];

    this.links = [
      {title: 'Yahoo', link:'https://yahoo.com',tags:['a','b','c']},
      {title: 'Google', link:'https://google.com',tags:['a1','b1','c1']},
    ];
    

  }

  ngOnInit(): void {
  }

}
