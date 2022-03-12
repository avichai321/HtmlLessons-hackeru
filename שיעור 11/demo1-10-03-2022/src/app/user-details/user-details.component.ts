import { Component, OnInit } from '@angular/core';
import type { User } from  '../interfaces/User';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User = {
    name: 'Eyal',
    email:'bardugo@yahoo.com',
    birthDate: Date.parse('1980-07-08'),
  };

  


  
  constructor() { 

  
  }

  getSomeString() {
    return 'WOW!';
  }

  ngOnInit(): void {
  }


  CalculateAgeOrShani(dateOfBirth:any){
    let dob = new Date(dateOfBirth);
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970)
  }



  calculateAge(dateOfBirth:number):number { 
    if (dateOfBirth!=undefined) {
      let dob = new Date(dateOfBirth);
      let diff_ms = Date.now() - dob.getTime();
      let age_dt = new Date(diff_ms); 


    
      return Math.abs(age_dt.getUTCFullYear() - 1970);
     // return (new Date(Date.now()).getUTCFullYear() -  dob.getUTCFullYear());
    }
    return 0;
  }

}

