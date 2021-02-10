import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MarsupilamiService {

  uri = 'http://localhost:4000/marsupilami/';

  constructor(private http: HttpClient, private router: Router) { }

  
  add(username, password,age, family, race,food,createdBy) {
    const obj = {
      username:username,
      password:password,
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

  edit( id,age, family, race,food,friend) {
    const obj = {
      age: age,
      family: family,
      race: race,
      food: food,
      friend: friend
    };
    console.log(id);
    this.http.post(`${this.uri}edit/${id}`, obj)
        .subscribe(res => this.router.navigate(['marsupilami/list']));
  }

  delete( id ) {
    return this
    .http
    .get(`${this.uri}/delete/${id}`);
  }

  getAllMarsupilami(){
    return this
    .http
    .get(`${this.uri}list`);
  }

  getAllFriend(usernameMarsupilami){
    return this
    .http
    .get(`${this.uri}list/${usernameMarsupilami}`);
  }

  regiter( username, password, confirmrPassword) {
    const obj = {
      username: username,
      password: password,
      confirmrPassword: confirmrPassword
    };
    console.log(obj);
    this.http.post(`${this.uri}register`, obj)
        .subscribe(res => {
          localStorage.setItem("id", JSON.stringify(res)),
          console.log(res),
          this.router.navigate(['/marsupilami/list']),
          localStorage.setItem("currentUser", JSON.stringify(username));
        });
  }

  login(username, password) {
    const obj = {
      username: username,
      password: password
    };
    console.log(obj);
    this.http.post(`${this.uri}login`, obj)
        .subscribe(
          res => {
            this.router.navigate(['/marsupilami/list'])
            localStorage.setItem("currentUser", JSON.stringify(username));
            localStorage.setItem("id", JSON.stringify(res["_id"])),
            console.log("==> " + res["_id"] )
           },
          (err) =>{
           const result =  window.confirm("Username or password is incorrect")
           if(result ==  true){
            let password_input = document.getElementById('password')as HTMLInputElement
            password_input.value=""
           }
        }
          );
  }
}
