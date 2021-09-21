import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service/user.service';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetpasswordForm!: FormGroup 
  token:any
       

  constructor(private formBuilder: FormBuilder, private userService:UserService,private activatedRoute:ActivatedRoute ) { }

  ngOnInit() {
    this.resetpasswordForm = this.formBuilder.group({
     
        
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    
       
  });

  }
  onSubmit(){
     let token = this.activatedRoute.snapshot.paramMap.get('token');
     console.log(this.token);

     localStorage.setItem('token',this.token)
    console.log("onsubmit function is calling" ,this.resetpasswordForm.value);
    let request={
     
     
      newPassword:this.resetpasswordForm.value.password,
      

    }
    console.log(request)
    this.userService.resetpasswordUser(request,this.token).subscribe((response:any)=>{
      console.log(response);

    }, (error:any)=> {
    console.log(error);

  })
  }
// convenience getter for easy access to form fields
get f() { return this.resetpasswordForm.controls; }

}
