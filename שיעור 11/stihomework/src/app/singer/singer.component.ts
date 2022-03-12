import { Component, OnInit } from '@angular/core';
import type { Singer } from '../interfaces/Isinger';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {

  singer: Singer = {
    Firstname: 'Lalisa (Lisa)',
    Lastname: 'Manoban',
    Age: 24,
    Songs: ['Gurenge', 'Crossing Field', 'Homura'],
    pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/180819_%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC_%ED%8C%AC%EC%8B%B8%EC%9D%B8%ED%9A%8C_%EC%BD%94%EC%97%91%EC%8A%A4_%EB%9D%BC%EC%9D%B4%EB%B8%8C%ED%94%84%EB%9D%BC%EC%9E%90_%EB%A6%AC%EC%82%AC.jpg/220px-180819_%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC_%ED%8C%AC%EC%8B%B8%EC%9D%B8%ED%9A%8C_%EC%BD%94%EC%97%91%EC%8A%A4_%EB%9D%BC%EC%9D%B4%EB%B8%8C%ED%94%84%EB%9D%BC%EC%9E%90_%EB%A6%AC%EC%82%AC.jpg',
  };

 
  constructor() {
 
  }
  ngOnInit(): void {
  }
  getlocation() {
    return 'south korea';
  }
}
