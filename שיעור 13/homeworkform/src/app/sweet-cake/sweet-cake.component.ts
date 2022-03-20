import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sweet-cake',
  templateUrl: './sweet-cake.component.html',
  styleUrls: ['./sweet-cake.component.css']
})
export class SweetCakeComponent implements OnInit {

  constructor() { }

  cake:any = {};

  ngOnInit(): void {
  }
  Submitfunc(cakedata:NgForm){
    this.cake = cakedata;

    if(this.cake.caketags!= '')
      {
        this.cake.caketags= this.cake.caketags.split(',')
      }
    console.log(this.cake)
  }
}
