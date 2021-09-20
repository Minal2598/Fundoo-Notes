import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup 

  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
       
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    
       
  });

  }
// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }


}
