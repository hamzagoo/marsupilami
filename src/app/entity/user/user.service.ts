import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uri = 'http://localhost:4000/user/';

  constructor(private http: HttpClient,  private router: Router) { }

  regiter( username, password, confirmrPassword) {
    const obj = {
      username: username,
      password: password,
      confirmrPassword: confirmrPassword
    };
    console.log(obj);
    this.http.post(`${this.uri}register`, obj)
        .subscribe(res => {
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
