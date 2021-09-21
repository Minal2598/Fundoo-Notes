import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup 


  constructor(private formBuilder: FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
         lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    
       
  });


  }

  onSubmit(){
    console.log("onsubmit function is calling" ,this.registerForm.value);
    let request={
      firstName: this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
      service:"advance"

    }
    console.log(request)
    this.userService.registerUser(request).subscribe((response:any)=>{
      console.log(response);

    }, (error:any)=> {
    console.log(error);

  })
  }
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }





}
