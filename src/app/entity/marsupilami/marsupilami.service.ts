import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MarsupilamiService {

  uri = 'http://localhost:4000/marsupilami/';

  constructor(private http: HttpClient, private router: Router) { }

  
  add( age, family, race,food,createdBy) {
    const obj = {
      age: age,
      family: family,
      race: race,
      food: food,
      createdBy: createdBy
    };
    console.log(obj);
    this.http.post(`${this.uri}add`, obj)
        .subscribe(res =>this.router.navigate(['marsupilami/list']));
  }

  getById(id){
    return this
    .http
    .get(`${this.uri}get/`+id);
  }

  edit( id,age, family, race,food,createdBy) {
    const obj = {
      age: age,
      family: family,
      race: race,
      food: food,
      createdBy: createdBy
    };
    console.log(obj);
    this.http.post(`${this.uri}edit/${id}`, obj)
        .subscribe(res => this.router.navigate(['marsupilami/list']));
  }

  delete( id ) {
    return this
    .http
    .get(`${this.uri}/delete/${id}`);
  }

  getAll(){
    return this
    .http
    .get(`${this.uri}list`);
  }
}
