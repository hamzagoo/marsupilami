import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder , private userService: UserService,private router:Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ],
      confirme_password: ['', Validators.required ],
    });
  }

  registre(username,password, confirmrPassword){ 
    let user_name = document.getElementById(username) as HTMLInputElement;
    let password_input = document.getElementById(password) as HTMLInputElement;
    let cPassword_inpust = document.getElementById(confirmrPassword) as HTMLInputElement;
    this.userService.regiter(user_name.value, password_input.value, cPassword_inpust.value);
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
