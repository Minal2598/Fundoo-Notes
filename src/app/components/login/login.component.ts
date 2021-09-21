import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup 

  constructor(private formBuilder: FormBuilder, private userService:UserService ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
       
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    
       
  });

  }
  onSubmit(){
    console.log("onsubmit function is calling" ,this.loginForm.value);
    let request={
     
      email:this.loginForm.value.email,
      password:this.loginForm.value.password,
      service:"advance"

    }
    console.log(request)
    this.userService.loginUser(request).subscribe((response:any)=>{
      console.log(response);

    }, (error:any)=> {
    console.log(error);

  })
  }
// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }


}
