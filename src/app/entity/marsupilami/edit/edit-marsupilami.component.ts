import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marsupilami } from '../marsupilami';
import { MarsupilamiService } from '../marsupilami.service';

@Component({
  selector: 'app-edit-marsupilami',
  templateUrl: './edit-marsupilami.component.html',
  styleUrls: ['./edit-marsupilami.component.css']
})
export class EditMarsupilamiComponent implements OnInit {

  marsupilami:any = {};
  id;
  constructor(private marsupilamiService:MarsupilamiService,private route: Router) {
    
   }

  ngOnInit(): void { 
    // recuperation id dans localStorage
    this.id =  JSON.parse(localStorage.getItem("id"));
    this.getMarsupilamiById();
  }

  getMarsupilamiById(){
    this.marsupilamiService.getById(this.id).subscribe((res: Marsupilami) => {
      this.marsupilami = res;
      })
  }

  save( age, family, race,food,friend){
      this.marsupilamiService.edit( this.id,age, family, race,food,friend);
      
  }

  redirectToList(){
    this.route.navigate(['marsupilami/list']);
  }

  
  redirectToRegister(){
    this.route.navigate(['login/register'])
  }

  redirectToLogin(){ 
    const reponse = window.confirm("confirmer la déconnexion"); 
    if(reponse == true){
      this.route.navigate([''])
    }
  }
}
