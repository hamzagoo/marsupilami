import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { MarsupilamiService } from '../marsupilami.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder , private marsupilamiService: MarsupilamiService,private router:Router) {
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
    if(password_input.value == cPassword_inpust.value){
      this.marsupilamiService.regiter(user_name.value, password_input.value, cPassword_inpust.value);
    }else{
      const reponse = window.confirm("password et confirme Password ne sont pas identique"); 
      if(reponse == true){
        const password = document.getElementById("password") as HTMLInputElement;
        const confirmPassword = document.getElementById("confirme_password") as HTMLInputElement;
        password.value ="";
        confirmPassword.value = "";
      }
    }
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
