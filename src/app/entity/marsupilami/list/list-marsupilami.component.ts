import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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

  constructor(private router:Router, private marsupilamiService: MarsupilamiService) { }


  redirectToEdit(id){
    localStorage.setItem("id", JSON.stringify(id));
    this.router.navigate(['marsupilami/edit/'])
  }

  delete(id){
    this.marsupilamiService.delete(id).subscribe(res => {
      console.log('Deleted');
      this.getAll();
    });;
  }

  
  redirectToAdd(){
    this.router.navigate(['marsupilami/add'])
  }

  getAll(){
   this.marsupilamiService.getAll().subscribe((res: Marsupilami[]) => {
    this.data = res;
    })
  }

  open(id) {
    const reponse = window.confirm("Confirmer la suppression !! "); 
    if(reponse == true){
      this.delete(id);
    }
  }

  ngOnInit(): void {
    this.getAll();
  }

  redirectToRegister(){
    this.router.navigate(['login/register'])
  }

  redirectToLogin(){
    this.router.navigate([''])
  }

}

 


