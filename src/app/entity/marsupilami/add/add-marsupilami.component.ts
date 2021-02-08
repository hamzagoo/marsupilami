import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marsupilami } from '../marsupilami';
import { MarsupilamiService } from '../marsupilami.service';

@Component({
  selector: 'app-add-marsupilami',
  templateUrl: './add-marsupilami.component.html',
  styleUrls: ['./add-marsupilami.component.css']
})
export class AddMarsupilamiComponent implements OnInit {

 marsupilami:any ={} //Marsupilami = { _id: 0,age: 0 ,family: '', race: '', food: '', createdBy: ''};

  constructor( private marsupilamiService: MarsupilamiService , private route: Router) { }

  ngOnInit(): void {
    
    this.marsupilami.createdBy =  JSON.parse(localStorage.getItem("currentUser"));
  }

  save(){
   // console.log(this.marsupilami.age,this.marsupilami.family,this.marsupilami.race,this.marsupilami.food,this.marsupilami.createdBy);
    this.marsupilamiService.add(this.marsupilami.age,this.marsupilami.family,this.marsupilami.race,this.marsupilami.food,this.marsupilami.createdBy);
  }

  redirectToRegister(){
    this.route.navigate(['login/register'])
  }

  redirectToLogin(){
    this.route.navigate([''])
  }

  goToHome(){
    this.route.navigate(['marsupilami/list'])
  }
}
