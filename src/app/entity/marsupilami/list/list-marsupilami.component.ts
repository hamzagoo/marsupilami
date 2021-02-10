import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Marsupilami } from '../marsupilami';
import { MarsupilamiService } from '../marsupilami.service';

@Component({
  selector: 'app-list-marsupilami',
  templateUrl: './list-marsupilami.component.html',
  styleUrls: ['./list-marsupilami.component.css']
})
export class ListMarsupilamiComponent implements OnInit {


  id= 0;
  data : Marsupilami[];
  CurrentMarsupilami:any;

  constructor(private router:Router, private marsupilamiService: MarsupilamiService) { }


  redirectToEdit(){
      this.router.navigate(['marsupilami/edit/'])
  }

  delete(id){
    this.marsupilamiService.delete(id).subscribe(res => {
      console.log('Deleted');
      this.getAll();
    });
    
  }

  
  redirectToAdd(){
    this.router.navigate(['marsupilami/add'])
  }

  getAll(){
   this.marsupilamiService.getAllFriend(this.CurrentMarsupilami).subscribe((res: Marsupilami[]) => {
    this.data = res;
    })
  }

  open(id,createdBy) {
    // recuperation de l'utilisateur courant dans localStorage
    const CurrentCreatedBy =  JSON.parse(localStorage.getItem("currentUser"));
    // test pour les droits d'accée 
    if(createdBy == CurrentCreatedBy || CurrentCreatedBy =="Admin"){
      const reponse = window.confirm("Confirm deletion !! "); 
      if(reponse == true){
        this.delete(id);
      }
    }else{
      window.alert("you don't have the right to delete it !! you are not the owner ")
    }  
   
  }

  ngOnInit(): void {
    this.CurrentMarsupilami =  JSON.parse(localStorage.getItem("currentUser"));
    this.id = JSON.parse(localStorage.getItem("id"));
    this.getAll();
  }

  redirectToLogin(){ 
    const reponse = window.confirm("confirmer la déconnexion"); 
    if(reponse == true){
      this.router.navigate([''])
    }
  }
 
}

 


