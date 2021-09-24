import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-account-recovery',
  templateUrl: './account-recovery.component.html',
  styleUrls: ['./account-recovery.component.scss']
})
export class AccountRecoveryComponent implements OnInit {
  accountrecoveryForm!: FormGroup 

  constructor(private formBuilder: FormBuilder, private userService:UserService,private snackBar:MatSnackBar) { }

  ngOnInit() {
    this. accountrecoveryForm = this.formBuilder.group({
       
        
      email: ['', [Validators.required, Validators.email]],
      
    
       
  });

  }
  onSubmit(){
    console.log("onsubmit function is calling" ,this.accountrecoveryForm.value);
    let request={
     
     
      email:this.accountrecoveryForm.value.email,
     

    }
    console.log(request)
    this.userService.accountrecoveryUser(request).subscribe((response:any)=>{
      console.log(response);
      this.snackBar.open("Login succfully ", ' ', {
        duration: 1000,
     });

    }, (error:any)=> {
    console.log(error);
    this.snackBar.open("Login succfully ", ' ', {
      duration: 1000,
   });

  })
  }
// convenience getter for easy access to form fields
get f() { return this. accountrecoveryForm.controls; }


}
