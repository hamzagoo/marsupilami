import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarsupilamiService } from '../marsupilami.service';

@Component({
  selector: 'app-add-new-marsupilami',
  templateUrl: './add-new-marsupilami.component.html',
  styleUrls: ['./add-new-marsupilami.component.css']
})
export class AddNewMarsupilamiComponent implements OnInit {

  marsupilami:any={};
  CurrentMarsupilami;
  constructor(private masupilamiService:MarsupilamiService,private router:Router) { }

  ngOnInit(): void {
    this.CurrentMarsupilami =  JSON.parse(localStorage.getItem("currentUser"));
    this.marsupilami.friend = this.CurrentMarsupilami;
    console.log("current marsupilami ===> " + this.CurrentMarsupilami );
  }

  registre(username,password, age,family,race,food){ 
   
      this.masupilamiService.ajouteNewMarsupilami(username,password, age,family,race,food,this.CurrentMarsupilami);
   
  }
  redirectToLogin(){ 
    const reponse = window.confirm("confirmer la déconnexion"); 
    if(reponse == true){
      this.router.navigate([''])
    }
  }

  redirectToList(){
    this.router.navigate(["marsupilami/list"]);
  }
}
