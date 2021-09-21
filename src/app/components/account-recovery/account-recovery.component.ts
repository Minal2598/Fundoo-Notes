import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-account-recovery',
  templateUrl: './account-recovery.component.html',
  styleUrls: ['./account-recovery.component.scss']
})
export class AccountRecoveryComponent implements OnInit {
  accountrecoveryForm!: FormGroup 

  constructor(private formBuilder: FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this. accountrecoveryForm = this.formBuilder.group({
       
        
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    
       
  });

  }
  onSubmit(){
    console.log("onsubmit function is calling" ,this.accountrecoveryForm.value);
    let request={
     
     
      email:this.accountrecoveryForm.value.email,
      service:"advance"

    }
    console.log(request)
    this.userService.accountrecoveryUser(request).subscribe((response:any)=>{
      console.log(response);

    }, (error:any)=> {
    console.log(error);

  })
  }
// convenience getter for easy access to form fields
get f() { return this. accountrecoveryForm.controls; }


}
