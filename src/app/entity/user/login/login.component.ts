import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder , private userService: UserService , private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ],
      confirme_password: ['', Validators.required ]
    });
  }

  login(username,password){
    let username_input = document.getElementById(username)as HTMLInputElement;
    let password_input = document.getElementById(password)as HTMLInputElement
    this.userService.login(username_input.value,password_input.value);
  }

  ngOnInit(): void {
  }

  redirectToRegister(){
    this.router.navigate(['login/register'])
  }

  redirectToLogin(){
    this.router.navigate([''])
  }
}
