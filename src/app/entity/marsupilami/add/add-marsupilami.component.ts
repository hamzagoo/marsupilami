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
 data : Marsupilami[];
 currenMarsupilami;
 id;
  constructor( private marsupilamiService: MarsupilamiService , private route: Router) { }

  ngOnInit(): void {
    this.id =  JSON.parse(localStorage.getItem("id"));
    this.currenMarsupilami =  JSON.parse(localStorage.getItem("currentUser"));
    this.getAllMarsupilami();
  }

  getAllMarsupilami(){
    let count = 0;
    this.marsupilamiService.getAllMarsupilami().subscribe((res: Marsupilami[]) => {
      this.data = res; 
      this.data.forEach(element => {
        if(element._id == this.id || element.friend == this.currenMarsupilami){
          this.data.splice(count,1)
        }
        count++
      });
      console.log (this.data)
      })
  }
  save(marsupilami){
    marsupilami['friend'] = this.currenMarsupilami;
    this.marsupilamiService.edit(marsupilami["_id"],marsupilami['age'],marsupilami['family'],marsupilami['race'],marsupilami['food'],marsupilami['friend']);
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

  goToHome(){
    this.route.navigate(['marsupilami/list'])
  }
}
