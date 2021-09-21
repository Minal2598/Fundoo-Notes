import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpasswordForm!: FormGroup 

  constructor(private formBuilder: FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.resetpasswordForm = this.formBuilder.group({
       
        
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    
       
  });

  }
  onSubmit(){
    console.log("onsubmit function is calling" ,this.resetpasswordForm.value);
    let request={
     
     
      password:this.resetpasswordForm.value.password,
      service:"advance"

    }
    console.log(request)
    this.userService.resetpasswordUser(request).subscribe((response:any)=>{
      console.log(response);

    }, (error:any)=> {
    console.log(error);

  })
  }
// convenience getter for easy access to form fields
get f() { return this.resetpasswordForm.controls; }

}
